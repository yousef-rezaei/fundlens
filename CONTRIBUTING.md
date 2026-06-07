# Contributing

## Branching model

- `main` is **always deployable**. Never commit directly to it after Step 1.
- Do all work on short-lived feature branches: `feat/...`, `fix/...`, `chore/...`.
- Open a Pull Request into `main`. From Step 4, CI must be green to merge.

### Pull Request workflow

1. Branch off the latest `main`: `git switch -c feat/short-description`.
2. Make small, focused commits using Conventional Commits (see below).
3. Push the branch and open a PR against `main`.
4. CI runs automatically (Step 4 onward). Fix anything red.
5. Squash-or-merge once green and reviewed. Delete the branch.

## Conventional Commits

Format: `type: short imperative summary`

Allowed types: `feat` | `fix` | `refactor` | `docs` | `chore` | `test` |
`ci` | `build` | `perf` | `style`

Examples:
- `feat: add JWT login endpoint`
- `test: cover token refresh edge cases`
- `ci: run backend job only on backend changes`

## Before you commit

Install and enable pre-commit once:

```bash
pipx install pre-commit
pre-commit install
```

Run all checks manually any time:

```bash
pre-commit run --all-files
```

Backend (`ruff`, `black`, `mypy`, `pytest`) and frontend (`eslint`, `prettier`,
`tsc`, `vitest`) checks are added in Steps 2 and 3 respectively.
