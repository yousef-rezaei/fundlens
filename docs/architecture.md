# Architecture

## Overview

FundLens is a multi-tenant B2B SaaS for AI-assisted fund document compliance.
It is built as a **monorepo** containing a Django REST API (`backend/`) and a
React + TypeScript SPA (`frontend/`), which communicate over a versioned JSON
API (`/api/v1/`).

```
React SPA (Vite)  ──HTTP/JSON──▶  Django REST API  ──▶  PostgreSQL
   TanStack Query                  DRF + SimpleJWT
```

## Guiding constraints

1. **Start simple, stay portable.** The app must run locally with minimal setup.
   Moving to AWS later must be a *contained, low-risk* change — no host-specific
   assumptions leak into application code. Document files are stored behind
   Django's storage abstraction so the local-disk → S3 swap is a settings change.
2. **Auth is JWT-only for now.** SimpleJWT issues/validates tokens directly. No
   auth abstraction layer and no Cognito yet; swapping the auth provider later is
   a deliberate, isolated future decision.
3. **Domain-agnostic core.** Phases 1–3 build generic SaaS scaffolding. The
   document-intelligence domain (Phase 4) sits on top of it.

## Current state (Phase 1)

Repository scaffolding, documentation, and tooling skeleton only. No runtime
code yet. The backend (Step 2) and frontend (Step 3) follow.

## Decision records

Significant choices are recorded as ADRs in [`decisions/`](decisions/).
