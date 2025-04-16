import fetch from 'node-fetch';
export const BASE_URL = 'https://jsonplaceholder.typicode.com';
export async function fetchFreelancers() {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
}
export async function fetchJobs() {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
}
export async function fetchComments() {
  const res = await fetch(`${BASE_URL}/comments`);
  return res.json();
}