# Monitoring and Alerts

## Error Monitoring

- Use Sentry DSN env vars (`SENTRY_DSN`) in web/admin.
- Current hooks are ready in `src/lib/monitoring.ts`.

## Metrics to Alert

- Checkout error rate > 2%
- Payment failure ratio > baseline + 20%
- P95 API latency > 800ms
- Unauthorized admin access spike

## Notification Channels

- PagerDuty (critical)
- Slack (warning/info)
- Email digest (daily)

## Log Sources

- Application logs (`logEvent` JSON)
- Payment verification logs
- Admin suspicious activity logs
