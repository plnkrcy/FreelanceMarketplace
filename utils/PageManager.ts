import { Browser, BrowserContext, Page } from '@playwright/test';
class PageManager {
  private static instance: PageManager;
  public browser!: Browser;
  public context!: BrowserContext;
  public page!: Page;
  private constructor() {}
  static getInstance(): PageManager {
    if (!PageManager.instance) {
      PageManager.instance = new PageManager();
    }
    return PageManager.instance;
  }
  async init(browser: Browser) {
    this.browser = browser;
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
  }
  async close() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}
export default PageManager;