import { Page } from '@playwright/test';
import { fetchJobs, fetchComments } from '../utils/mockData';

export class PortfolioPage {
  constructor(public page: Page) { }

  async showCommentsForJob(index: number) {
    await this.page.locator(`.job-item >> nth=${index} >> .show-comments-btn`).click();
  }

  async openHirePopup() {
    await this.page.locator('#hire-btn').click();
  }

  async getMockJobs() {
    const jobs = await fetchJobs();
    return jobs.slice(0, 5);
  }

  async getMockComments() {
    const comments = await fetchComments();
    return comments.filter(comment => comment.postId === 1);
  }

  async validateJobAndCommentsOnUI() {
    const jobs = await this.getMockJobs();
    for (let i = 0; i < jobs.length; i++) {
      await this.page.locator(`.job-item >> nth=${i}`).waitFor();
      await this.page.locator(`.job-item >> nth=${i}`).scrollIntoViewIfNeeded();
    }

    const comments = await this.getMockComments();
    for (const comment of comments) {
      await this.page.locator(`.comment:has-text("${comment.body}")`).waitFor({ state: 'visible' });
    }
  }

  async searchByFinishedJobCount(min: number, max: number) {
    const jobs = await this.getMockJobs();
    return jobs.filter(f => f.id >= min && f.id <= max);
  }

}