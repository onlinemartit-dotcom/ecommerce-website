# Deployment Package

This folder contains production launch assets.

## Structure

- `docker/`: Docker and reverse-proxy configs
- `scripts/`: migration, backup, restore, rollback, load test scripts
- `docs/`: infrastructure, CI/CD, launch and load-testing guides
- `monitoring/`: alert and observability guidelines

## Start Points

1. Read `docs/infrastructure-setup.md`
2. Configure GitHub secrets and run `.github/workflows/ci.yml`
3. Deploy with `.github/workflows/deploy.yml`
4. Execute launch checklist `docs/launch-checklist.md`
