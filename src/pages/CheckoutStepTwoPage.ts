import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutStepTwoPage extends BasePage {
    static readonly PATH = '/playwright/ttacart/checkout-step-two';

    private readonly pageTitle: Locator;
    private readonly finishButton: Locator;
    private readonly cancelButton: Locator;

    constructor(page: Page) {
        super(page, 'CheckoutStepTwoPage');
        this.pageTitle = page.locator("//span[@class='page-title']");
        this.finishButton = page.locator('[data-test="finish"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
    }

    async verifyCheckoutStepTwoPageIsDisplayed(): Promise<void> {
        await this.locatorUtil.expectPageURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-step-two');
        await this.locatorUtil.expectPageTitle('TTACart - Checkout: Overview');
        await this.locatorUtil.expectText(this.pageTitle, 'Checkout: Overview', 'Page Title');
    }

    async verifyFinishButtonIsEnabledOnCheckOutPageTwo(): Promise<void> {
        await this.locatorUtil.expectEnabled(this.finishButton, 'Finish Button');
    }
    
    async clickOnFinishButton(): Promise<void> {
        await this.locatorUtil.click(this.finishButton, 'Finish Button');
        await this.locatorUtil.waitForPageLoad();
    }

    async clickOnCancelButton(): Promise<void> {
        await this.locatorUtil.click(this.cancelButton, 'Cancel Button');
        await this.locatorUtil.waitForPageLoad();
    }
}
