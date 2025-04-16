import { Page } from '@playwright/test';
import { fetchFreelancers } from '../utils/mockData';

export class DashboardPage {
  constructor(public page: Page) { }

  async goto() {
    await this.page.goto('/');
  }

  async searchByName(name: string) {
    await this.page.fill('#search-name', name);
  }

  async searchByCity(city: string) {
    await this.page.fill('#search-city', city);
  }

  async searchByFinishedJobs(min: number, max: number) {
    await this.page.fill('#search-job-min', String(min));
    await this.page.fill('#search-job-max', String(max));
  }

  async openPortfolio(index: number) {
    await this.page.locator(`.freelancer-card >> nth=${index}`).click();
  }

  async toggleDarkMode() {
    await this.page.locator('#toggle-theme').click();
  }

  async saveFreelancer(index: number) {
    await this.page.locator(`.save-btn >> nth=${index}`).click();
  }

  async filterSavedFreelancers() {
    await this.page.locator('#filter-saved').click();
  }

  async getMockFreelancers() {
    return await fetchFreelancers();
  }

  async searchByFreeLancers(name: string) {
    const freelancers = await this.getMockFreelancers();
    return freelancers.filter((freelancer: any) =>
      freelancer.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  async searchByCityName(city: string) {
    const freelancers = await this.getMockFreelancers();
    return freelancers.filter((freelancer: any) =>
      freelancer.address.city.toLowerCase().includes(city.toLowerCase())
    );
  }

  async validateFreelancerDataInUI() {
    const freelancers = await this.getMockFreelancers();
    for (let i = 0; i < freelancers.length; i++) {
      const card = this.page.locator('.freelancer-card').nth(i);
      await card.locator('text=' + freelancers[i].name).waitFor({ state: 'visible' });
    }
  }
}