// @ts-check
const { test, expect } = require('@playwright/test');

test('GET request to JSON Placeholder', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);

});

test('POST request to JSON Placeholder', async ({ request }) => {
  const postData = { title: 'foo', body: 'bar', userId: 1 };
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', { data: postData });
  const data = await response.json();
  expect(response.status()).toBe(201);
  expect(data).toMatchObject(postData);
});

test('PUT request to JSON Placeholder', async ({ request }) => {
  const putData = { title: 'updated title', body: 'updated body', userId: 1 };
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', { data: putData });
  const data = await response.json();
  expect(response.status()).toBe(200);
  expect(data).toMatchObject(putData);
});

test('DELETE request to JSON Placeholder', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
});0



