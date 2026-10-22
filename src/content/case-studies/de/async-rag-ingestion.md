---
title: RAG-Ingestion raus aus dem Request-Pfad
description: Warum ein Dokumentations-Suchsystem Crawling und Indexierung hinter eine Queue verlagert hat und was dieser Tausch gekostet hat.
publishDate: 2026-08-03
draft: false
lang: de
project: RAG Pipeline / Documentation Helper
tags:
  - Python
  - FastAPI
  - RabbitMQ
  - Redis
  - Pinecone
  - LangChain
---

## Das Problem

RAG-Demos crawlen, chunken, embedden und indexieren üblicherweise innerhalb des Requests,
der danach gefragt hat. Das funktioniert bis zum ersten echten Dokumentbestand: Ein Crawl
nennenswerter Größe hält die Verbindung minutenlang offen, eine einzelne fehlgeschlagene
Seite kann die gesamte Ingestion abbrechen, und der Aufrufer kann nur durch Warten
herausfinden, was passiert ist.

Ingestion und Retrieval haben operativ fast nichts gemeinsam. Retrieval ist schnell, häufig
und günstig. Ingestion ist langsam, selten, teuer und schlägt auf eine Weise fehl, bei der
sich ein erneuter Versuch lohnt. Beides in denselben Request zu packen ist der Grund, warum
sich RAG-Systeme fragil anfühlen.

## Die Entscheidung

Ingestion-Requests geben sofort `202 Accepted` zurück und übergeben die Arbeit an
RabbitMQ-Worker. Redis hält den Job-Status, sodass Aufrufer den Fortschritt abfragen, statt
eine Verbindung offen zu halten. Tavily übernimmt den Crawl, Inhalte werden in Chunks zerlegt
und eingebettet, und Pinecone speichert die Vektoren, die der Query-Pfad später abruft.

Die Kosten sind real und sollten klar benannt werden: zwei zusätzliche
Infrastrukturkomponenten, ein zu modellierender Job-Lebenszyklus und ein asynchroner
Vertrag, den Clients verstehen müssen. Für eine Demo ist das ein schlechter Tausch. Für
alles, was Dokumente nach Zeitplan einliest, zahlt es sich beim ersten halb fehlgeschlagenen
Crawl aus.

## Was ich verworfen habe

**Synchrone Ingestion mit längerem Timeout.** Verschiebt den Fehler, statt ihn zu
beseitigen, und bietet überhaupt keine Retry-Möglichkeit.

**Ein Hintergrund-Thread im API-Prozess.** Die billigste Option, die aber bei jedem
API-Neustart alle laufenden Jobs verliert, also genau dann, wenn Jobs am wahrscheinlichsten
laufen.

## Fehlerbehandlung

Drei Fehlermodi wurden explizit berücksichtigt, weil jeder von ihnen standardmäßig lautlos
ist:

- **Schwache Retrieval-Evidenz.** Retrieval-Guardrails verwerfen Kontext, der die
  Evidenzschwelle nicht erreicht, damit das Modell kein dünnes Material erhält, zu dem es
  selbstbewusst klingen soll. Antworten enthalten belegende Quellenangaben.
- **Hintergrundarbeit, die abbricht.** Worker wiederholen fehlgeschlagene Verarbeitung, und
  Nachrichten, die dauerhaft scheitern, landen in einer Dead-Letter-Queue, statt zu
  verschwinden.
- **Provider-Lock-in.** Sprachmodell- und Embedding-Arbeit läuft wahlweise lokal gegen
  Ollama oder gegen Google Gemini, sodass ein Provider-Ausfall oder eine Preisänderung nur
  eine Konfigurationsänderung ist.

Pytest deckt API-, Ingestion-, Queue-, Worker-, Job-Status-, Dead-Letter- und
Integrationspfade ab, also die Grenzen zwischen den Komponenten, an denen diese Architektur
tatsächlich brechen kann.

Der gesamte Stack (API, Worker, Streamlit-UI, RabbitMQ, Redis) startet aus einer einzigen
Docker-Compose-Datei, sodass das asynchrone Verhalten reproduzierbar ist statt nur
beschrieben.

## Grenzen

Dies ist ein lokaler, containerisierter Referenz-Stack. Er ist nicht in einer Cloud-Umgebung
deployt und hat weder Authentifizierung noch Mandantentrennung oder Produktions-Monitoring.
Ich habe keine Antwortqualitätsgewinne gegen eine Baseline gemessen und behaupte hier daher
nichts über Retrieval-Qualität, sondern nur etwas über die operativen Eigenschaften des
Ingestion-Designs.

[Quellcode auf GitHub](https://github.com/ErmisCho/rag-pipeline)
