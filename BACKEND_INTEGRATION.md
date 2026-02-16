# Backend API Integration Contract (User Panel)

This frontend now supports integrating with an external backend without code changes.

## Environment

- `NEXT_PUBLIC_API_BASE_URL`: backend host, e.g. `https://api.yourdomain.com`
- `NEXT_PUBLIC_API_PREFIX`: API prefix, e.g. `/api` or `/v1`

If `NEXT_PUBLIC_API_BASE_URL` is empty, frontend uses same-origin endpoints.

## Auth Contract

Expected response shape for login/register:

```json
{
  "user": { "id": "...", "name": "...", "email": "...", "isEmailVerified": true },
  "accessToken": "optional-jwt"
}
```

If `accessToken` is present, it is stored in browser storage and sent in `Authorization: Bearer ...`.
Cookie-based sessions are also supported (`credentials: include`).

## Endpoint Groups Used

- Auth: `/auth/register`, `/auth/login`, `/auth/logout`, `/auth/me`, `/auth/forgot-password`, `/auth/reset-password`, `/auth/verify-email`
- Products: `/products`, `/products/:id`, `/products/:id/reviews`
- Cart: `/cart`, `/cart/sync`
- Wishlist: `/wishlist`
- Checkout: `/checkout/shipping-methods`, `/checkout/intent`, `/checkout/confirm`
- Payments: `/payments/webhook`, `/payments/refund`
- Orders: `/orders`, `/orders/:id`, `/orders/:id/tracking`
- Profile: `/profile`, `/profile/change-password`, `/addresses`, `/addresses/:id`

## Security Headers/Contracts

- Mutating requests send:
  - `x-csrf-token`
  - `x-idempotency-key` for checkout intent/confirm
- Backend should enforce CSRF, idempotency, and payment verification for card-based orders.

## Frontend Behavior

- Query caching and retries via React Query
- Optimistic updates for cart and wishlist
- Global stores for user/cart/wishlist state via Zustand
- Loading, error, and success feedback implemented across user flows
