---
title: Eine Evaluierung, die sich nichts vormacht
description: Wie doppelte SMS-Nachrichten Spam-Erkennungswerte aufblähen und was es kostet, das zu verhindern.
publishDate: 2026-08-03
draft: false
lang: de
project: SMS Spam Detection NLP
tags:
  - Python
  - scikit-learn
  - FastAPI
  - React
  - Azure
---

## Das Problem

Der UCI-SMS-Datensatz enthält exakte Duplikate. Ein naiver Split legt einen Teil dieser
Duplikate ins Training und ihre Zwillinge in den Test. Das Modell schneidet dann bei
Nachrichten gut ab, die es bereits auswendig kennt, und die berichtete Metrik misst das
Wiedererkennen des Splits, nicht die Generalisierung.

Das ist die häufigste Art, wie ein Machine-Learning-Portfolioprojekt lügt, ohne dass es
jemand beabsichtigt. Die Zahl ist echt, reproduzierbar und bedeutungslos.

## Die Entscheidung

Exakt identischer Text darf die Grenze zwischen Trainings- und Testdaten nicht überqueren.
Die bevorzugte Evaluierung meldet **94,16 % SPAM-F1 ohne exakte Textüberschneidung**
zwischen beiden Mengen.

Der ehrliche Teil daran: Veröffentlicht wird die abgesicherte Zahl, nicht die höhere, die
ich durch Belassen des Lecks hätte haben können. Ein leckender Split hätte eine bessere
Schlagzeilenmetrik und ein schlechteres Modell ergeben.

Neben dem Score exportiert das Projekt Konfusionsmatrizen, Precision-Recall-Analysen und
die tatsächlich falsch klassifizierten Nachrichten. Eine einzelne F1-Zahl verbirgt, welche
Klasse geopfert wird; bei der Spam-Erkennung ist der Unterschied zwischen einer übersehenen
Spam-Nachricht und einer fälschlich blockierten echten Nachricht die gesamte
Produktentscheidung, und der wird nur in den Fehlern sichtbar.

## Warum TF-IDF und logistische Regression

Die interpretierbare Baseline ist der Standard, nicht der Notnagel. Sie ist offline
reproduzierbar, trainiert in Sekunden, und jede Vorhersage lässt sich auf Termgewichte
zurückführen, was zählt, wenn jemand fragt, warum eine bestimmte Nachricht markiert wurde.

Azure-OpenAI-Embeddings sind als **optionaler, gemessener Vergleich** angebunden, nicht als
angenommene Verbesserung. Zu einem größeren Modell zu greifen, bevor die günstige Baseline
ehrlich vermessen wurde, ist der Weg, auf dem Projekte Kosten und Latenz ansammeln, die sie
nicht rechtfertigen können.

## Vom Modell zum Produkt

Ein Klassifikator, der nur in einem Notebook existiert, wurde nicht engineered. Derselbe
Vorhersagepfad bedient eine CLI, einen typisierten FastAPI-Endpunkt und eine
React/TypeScript-Oberfläche. Ein Pfad, damit die drei Oberflächen nicht auseinanderdriften
können.

Ausgeliefert wird ein Non-Root-Docker-Image, als unveränderliches Artefakt auf GHCR
veröffentlicht und über GitHub Actions und Bicep auf Scale-to-zero Azure Container Apps
deployt. Scale-to-zero passt bewusst zu Demonstrationstraffic: Die Leerlaufkosten gehen
gegen null, und ein Kaltstart ist ein akzeptabler Preis für einen Portfolio-Service.

## Grenzen

Die öffentlich gehostete Demo läuft mit einem synthetischen Demonstrationsmodell; die
94,16 % gehören zum separat trainierten Evaluierungsmodell auf dem UCI-Datensatz. Dies ist
ein Portfolio-Referenzservice, kein internetgehärtetes Spam-Gateway, und die Metrik
beschreibt einen öffentlichen Datensatz, nicht Produktionstraffic.

[Quellcode auf GitHub](https://github.com/ErmisCho/sms-spam-detection-nlp)
