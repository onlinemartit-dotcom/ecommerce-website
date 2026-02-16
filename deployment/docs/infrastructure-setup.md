# Deployment Guide

## Architecture

- User app: `apps/web`
- Admin app: `apps/admin`
- API: Next.js route handlers in both apps (can be split to dedicated API service later)
- Database: managed PostgreSQL
- Cache/rate-limit backing: Redis
- Assets: Cloudinary or S3-compatible storage

## Hosting Options

### Option A: Vercel (recommended)

- Create separate Vercel projects for:
  - `apps/web` (domain: `shop.yourdomain.com`)
  - `apps/admin` (domain: `admin.yourdomain.com`)
- Configure env variables per environment.
- Set build command defaults (Next.js auto-detected).

### Option B: Docker / ECS / Kubernetes

- Use:
  - `apps/web/Dockerfile`
  - `apps/admin/Dockerfile`
  - `deployment/docker/docker-compose.production.yml`

## Backend API Hosting

- Current backend logic is embedded via Next route handlers.
- For independent API hosting, extract `apps/web/src/app/api/*` into dedicated Node service and deploy behind `api.yourdomain.com`.

## Database Setup

- Provision managed PostgreSQL (RDS/Neon/Supabase).
- Set `DATABASE_URL` for web app.
- Use migration strategy (Prisma or SQL migrations).

## Image Storage

- Configure either:
  - Cloudinary API keys
  - AWS S3 credentials + bucket
- Replace placeholder upload flow with provider SDK calls.

## Environment Separation

- Staging templates:
  - `apps/web/.env.staging.example`
  - `apps/admin/.env.staging.example`
- Production templates:
  - `apps/web/.env.production.example`
  - `apps/admin/.env.production.example`

## Domain / SSL / CDN

- Add DNS records:
  - `CNAME shop -> cname.vercel-dns.com`
  - `CNAME admin -> cname.vercel-dns.com`
  - `CNAME api -> api-host-target`
- SSL: managed by hosting provider (automatic HTTPS).
- CDN caching:
  - static assets immutable caching via `vercel.json`
  - API caching configured for product listing.

## CI/CD

- CI workflow: `.github/workflows/ci.yml`
- Deploy workflow: `.github/workflows/deploy.yml`
- Validations before deploy:
  - lint
  - typecheck
  - unit/integration tests
  - build
- Rollback:
  - promote previous stable Vercel deployment alias.

## Backups & Recovery

- Backup script: `deployment/scripts/backup_postgres.sh`
- Restore script: `deployment/scripts/restore_postgres.sh`
- Recommended policy:
  - daily full backups
  - PITR enabled
  - quarterly restore drill

## Monitoring & Alerts

- Health endpoints:
  - `/api/health` on web and admin apps
- Error logging hooks:
  - `apps/web/src/lib/monitoring.ts`
- Suspicious admin activity tracking:
  - surfaced in admin audit logs panel
- Configure alerts:
  - payment failure spike
  - checkout error rate
  - auth brute-force lockouts

## Launch Checklist

- Complete `deployment/docs/launch-checklist.md`
- Run production smoke tests
- Verify Stripe webhook signature flow
- Validate GA, Search Console, and conversion events
