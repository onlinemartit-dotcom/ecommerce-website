# Production Readiness Guide

## 1. Live Payment Integration (Stripe)

Implemented with provider abstraction:

- `apps/web/src/server/payments/types.ts`
- `apps/web/src/server/payments/stripe.provider.ts`
- `apps/web/src/server/payments/provider-factory.ts`

Core routes:

- Create intent: `POST /api/checkout/intent`
- Confirm order: `POST /api/checkout/confirm` (idempotent)
- Webhook: `POST /api/payments/webhook`
- Refund: `POST /api/payments/refund`

### Required env vars

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `PAYMENT_GATEWAY=stripe`

### Webhook notes

Use Stripe CLI during local testing:

```bash
stripe listen --forward-to localhost:3000/api/payments/webhook
```

## 2. Security Hardening

Implemented:

- Refresh session flow: `POST /api/auth/refresh`
- Secure cookies (`HttpOnly`, `SameSite=strict`, secure in prod)
- CSRF validation (`x-csrf-token` + cookie token)
- Brute-force login lockout
- Sensitive endpoint rate limiting
- Input sanitization + zod validation
- Admin RBAC + suspicious activity monitor
- Admin audit logs

## 3. Testing Workflows

In `apps/web`:

- Unit + integration tests: `npm run test`
- E2E tests: `npm run test:e2e`

Test coverage includes:

- Auth brute-force protection
- Input sanitization
- Idempotent order behavior
- Checkout API guard behavior
- E2E flow skeletons for user + admin critical paths

## 4. Performance/SEO/Monitoring

Implemented:

- Lazy loading for product cards
- Image optimization path (Next Image)
- API caching headers on product listing
- SEO metadata + OpenGraph + sitemap + structured data
- Request/performance/error logging hooks (`logger`, `monitoring`)
- Sentry-ready capture hook via `SENTRY_DSN`

## 5. Next Production Steps

- Replace in-memory DB with PostgreSQL + Prisma migrations.
- Add Redis-backed distributed rate limiting.
- Add secure secret management and CI/CD env injection.
- Wire real Sentry SDK and APM dashboards.
- Expand payment providers in `provider-factory` (PayPal/Razorpay).

## 6. Deployment Assets

- Infrastructure and launch docs live under `deployment/docs/`.
- CI/CD workflows live under `.github/workflows/`.
- Docker and reverse-proxy assets live under `deployment/docker/`.
