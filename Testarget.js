import { test, expect } from '@playwright/test';

test('GET request to JSON Placeholder', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  expect(response.status()).toBe(200);
  expect(data).toHaveProperty('id', 1);
});

