---
title: An Evaluation That Does Not Flatter Itself
description: How duplicate SMS messages inflate spam-detection scores, and what it costs to stop them.
publishDate: 2026-08-03
draft: false
project: SMS Spam Detection NLP
tags:
  - Python
  - scikit-learn
  - FastAPI
  - React
  - Azure
---

## The problem

The UCI SMS dataset contains exact duplicate messages. A naive split puts some of those
duplicates in training and their twins in test. The model then scores well on messages it has
already memorised, and the reported metric measures recall of the split, not generalisation.

This is the most common way a machine-learning portfolio project lies without anyone
intending to. The number is real, reproducible, and meaningless.

## The decision

Exact duplicate text is prevented from crossing the train/test boundary. The preferred
evaluation reports **94.16% SPAM F1 with zero exact text overlap** between the two sets.

The honest part of this is that the guarded number is the one I publish, not the higher one I
could have had by leaving the leak in. A leaked split would have produced a better headline
metric and a worse model.

Alongside the score, the project exports confusion matrices, precision-recall analysis, and
the actual misclassified messages. A single F1 figure hides which class is being sacrificed;
for spam detection the difference between a missed spam and a quarantined real message is the
entire product decision, and that is only visible in the errors.

## Why TF-IDF and logistic regression

The interpretable baseline is the default, not the fallback. It is reproducible offline,
trains in seconds, and every prediction can be traced to term weights, which matters when
someone asks why a specific message was flagged.

Azure OpenAI embeddings are wired in as an **optional measured comparison**, not an assumed
improvement. Reaching for a larger model before the cheap baseline has been honestly measured
is how projects acquire cost and latency they cannot justify.

## From model to product

A classifier that only exists in a notebook has not been engineered. The same prediction path
serves a CLI, a typed FastAPI endpoint, and a React/TypeScript interface. One path, so the
three surfaces cannot drift apart.

Delivery is a non-root Docker image published to GHCR as an immutable artifact, deployed to
scale-to-zero Azure Container Apps through GitHub Actions and Bicep. Scale-to-zero is a
deliberate fit for demonstration traffic: idle cost approaches nothing, and a cold start is an
acceptable price for a portfolio service.

## Boundaries

The public hosted demo runs a synthetic demonstration model; the 94.16% figure belongs to the
separately trained evaluation model on the UCI dataset. This is a portfolio reference service,
not an internet-hardened spam gateway, and the metric describes one public dataset rather than
production traffic.

[Source on GitHub](https://github.com/ErmisCho/sms-spam-detection-nlp)
