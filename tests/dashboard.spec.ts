import { test, expect, chromium } from '@playwright/test';
import PageManager from '../utils/PageManager';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Dashboard Functionality', () => {
  let dashboardPage: DashboardPage;

  test.beforeEach(async () => {
    const manager = PageManager.getInstance();
    await manager.init(await chromium.launch());
    dashboardPage = new DashboardPage(manager.page);
  });
  
  // After the UI completed, this scenario console logs will be change to the e2e test.
  test('Search by freelancer name', async () => {
    const result = await dashboardPage.searchByFreeLancers('Leanne');
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].name).toMatch(/Leanne/i);

    console.log('Matching Freelancers Named "Leanne":');
    const output = result.map((user, index) => `
      #${index + 1}
      Name: ${user.name}
      Username: ${user.username}
      Email: ${user.email}
      City: ${user.address?.city}
      Company: ${user.company?.name}
      `).join('\n');
    console.log(output);
  });

  // After the UI completed, this scenario console logs will be change to the e2e test.
  test('Filter by city', async () => {
    const result = await dashboardPage.searchByCityName('Gwenborough');
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
    
    console.log('Matching Freelancers City "Gwenborough":');
    const output = result.map((user, index) => `
      #${index + 1}
      Name: ${user.name}
      Username: ${user.username}
      Email: ${user.email}
      City: ${user.address?.city}
      Company: ${user.company?.name}
      `).join('\n');
    console.log(output);
  });

  test.afterEach(async () => {
    await PageManager.getInstance().close();
  });
});
