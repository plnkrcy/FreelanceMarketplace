import { test, expect, chromium } from '@playwright/test';
import PageManager from '../utils/PageManager';
import { PortfolioPage } from '../pages/PortfolioPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Portfolio Page Tests', () => {
  let dashboardPage: DashboardPage;
  let portfolioPage: PortfolioPage;

  test.beforeEach(async () => {
    const manager = PageManager.getInstance();
    await manager.init(await chromium.launch());
    const page = manager.page;

    dashboardPage = new DashboardPage(page);
    portfolioPage = new PortfolioPage(page);

  });

  test('should display freelancer details and list of jobs', async () => {
    const freelancer = await dashboardPage.getMockFreelancers();
    const jobs = await portfolioPage.getMockJobs();

    expect(Array.isArray(jobs)).toBe(true);
    expect(jobs.length).toBeGreaterThan(0);

    freelancer.forEach((user, index) => {
      const matchedJobs = jobs.filter(job => job.id === user.id);

      if (matchedJobs.length > 0) {
        console.log(`\n Freelancer #${index + 1}`);
        console.log(`
        Name: ${user.name}
        Username: ${user.username}
        Email: ${user.email}
        City: ${user.address?.city}
        Company: ${user.company?.name}
      `);

        console.log(` Jobs for ${user.name}:`);
        matchedJobs.forEach((job, jobIndex) => {
          console.log(`
          Job #${jobIndex + 1}
          Title: ${job.title}
          Client ID: ${job.id}
          Description: ${job.body}
          Budget: ${job.budget}
          Date: ${job.date}
        `);
        });
      }
    });
  });

  test('should show comments for a job when "Show Comments" is clicked', async () => {
    const comments = await portfolioPage.getMockComments();
    expect(comments).toBeDefined();
    expect(Array.isArray(comments)).toBe(true);
    expect(comments.length).toBeGreaterThan(0);

    const comment = comments[0];
    expect(comment).toHaveProperty('postId');
    expect(comment).toHaveProperty('id');
    expect(comment).toHaveProperty('name');
    expect(comment).toHaveProperty('email');
    expect(comment).toHaveProperty('body');

    console.log('Comments for the Job:');
    comments.forEach((comment, index) => {
      console.log(`
      Name: ${comment.name}
      Email: ${comment.email}
      Comment: ${comment.body}
      Post ID: ${comment.postId}
      Comment ID: ${comment.id}
      `);
    });
  });

  test('should return freelancers within job count range', async () => {
    const freelancer = await dashboardPage.getMockFreelancers();
    const result = await portfolioPage.searchByFinishedJobCount(3, 7);
    expect(result.length).toBe(3);

    const matchedFreelancers = result.map(filtered => {
      return freelancer.find(full => full.id === filtered.id);
    }).filter(Boolean);

    console.log('Freelancers within job count range (3 to 7):');
    const output = matchedFreelancers.map((freelancer, index) => `
      #${index + 1}
      Name: ${freelancer.name}
      Username: ${freelancer.username}
      Email: ${freelancer.email}
      City: ${freelancer.address?.city}
      Company: ${freelancer.company?.name}
      `).join('\n');
    console.log(output);
  });

  test.afterEach(async () => {
    await PageManager.getInstance().close();
  });
});
