import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutStepOnePage extends BasePage {
    static readonly PATH = '/playwright/ttacart/checkout-step-one';

    private readonly pageTitle: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postalCodeInput: Locator;
    private readonly continueButton: Locator;
    private readonly cancelButton: Locator;

    constructor(page: Page) {
        super(page, 'CheckoutStepOnePage');
        this.pageTitle = page.locator("//span[@class='page-title']");
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
    }

    async verifyCheckoutStepOnePageIsDisplayed(): Promise<void> {
        await this.locatorUtil.expectPageURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-step-one');
        await this.locatorUtil.expectPageTitle('TTACart - Checkout: Your Information');
        await this.locatorUtil.expectText(this.pageTitle, 'Checkout: Your Information', 'Page Title');
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.locatorUtil.fill(this.firstNameInput, firstName, 'First Name Input');
        await this.locatorUtil.fill(this.lastNameInput, lastName, 'Last Name Input');
        await this.locatorUtil.fill(this.postalCodeInput, postalCode, 'Postal Code Input');
    }

    async clickOnContinueButton(): Promise<void> {
        await this.locatorUtil.click(this.continueButton, 'Continue Button');
        await this.locatorUtil.waitForPageLoad();
    }

    async clickOnCancelButton(): Promise<void> {
        await this.locatorUtil.click(this.cancelButton, 'Cancel Button');
        await this.locatorUtil.waitForPageLoad();
    }
}
