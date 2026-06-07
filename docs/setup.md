# Local setup

## Prerequisites

- **Git** ≥ 2.28
- **Python 3.13** (for backend + pre-commit) — used from Step 2
- **Poetry** (Python dependency management) — used from Step 2
- **Node.js LTS + pnpm** (for frontend) — used from Step 3
- **Docker** (for PostgreSQL) — used from Step 5

## Clone and configure

```bash
git clone git@github.com:<you>/fundlens.git
cd fundlens
cp .env.example .env
```

## Enable pre-commit (recommended now)

```bash
pipx install pre-commit
pre-commit install
pre-commit run --all-files
```

Backend and frontend setup instructions are added in Steps 2 and 3.
