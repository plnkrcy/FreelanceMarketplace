import { Page } from '@playwright/test';
import { fetchJobs, fetchComments } from '../utils/mockData';

export class PortfolioPage {
  constructor(public page: Page) { } // for UI tests unnecessary for now

  async getMockJobs() {
    const jobs = await fetchJobs();
    return jobs.slice(0, 5);
  }

  async getMockComments() {
    const comments = await fetchComments();
    return comments.filter(comment => comment.postId === 1);
  }

  async searchByFinishedJobCount(min: number, max: number) {
    const jobs = await this.getMockJobs();
    return jobs.filter(f => f.id >= min && f.id <= max);
  }

}
