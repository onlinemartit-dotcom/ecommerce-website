# E-Commerce Website - User + Admin Panels

Production-style User Panel implementation using Next.js App Router, TypeScript, Tailwind, React Query, and Zustand.

Admin Panel implementation is available at `apps/admin` with RBAC auth, secured admin APIs, analytics dashboard, and full management modules.

## Implemented Scope

- Authentication: register, login, logout, email verification, forgot/reset password, social login-ready endpoint
- Profile: profile update, change password, multi-address CRUD, saved payment methods UI scaffold
- Products: listing/search/filter/sort, product details, variants, stock visibility, reviews
- Cart: add/update/remove, guest cart support, cart sync after login, real-time header cart count
- Checkout: address selection, shipping, payment method, Stripe intent-ready endpoint, order confirmation
- Orders: create order, order history, order details/tracking UI, invoice metadata
- Notifications: toast notifications + email service integration-ready stubs
- Security: schema validation (zod), auth-protected routes, middleware route guard, server-side stock/price checks

## Folder Structure

- `apps/web/src/app`: pages and REST API routes
- `apps/web/src/components`: reusable UI and layout components
- `apps/web/src/features`: feature-level API modules and UI parts
- `apps/web/src/hooks`: reusable data hooks/state integrations
- `apps/web/src/lib`: shared utilities, auth, validators, in-memory DB, HTTP helpers
- `apps/web/src/server/services`: business services (auth, cart, order, product, user, email)
- `apps/web/src/types`: shared response and domain types

## API Endpoints

- Auth: `/api/auth/register`, `/api/auth/login`, `/api/auth/logout`, `/api/auth/me`, `/api/auth/verify-email`, `/api/auth/forgot-password`, `/api/auth/reset-password`, `/api/auth/social/[provider]`
- Profile: `/api/profile`, `/api/profile/change-password`, `/api/addresses`, `/api/addresses/[addressId]`
- Catalog: `/api/products`, `/api/products/[productId]`, `/api/products/[productId]/reviews`
- Cart/Wishlist: `/api/cart`, `/api/cart/sync`, `/api/wishlist`
- Checkout/Orders: `/api/checkout/intent`, `/api/checkout/confirm`, `/api/orders`, `/api/orders/[orderId]`

## Design System Tokens

Tailwind theme is configured with:

- Brand scale based on `#48dbfb`
- White/gray premium surfaces
- Rounded corners, soft shadows, motion keyframes
- Poppins + Inter typography

See: `apps/web/tailwind.config.ts`

## Local Setup

1. Install dependencies:
   - user panel: `cd apps/web && npm install`
   - admin panel: `cd apps/admin && npm install`
2. Create env:
   - copy `.env.example` to `.env.local`
   - optional backend integration:
     - `NEXT_PUBLIC_API_BASE_URL=https://your-backend-domain.com`
     - `NEXT_PUBLIC_API_PREFIX=/api` (or `/v1`)
   - payment/monitoring:
     - `STRIPE_SECRET_KEY=...`
     - `STRIPE_WEBHOOK_SECRET=...`
     - `PAYMENT_GATEWAY=stripe`
     - `SENTRY_DSN=...` (optional)
3. Run:
   - user panel: `cd apps/web && npm run dev`
   - admin panel: `cd apps/admin && npm run dev`
4. Tests:
   - unit/integration: `cd apps/web && npm run test`
   - e2e: `cd apps/web && npm run test:e2e`

## Notes

- Current data source is in-memory (`src/lib/db.ts`) for demo/dev flow.
- Replace with PostgreSQL + Prisma in production.
- `EmailService` and social auth endpoint are intentionally scaffolded for provider integration.
- Payment intent endpoint is Stripe-ready structure with mock client secret.

## Production Hardening Added

- Stripe gateway abstraction with webhook and refund workflow scaffolding (`src/server/payments/*`, `/api/payments/webhook`, `/api/payments/refund`)
- Idempotent checkout/order creation using `x-idempotency-key`
- Transaction and payment verification logs in data layer
- Refresh-token auth flow with secure cookie settings
- CSRF protection and sensitive endpoint rate limiting
- Brute-force login protection
- SEO improvements: metadata, OpenGraph/Twitter, sitemap, structured data
- Monitoring hooks (`src/lib/logger.ts`, `src/lib/monitoring.ts`)
- Test scaffolding:
  - Unit tests: `tests/unit/*`
  - Integration tests: `tests/integration/*`
  - E2E tests: `tests/e2e/*`
- Full runbook: `PRODUCTION_READINESS.md`

## Deployment Assets

- Infrastructure guide: `deployment/docs/infrastructure-setup.md`
- CI/CD guide: `deployment/docs/cicd-workflow.md`
- Launch checklist: `deployment/docs/launch-checklist.md`
- Load testing plan: `deployment/docs/load-testing.md`
- Monitoring/alerts: `deployment/monitoring/alerts-and-observability.md`
- Docker stack: `deployment/docker/docker-compose.production.yml`
- Deployment package index: `deployment/README.md`
