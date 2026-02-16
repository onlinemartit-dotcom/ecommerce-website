# Load Test Plan (k6)

Example command:

```bash
k6 run deployment/scripts/loadtest-checkout.js
```

Targets:

- product listing
- cart endpoints
- checkout intent and confirmation

SLO:

- p95 < 800ms for read APIs
- error rate < 1%
