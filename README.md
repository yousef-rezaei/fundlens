# FundLens — AI Document Intelligence for Fund Compliance

A multi-tenant B2B SaaS for fund compliance teams in Luxembourg: AI-powered
classification, extraction, and gap analysis for fund documents (prospectuses,
PRIIPs KIDs, annual reports, KYC files), with a complete audit trail.

> **Status:** Phase 1 (Foundation). Phases 1–3 are domain-agnostic SaaS
> scaffolding; the document-intelligence features land in Phase 4.

## Tech stack

| Layer    | Technologies |
|----------|--------------|
| Backend  | Django, Django REST Framework, PostgreSQL, SimpleJWT, drf-spectacular, pytest |
| Frontend | React, TypeScript (strict), Vite, React Router, TanStack Query, Axios, Tailwind, react-i18next, Vitest |
| Tooling  | Poetry, pnpm, ruff, black, mypy, eslint, prettier, pre-commit, GitHub Actions |
| Future   | Docker, AWS (EC2, RDS, S3, CloudFront, Route 53, ACM) — Phase 5 only |

## Repository layout

This is a **monorepo** — frontend and backend share one history so a single
commit can change the API and the UI together. See
[`docs/decisions/0001-use-a-monorepo.md`](docs/decisions/0001-use-a-monorepo.md).

```
.
├── backend/            # Django project (Step 2)
├── frontend/           # React project (Step 3)
├── docs/               # architecture, setup, decision records
├── infrastructure/     # docker-compose, future IaC
├── scripts/            # helper scripts
├── .github/workflows/  # CI (Step 4), CD (Phase 5)
└── .pre-commit-config.yaml
```

## Getting started

```bash
git clone git@github.com:yousef-rezaei/fundlens.git
cd fundlens
cp .env.example .env        # fill in real values; never commit .env

pip install pre-commit
pre-commit install
```

Backend and frontend setup instructions land in Steps 2 and 3. See
[`docs/setup.md`](docs/setup.md).

## Documentation

- [Architecture](docs/architecture.md)
- [Local setup](docs/setup.md)
- [Architecture Decision Records](docs/decisions/)
- [Contributing](CONTRIBUTING.md)

## License

[MIT](LICENSE)
