import { Page } from "@playwright/test";
import { LocatorUtil } from "../utils/LocatorUtil";
import { createLogger, Logger } from "../utils/Logger";


export abstract class BasePage {

    protected readonly page: Page;
    protected readonly locatorUtil: LocatorUtil;
    protected readonly logger: Logger;

    constructor(page: Page, scope: string) {
        this.page = page;
        this.logger = createLogger(scope);
        this.locatorUtil = new LocatorUtil(page, this.logger);

    }

    protected async navigateToTheApplication(url: string): Promise<void> {
        this.logger.info(`Navigating to the application: ${url}`);
        await this.page.goto(url);
        await this.locatorUtil.waitForPageLoad();

    }
}


