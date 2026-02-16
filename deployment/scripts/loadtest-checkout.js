import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '2m',
};

export default function () {
  const base = __ENV.BASE_URL || 'http://localhost:3000';

  const products = http.get(`${base}/api/products?page=1&pageSize=12`);
  check(products, { 'products status 200': (r) => r.status === 200 });

  const health = http.get(`${base}/api/health`);
  check(health, { 'health status 200': (r) => r.status === 200 });

  sleep(1);
}
