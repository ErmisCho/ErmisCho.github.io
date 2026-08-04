---
title: Indexing That Finishes, and Telemetry That Stops
description: Two problems from a production RAG document-search platform, and why the boring one mattered more.
publishDate: 2026-08-03
draft: false
project: RAG Document Search Platform (RISE)
tags:
  - RAG
  - Elasticsearch
  - FastAPI
  - Streamlit
  - Data Protection
---

## Context

RISE runs a document-based AI search platform built on retrieval-augmented generation. I worked
on the Python and FastAPI services behind it: ingestion, indexing, retrieval, and the API layer
that exposes them. What follows is the engineering reasoning, not the internals of the product.

## Problem one: indexing that could not finish

Embedding and indexing worked on the document sets they were tested against. On large ones it
did not complete. The crawl would find far more documents than expected, and the indexing step
would not get through them.

This is worse than a slow pipeline. A partially indexed corpus is not visibly broken. Search
still returns results, they are still relevant, and nothing raises an error. The system simply
cannot answer from the documents that never made it in, and there is no obvious signal
distinguishing "no good answer exists" from "that document was never indexed." Silent
incompleteness in a retrieval system is a correctness bug wearing a performance bug's clothes.

### The fix

The embedding work was being issued as individual calls, one per unit of work, so the number of
round trips scaled one to one with the number of documents. Past a certain corpus size, the run
could not get through them.

Batching the calls reduced that overhead. The same volume of text still had to be embedded, but
it no longer arrived as thousands of separate requests. This made completion practical for the
larger crawls the platform needed to support. The property that mattered was not simply that
indexing became faster, but that the required indexing runs could finish reliably.

Batch size is the knob this introduces, and it is a trade-off rather than a number to maximise.
Larger batches amortise more per-call overhead, but they increase payload size and widen the
blast radius of a single failure, since a batch that fails takes every document in it along.
Smaller batches pay more overhead and fail more gracefully.

So I made the batch size configurable rather than picking one value and burying it in the code.
The right size depends on the provider, the document mix, and what the environment tolerates,
and none of those are known at the time you write the loop. Hardcoding it would have replaced a
pipeline that could not finish with a pipeline that finishes until conditions change. A knob
someone can turn without a code change is the difference between a fix and a fix with a
shelf life.

The general lesson I took from it is that ingestion has to be sized for the largest input it
will plausibly see, not the input it was demonstrated on. Document counts are not evenly
distributed. The interesting corpora are the big ones, which are exactly the ones a per-item
implementation fails on.

## Problem two: telemetry nobody asked for

AI and search components ship with telemetry enabled by default. Several of the libraries in
that stack phone home unless told otherwise, and the default is usually opt-out rather than
opt-in.

I disabled telemetry across those components and then verified that the unintended data
sharing had actually stopped, rather than trusting that setting a flag had done what the
documentation claimed. That verification step is the part worth keeping. A configuration change
you have not observed the effect of is a belief, not a control.

For a platform indexing customer documents inside the EU, an unnoticed outbound data flow is a
different category of problem from a slow query. It is also the kind of issue that never
produces a ticket, because nothing appears broken to anyone.

## Making retrieval quality inspectable

Retrieval behaviour is difficult to reason about from logs. "The answer was bad" can mean the
retrieval returned nothing useful, that it returned useful context the model ignored, or that
the question was outside the corpus entirely. Those have different fixes.

I built internal FastAPI and Streamlit tooling for query testing and result inspection, so the
team could look at what retrieval actually returned for a given query instead of inferring it
from the final answer. Tooling like this is easy to postpone because it ships nothing to
customers. It is also what turns arguments about search quality into observations.

I also documented and communicated the relevant code behaviour, system flows, and implementation
changes, reducing knowledge concentration and making the system easier for other engineers to
understand and extend.

## What I would keep

Both fixes share a shape: the failure was invisible from the outside. Incomplete indexes still
return results, and unwanted telemetry still lets everything work. In AI systems, the failures
that cost the most are rarely the ones that throw. They are the ones that quietly degrade an
answer while every dashboard stays green, which is why verification and inspectability are
worth building before they are obviously needed.

## Boundaries

This describes work on an employer's platform, so it stays at the level of engineering
reasoning: no internal architecture, customer data, corpus details, or performance figures. I
do not claim ownership of the platform as a whole, and I make no measured claim about retrieval
quality gains.
