import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutCompletePage extends BasePage {
	static readonly PATH = '/playwright/ttacart/checkout-complete';

	private readonly pageTitle: Locator;
	private readonly completeHeader: Locator;
	private readonly backHomeButton: Locator;

	constructor(page: Page) {
		super(page, 'CheckoutCompletePage');
		this.pageTitle = page.locator("//span[@class='page-title']");
		this.completeHeader = page.locator('[data-test="complete-header"]');
		this.backHomeButton = page.locator('[data-test="back-to-products"]');
	}

	async verifyCheckoutCompletePageIsDisplayed(): Promise<void> {
		await this.locatorUtil.expectPageURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-complete');
		await this.locatorUtil.expectPageTitle('TTACart - Checkout: Complete!');
		await this.locatorUtil.expectText(this.pageTitle, 'Checkout: Complete!', 'Page Title');
	}

	async verifyStatusOfTheOrderIsCompletedOrNot(): Promise<void> {
		await this.locatorUtil.expectVisible(this.completeHeader, 'Order Complete Header');
        await this.locatorUtil.expectText(this.completeHeader, 'Thank you for your order!', 'Order Complete Header');
	}

	async clickOnBackHomeButton(): Promise<void> {
		await this.locatorUtil.click(this.backHomeButton, 'Back Home Button');
		await this.locatorUtil.waitForPageLoad();
	}
}
