import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    static readonly PATH = '/playwright/ttacart/cart';
    private readonly addedItemName: Locator;
    private readonly emptyCartMessage: Locator;
    private readonly pageTitle: Locator;
    private readonly checkoutButton: Locator;
    private readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        super(page, 'CartPage');
        this.checkoutButton = page.locator("//a[normalize-space()='Checkout']");
        this.addedItemName = page.locator(".cart-name");
        this.emptyCartMessage = page.locator("//p[@data-test='cart-empty']");
        this.pageTitle = page.locator("//span[@class='page-title']");
        this.continueShoppingButton = page.getByText("Continue Shopping")
    }

    async verifyUserIsLandedOnCartPageOrNot(): Promise<void> {
        await this.locatorUtil.expectPageURL('https://app.thetestingacademy.com/playwright/ttacart/cart');
        await this.locatorUtil.expectPageTitle('TTACart - Your Cart');
        await this.locatorUtil.expectText(this.pageTitle, 'Your Cart', 'Page Title');
    }

    async verifyProductAddedToCartOrNot(productName: string): Promise<void> {
        await this.locatorUtil.expectContainsText(this.addedItemName, productName, 'Added Item Name');
        await this.locatorUtil.expectVisible(this.checkoutButton, 'Checkout Button');
    }

    getProductToRemoveFromCart(id: string): Locator {
        return this.page.locator(`//button[@data-test='remove-${id}']`);
    }

    async removeProductFromCart(id: string): Promise<void> {
        await this.locatorUtil.click(this.getProductToRemoveFromCart(id), 'Remove Button');
    }

    async verifyProductRemovedFromCartOrNot(expectedText: string): Promise<void> {
        await this.locatorUtil.expectVisible(this.emptyCartMessage, 'Empty Cart Message');
        await this.locatorUtil.expectText(this.emptyCartMessage, expectedText, 'Empty Cart Message');
    }


    async clickOnCheckoutButton(): Promise<void> {
        await this.locatorUtil.click(this.checkoutButton, 'Checkout Button');
        await this.locatorUtil.waitForPageLoad();
    }

    async verifyCheckoutButtonIsVisibleWhenProductInCart(): Promise<void> {
        await this.locatorUtil.expectVisible(this.checkoutButton, 'Checkout Button');
    }

    async clickOnContinueShoppingButton(): Promise<void> {
        await this.locatorUtil.click(this.continueShoppingButton, 'Continue Shopping Button');
        await this.locatorUtil.waitForPageLoad();
    }




}