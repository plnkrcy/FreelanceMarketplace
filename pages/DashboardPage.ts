import { Page } from '@playwright/test';
import { fetchFreelancers } from '../utils/mockData';

export class DashboardPage {
  constructor(public page: Page) { } //for UI tests

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

}
