---
title: Keeping RAG Ingestion Off the Request Path
description: Why a documentation-search system pushed crawling and indexing behind a queue, and what that traded away.
publishDate: 2026-08-03
draft: false
project: RAG Pipeline / Documentation Helper
tags:
  - Python
  - FastAPI
  - RabbitMQ
  - Redis
  - Pinecone
  - LangChain
---

## The problem

Retrieval-augmented generation demos usually crawl, chunk, embed, and index inside the
request that asked for it. That works until the first real document set: a crawl of any
meaningful size holds the connection open for minutes, a single failed page can abort the
whole ingestion, and the caller has no way to find out what happened other than waiting.

Ingestion and retrieval have almost nothing in common operationally. Retrieval is fast,
frequent, and cheap. Ingestion is slow, rare, expensive, and fails in ways that are worth
retrying. Putting them in the same request is what makes RAG systems feel fragile.

## The decision

Ingestion requests return `202 Accepted` immediately and hand the work to RabbitMQ workers.
Redis holds the job state, so callers poll for progress instead of holding a connection.
Tavily performs the crawl, content is chunked and embedded, and Pinecone stores the vectors
that the query path later retrieves.

The cost of this is real and worth stating plainly: two more pieces of infrastructure, a job
lifecycle to model, and an asynchronous contract that clients have to understand. For a demo
that is a bad trade. For anything that ingests documents on a schedule it pays for itself the
first time a crawl fails halfway.

## What I rejected

**Synchronous ingestion with a longer timeout.** Moves the failure rather than removing it,
and gives no retry story at all.

**A background thread inside the API process.** Cheapest option, and it loses every in-flight
job when the API restarts, which is exactly when jobs are most likely to be in flight.

## Failure handling

Three failure modes were designed for explicitly, because each one is silent by default:

- **Weak retrieval evidence.** Retrieval guardrails reject context that does not clear the
  evidence bar, so the model is not handed thin material and asked to sound confident about
  it. Answers carry supporting citations.
- **Background work that dies.** Workers retry, and messages that keep failing land in a
  dead-letter queue rather than disappearing.
- **Provider lock-in.** Language-model and embedding work can run against Ollama locally or
  Google Gemini, so a provider outage or a pricing change is a configuration change.

Pytest covers the API, ingestion, queue, worker, job-state, dead-letter, and integration
paths, the boundaries between components, which is where this architecture can actually
break.

The whole stack (API, worker, Streamlit UI, RabbitMQ, Redis) starts from one Docker Compose
file, so the asynchronous behaviour is reproducible rather than described.

## Boundaries

This is a local containerized reference stack. It is not deployed to a cloud environment, and
it has no authentication, tenant isolation, or production monitoring. I have not measured
answer-quality gains against a baseline, so I make no claim about retrieval quality here, only
about the operational properties of the ingestion design.

[Source on GitHub](https://github.com/ErmisCho/rag-pipeline)
