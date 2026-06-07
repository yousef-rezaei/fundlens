# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Django 6.0 backend skeleton with split settings (base/dev/prod) and `.env` loading.
- Poetry-managed dependencies with lockfile (`backend/pyproject.toml`).
- Quality tooling: ruff, black, mypy (django-stubs), pytest + pytest-django.
- ruff and black wired into pre-commit via Poetry local hooks.
### Added
- Initial monorepo structure (`backend/`, `frontend/`, `docs/`, `infrastructure/`, `scripts/`).
- Project documentation: README, CHANGELOG, CONTRIBUTING, MIT LICENSE.
- `.gitignore` and `.env.example`.
- pre-commit skeleton with language-agnostic hygiene hooks.
- First Architecture Decision Record: ADR-0001 (use a monorepo).
