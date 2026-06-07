# 1. Use a monorepo for backend and frontend

- Status: Accepted
- Date: 2026-06-07

## Context

The project has two deployable units: a Django REST API and a React SPA. They
evolve together — most features change an API contract and the UI that consumes
it in the same logical change. We must also keep a future migration to AWS a
contained, low-risk change rather than a re-architecture.

## Decision

Keep both applications in a single repository (`backend/`, `frontend/`) with one
commit history. CI uses path filters so a frontend-only change does not run the
backend test suite, and vice versa.

## Consequences

**Positive**
- One clone runs the whole system; one commit can change API + UI atomically,
  preventing contract drift.
- A single CI/CD pipeline and one place for shared docs, decisions, and infra.
- `infrastructure/` and a future deploy job can target individual folders.

**Negative / trade-offs**
- CI must use path filtering to avoid running irrelevant jobs (addressed in Step 4).
- The repo couples release cadence of the two apps unless we add tagging later.

## Alternatives considered

- **Two separate repositories.** Cleaner independent versioning, but introduces
  cross-repo coordination for every contract change and duplicates CI/infra. The
  drift risk outweighed the isolation benefit for a small team.
