import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
    static readonly PATH = '/playwright/ttacart/inventory.html';

    private readonly inventoryPageHeader: Locator;
    private readonly producCountLinks: Locator;
    private readonly cartButton: Locator;
    private readonly cartBadgeCount: Locator;



    constructor(page: Page) {
        super(page, 'InventoryPage');
        this.inventoryPageHeader = page.locator("//span[@class='page-title']");
        this.producCountLinks = page.locator("//div[@class='item-body']//a");
        this.cartButton = page.locator("//a[@id='shopping_cart_container']");
        this.cartBadgeCount = page.locator("//span[@class='cart-badge']");
    }


    async verifyInventoryPageIsDisplayed(): Promise<void> {
        await this.locatorUtil.expectPageURL('https://app.thetestingacademy.com/playwright/ttacart/inventory');
        await this.locatorUtil.expectPageTitle('TTACart - Products');
        await this.locatorUtil.expectText(this.inventoryPageHeader, 'Products', 'Page Title');
    }

    getProductToAddIntoCart(id: string): Locator {
        return this.page.locator(`//button[@data-test='add-to-cart-${id}']`);
    }

    getProductToRemoveFromCart(id: string): Locator {
        return this.page.locator(`//button[@data-test='remove-${id}']`);
    }


    async addProductToCart(id: string): Promise<void> {
        await this.locatorUtil.click(this.getProductToAddIntoCart(id), 'Add to Cart Button');
    }

    async removeProductFromCart(id: string): Promise<void> {
        await this.locatorUtil.click(this.getProductToRemoveFromCart(id), 'Remove from Cart Button');
    }

    async openCart(): Promise<void> {
        await this.locatorUtil.click(this.cartButton, 'Cart Button');
        await this.locatorUtil.waitForPageLoad();
    }


    async verifyProductCountOnInventoryPage(expectedCount: number): Promise<void> {
        await this.locatorUtil.waitForTimeout(2000);
        const actualCount = await this.locatorUtil.getCount(this.producCountLinks, 'Product Links');
        expect(actualCount).toBe(expectedCount);
        await this.locatorUtil.expectCount(this.producCountLinks, expectedCount, 'Product Links');
    };

    async verifyProductAddedToCartOrNotFromInventoryPage(): Promise<void> {
        await this.locatorUtil.expectText(this.cartBadgeCount, '1', 'Cart Badge Count');
    }

}