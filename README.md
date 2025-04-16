# Odine Freelance Marketplace — E2E Test Project

This repository contains an end-to-end (E2E) testing suite for **Odine Freelance Marketplace**, a single-page application (SPA) mimicking a simplified freelancing platform like Upwork.

> ✅ Built using **Playwright**  
> ✅ Implements **Page Object Model (POM)** and **Singleton pattern**  
> ✅ Uses **mock data** from [JSONPlaceholder](https://jsonplaceholder.typicode.com)  
> ✅ Includes human-readable test scenarios in Markdown format

---

## 🚀 To Run It:

Before running tests
- npm install 
- npx playwright install
- npm install node-fetch@2

For running tests
- npx playwright test

---

## 📦 Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- JSONPlaceholder (mock API)
- Markdown (for test documentation)

---

## 🧪 Test Coverage

Functional Areas Covered:

- ✅ Dashboard

- ✅ Portfolio Page

- ✅ Hire Freelancer

- ✅ Light/Dark Mode Toggle

- ✅ Non Functional

---

## 📄 Documentation

Human-readable test steps are included in:

- tests-docs/dashboard-tests.md

- tests-docs/portfolio-tests.md

- tests-docs/hireFreelancer-tests.md
  
- tests-docs/lightDarkMode-tests.md
  
- tests-docs/nonFunctional-tests.md

---

## 🧼 Assumptions & Limitations

- Uses mock API (JSONPlaceholder), not a real backend.
- Since the UI is not available yet, the results are currently printed to the console using mock data.
