---
title: Indexierung, die fertig wird, und Telemetrie, die aufhört
description: Zwei Probleme aus einer produktiven RAG-Dokumentsuchplattform und warum das langweilige das wichtigere war.
publishDate: 2026-08-03
draft: false
lang: de
project: RAG Document Search Platform (RISE)
tags:
  - RAG
  - Elasticsearch
  - FastAPI
  - Streamlit
  - Data Protection
---

## Kontext

RISE betreibt eine dokumentbasierte KI-Suchplattform auf Basis von Retrieval-Augmented
Generation. Ich habe an den Python- und FastAPI-Services dahinter gearbeitet: Ingestion,
Indexierung, Retrieval und die API-Schicht, die sie bereitstellt. Was folgt, ist die
Engineering-Argumentation, nicht das Innenleben des Produkts.

## Problem eins: Indexierung, die nicht fertig wurde

Embedding und Indexierung funktionierten auf den Dokumentbeständen, gegen die sie getestet
wurden. Auf großen liefen sie nicht durch. Der Crawl fand weit mehr Dokumente als erwartet,
und der Indexierungsschritt kam nicht durch sie hindurch.

Das ist schlimmer als eine langsame Pipeline. Ein teilweise indexierter Korpus ist nicht
sichtbar kaputt. Die Suche liefert weiterhin Ergebnisse, sie sind weiterhin relevant, und
nichts wirft einen Fehler. Das System kann schlicht nicht aus den Dokumenten antworten, die
nie hineingelangt sind, und es gibt kein offensichtliches Signal, das "es existiert keine
gute Antwort" von "dieses Dokument wurde nie indexiert" unterscheidet. Stille
Unvollständigkeit in einem Retrieval-System ist ein Korrektheitsfehler im Kostüm eines
Performance-Problems.

### Die Lösung

Die Embedding-Arbeit wurde als einzelne Aufrufe abgesetzt, einer pro Arbeitseinheit, sodass
die Zahl der Roundtrips eins zu eins mit der Zahl der Dokumente skalierte. Ab einer
gewissen Korpusgröße kam der Lauf nicht mehr durch.

Das Bündeln der Aufrufe in Batches reduzierte diesen Overhead. Dieselbe Textmenge musste
weiterhin eingebettet werden, aber sie kam nicht mehr als Tausende separater Requests an.
Damit wurde der Abschluss für die größeren Crawls praktikabel, die die Plattform
unterstützen musste. Die entscheidende Eigenschaft war nicht einfach, dass die Indexierung
schneller wurde, sondern dass die erforderlichen Indexierungsläufe zuverlässig fertig
werden konnten.

Die Batch-Größe ist der Regler, den das einführt, und sie ist ein Kompromiss, keine zu
maximierende Zahl. Größere Batches amortisieren mehr Overhead pro Aufruf, vergrößern aber
die Payload und den Schadensradius eines einzelnen Fehlers, denn ein fehlgeschlagener Batch
reißt jedes Dokument darin mit. Kleinere Batches zahlen mehr Overhead und scheitern
gnädiger.

Also habe ich die Batch-Größe konfigurierbar gemacht, statt einen Wert zu wählen und im
Code zu vergraben. Die richtige Größe hängt vom Provider, der Dokumentmischung und der
Toleranz der Umgebung ab, und nichts davon ist bekannt, wenn man die Schleife schreibt. Sie
fest zu verdrahten hätte eine Pipeline, die nicht fertig wird, durch eine ersetzt, die
fertig wird, bis sich die Bedingungen ändern. Ein Regler, den jemand ohne Codeänderung
drehen kann, ist der Unterschied zwischen einer Lösung und einer Lösung mit
Haltbarkeitsdatum.

Die allgemeine Lehre daraus: Ingestion muss für den größten plausiblen Input dimensioniert
werden, nicht für den, mit dem sie vorgeführt wurde. Dokumentzahlen sind nicht
gleichverteilt. Die interessanten Korpora sind die großen, und genau an denen scheitert
eine Pro-Element-Implementierung.

## Problem zwei: Telemetrie, um die niemand gebeten hat

KI- und Suchkomponenten werden mit standardmäßig aktivierter Telemetrie ausgeliefert.
Mehrere Bibliotheken in diesem Stack telefonieren nach Hause, wenn man es ihnen nicht
abstellt, und der Standard ist meist Opt-out statt Opt-in.

Ich habe die Telemetrie in diesen Komponenten deaktiviert und anschließend verifiziert,
dass der unbeabsichtigte Datenabfluss tatsächlich gestoppt war, statt darauf zu vertrauen,
dass ein gesetztes Flag getan hat, was die Dokumentation behauptet. Dieser
Verifikationsschritt ist der Teil, der bleiben sollte. Eine Konfigurationsänderung, deren
Wirkung man nicht beobachtet hat, ist eine Überzeugung, keine Kontrolle.

Für eine Plattform, die Kundendokumente innerhalb der EU indexiert, ist ein unbemerkter
ausgehender Datenfluss eine andere Problemkategorie als eine langsame Abfrage. Es ist
außerdem die Art von Problem, die nie ein Ticket erzeugt, weil für niemanden etwas kaputt
wirkt.

## Retrieval-Qualität inspizierbar machen

Retrieval-Verhalten lässt sich aus Logs schwer erschließen. "Die Antwort war schlecht" kann
bedeuten, dass das Retrieval nichts Brauchbares zurückgab, dass es brauchbaren Kontext
zurückgab, den das Modell ignorierte, oder dass die Frage komplett außerhalb des Korpus
lag. Das sind unterschiedliche Fehler mit unterschiedlichen Lösungen.

Ich habe interne FastAPI- und Streamlit-Tools für Abfragetests und Ergebnisinspektion
gebaut, damit das Team sehen konnte, was das Retrieval für eine Abfrage tatsächlich
zurückgab, statt es aus der finalen Antwort abzuleiten. Solche Tools werden leicht
aufgeschoben, weil sie nichts an Kunden ausliefern. Sie sind aber auch das, was
Diskussionen über Suchqualität in Beobachtungen verwandelt.

Außerdem habe ich das relevante Codeverhalten, Systemflüsse und Implementierungsänderungen
dokumentiert und vermittelt, was Wissenskonzentration reduzierte und das System für andere
Engineers leichter verständlich und erweiterbar machte.

## Was ich beibehalten würde

Beide Lösungen teilen ein Muster: Der Fehler war von außen unsichtbar. Unvollständige
Indizes liefern weiterhin Ergebnisse, und unerwünschte Telemetrie lässt weiterhin alles
funktionieren. In KI-Systemen sind die teuersten Fehler selten die, die eine Exception
werfen. Es sind die, die eine Antwort leise verschlechtern, während jedes Dashboard grün
bleibt. Deshalb lohnt es sich, Verifikation und Inspizierbarkeit zu bauen, bevor sie
offensichtlich gebraucht werden.

## Grenzen

Dieser Text beschreibt Arbeit an der Plattform eines Arbeitgebers und bleibt daher auf der
Ebene der Engineering-Argumentation: keine interne Architektur, keine Kundendaten, keine
Korpusdetails, keine Leistungszahlen. Ich beanspruche nicht die Plattform als Ganzes, und
ich mache keine gemessene Aussage über Gewinne bei der Retrieval-Qualität.
