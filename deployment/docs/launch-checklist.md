# Launch Checklist

## Pre-Launch

1. Infrastructure
- Production domains mapped
- HTTPS active
- CDN headers verified
- Database and Redis reachable

2. Security
- JWT/Stripe secrets present
- CSRF protection active
- Rate limits active
- Admin RBAC verified

3. Payments
- Stripe live keys configured
- Webhook endpoint configured and signed
- Live payment + refund test completed

4. Quality Gates
- CI green on main branch
- Unit/integration/e2e tests passed
- Load smoke test completed

## Go-Live Testing

1. User Flows
- Register/login/logout
- Product browse/search/filter
- Cart add/update/remove
- Checkout (card + COD)
- Order confirmation and history

2. Admin Flows
- Admin login
- Product create/edit/delete
- Order status updates
- User block/unblock and role checks
- Audit log visibility (super_admin)

3. Analytics/SEO
- GA events arriving
- Search Console sitemap accepted
- OpenGraph previews valid

## Post-Launch

- Monitor 24h error budget
- Review payment failures hourly
- Validate backup job completion
- Keep rollback window and previous deployment alias pinned
