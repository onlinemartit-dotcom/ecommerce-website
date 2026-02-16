# CI/CD Guide

## Workflows

- `ci.yml`:
  - runs on push/PR
  - web: lint, typecheck, test, build
  - admin: typecheck, build

- `deploy.yml`:
  - manual dispatch for staging/production
  - deploys web and admin via Vercel CLI
  - stores deployment URLs as artifacts

## Required GitHub Secrets

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID_WEB`
- `VERCEL_PROJECT_ID_ADMIN`

## Rollback Strategy

1. Open Vercel deployments.
2. Promote previous stable deployment alias.
3. Re-run smoke tests.
4. Postmortem + fix-forward patch.
