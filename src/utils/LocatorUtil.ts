/**
 * This is Locator Utils file which contains utility functions for locators(WebElements).
 * FLEX - Flexible locator which can be either a string or a Playwright Locator object.
 *
 * Sections:
 *  1. Mouse Actions
 *  2. Keyboard Actions
 *  3. Input Methods
 *  4. Select Methods
 *  5. State & Getter Methods
 *  6. Wait Methods
 *  7. Scroll Methods
 *  8. Page Load Methods
 *  9. Validation / Assertion Methods
 */

import { expect, Locator, Page } from "@playwright/test";
import { createLogger, Logger } from "../utils/Logger";

export const DEFAULT_ACTION_TIMEOUT_MS = 15000;
export type FLEX = Locator | string;


export class LocatorUtil {

    private readonly page: Page;
    private readonly logger: Logger;

    constructor(page: Page, logger?: Logger) {
        this.page = page;
        this.logger = logger ?? createLogger('LocatorUtil');
       
    }

    private resolveLocator(locator: FLEX): Locator {
        return typeof locator === 'string' ? this.page.locator(locator) : locator;
    }

    // ─────────────────────────────────────────────
    // 1. Mouse Actions
    // ─────────────────────────────────────────────

    async click(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Clicking on element${elementName ? ': [' + elementName + ']' : ''}`);
        await element.click({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async doubleClick(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Double clicking on element${elementName ? ': [' + elementName + ']' : ''}`);
        await element.dblclick({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async rightClick(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Right clicking on element${elementName ? ': [' + elementName + ']' : ''}`);
        await element.click({ button: 'right', timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async hover(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Hovering over element${elementName ? ': [' + elementName + ']' : ''}`);
        await element.hover({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async dragAndDrop(source: FLEX, target: FLEX, elementName?: string): Promise<void> {
        const sourceElement = this.resolveLocator(source);
        const targetElement = this.resolveLocator(target);
        this.logger.info(`Dragging element${elementName ? ': [' + elementName + ']' : ''} to target`);
        await sourceElement.dragTo(targetElement, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async forceClick(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Force clicking on element${elementName ? ': [' + elementName + ']' : ''}`);
        await element.click({ force: true, timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async clickWithOffset(locator: FLEX, x: number, y: number, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Clicking on element${elementName ? ': [' + elementName + ']' : ''} at offset (${x}, ${y})`);
        await element.click({ position: { x, y }, timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    // ─────────────────────────────────────────────
    // 2. Keyboard Actions
    // ─────────────────────────────────────────────

    async pressKey(locator: FLEX, key: string, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Pressing key: ${key}${elementName ? ' on element: [' + elementName + ']' : ''}`);
        await element.press(key, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async pressMultipleKeysSequentially(locator: FLEX, keys: string[], elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        for (const key of keys) {
            this.logger.info(`Pressing key: ${key}${elementName ? ' on element: [' + elementName + ']' : ''}`);
            await element.press(key);
        }
    }

    async typeText(locator: FLEX, text: string, delay = 50, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Typing text character by character: ${text}${elementName ? ' on element: [' + elementName + ']' : ''}`);
        await element.pressSequentially(text, { delay });
    }

    // ─────────────────────────────────────────────
    // 3. Input Methods
    // ─────────────────────────────────────────────

    async fill(locator: FLEX, value: string, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Filling element${elementName ? ': [' + elementName + ']' : ''} with value: ${value}`);
        await element.fill(value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async clearAndFill(locator: FLEX, value: string, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Clearing and filling element${elementName ? ': [' + elementName + ']' : ''} with value: ${value}`);
        await element.clear({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
        await element.fill(value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async clear(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Clearing element${elementName ? ': [' + elementName + ']' : ''}`);
        await element.clear({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async check(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Checking element${elementName ? ': [' + elementName + ']' : ''}`);
        await element.check({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async uncheck(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Unchecking element${elementName ? ': [' + elementName + ']' : ''}`);
        await element.uncheck({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async uploadFile(locator: FLEX, filePath: string, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Uploading file: ${filePath}${elementName ? ' on element: [' + elementName + ']' : ''}`);
        await element.setInputFiles(filePath);
    }

    async uploadMultipleFiles(locator: FLEX, filePaths: string[], elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Uploading multiple files: ${filePaths.join(', ')}${elementName ? ' on element: [' + elementName + ']' : ''}`);
        await element.setInputFiles(filePaths);
    }

    // ─────────────────────────────────────────────
    // 4. Select Methods
    // ─────────────────────────────────────────────

    async selectByText(locator: FLEX, text: string, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Selecting option by visible text: ${text}${elementName ? ' on element: [' + elementName + ']' : ''}`);
        await element.selectOption({ label: text }, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async selectByValue(locator: FLEX, value: string, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Selecting option by value: ${value}${elementName ? ' on element: [' + elementName + ']' : ''}`);
        await element.selectOption({ value:value }, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async selectByIndex(locator: FLEX, index: number, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Selecting option by index: ${index}${elementName ? ' on element: [' + elementName + ']' : ''}`);
        await element.selectOption({index: index }, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async selectMultipleByText(locator: FLEX, texts: string[], elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Selecting multiple options by text: ${texts.join(', ')}${elementName ? ' on element: [' + elementName + ']' : ''}`);
        await element.selectOption(texts.map(label => ({ label })), { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async selectMultipleByValue(locator: FLEX, values: string[], elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Selecting multiple options by value: ${values.join(', ')}${elementName ? ' on element: [' + elementName + ']' : ''}`);
        await element.selectOption(values.map(value => ({ value })), { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async getSelectedOption(locator: FLEX, elementName?: string): Promise<string> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Getting selected option text${elementName ? ' from element: [' + elementName + ']' : ''}`);
        return await element.evaluate((el: HTMLSelectElement) =>
            el.options[el.selectedIndex]?.text ?? ''
        );
    }

    async getAllOptions(locator: FLEX, elementName?: string): Promise<string[]> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Getting all dropdown options${elementName ? ' from element: [' + elementName + ']' : ''}`);
        return await element.evaluate((el: HTMLSelectElement) =>
            Array.from(el.options).map(opt => opt.text)
        );
    }

    // ─────────────────────────────────────────────
    // 5. WebElement Information Methods.
    // ─────────────────────────────────────────────

    async getText(locator: FLEX, elementName?: string): Promise<string> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Getting inner text from element${elementName ? ': [' + elementName + ']' : ''}`);
        return await element.innerText({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async getTextContent(locator: FLEX, elementName?: string): Promise<string | null> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Getting text content from element${elementName ? ': [' + elementName + ']' : ''}`);
        return await element.textContent({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async getInputValue(locator: FLEX, elementName?: string): Promise<string> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Getting input value from element${elementName ? ': [' + elementName + ']' : ''}`);
        return await element.inputValue({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async getAttribute(locator: FLEX, attribute: string, elementName?: string): Promise<string | null> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Getting attribute: ${attribute}${elementName ? ' from element: [' + elementName + ']' : ''}`);
        return await element.getAttribute(attribute, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async isVisible(locator: FLEX, elementName?: string): Promise<boolean> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Checking visibility of element${elementName ? ': [' + elementName + ']' : ''}`);
        return await element.isVisible();
    }

    async isEnabled(locator: FLEX, elementName?: string): Promise<boolean> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Checking if element${elementName ? ': [' + elementName + ']' : ''} is enabled`);
        return await element.isEnabled();
    }

    async isDisabled(locator: FLEX, elementName?: string): Promise<boolean> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Checking if element${elementName ? ': [' + elementName + ']' : ''} is disabled`);
        return await element.isDisabled();
    }

    async isChecked(locator: FLEX, elementName?: string): Promise<boolean> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Checking if element${elementName ? ': [' + elementName + ']' : ''} is checked`);
        return await element.isChecked();
    }

    async isHidden(locator: FLEX, elementName?: string): Promise<boolean> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Checking if element${elementName ? ': [' + elementName + ']' : ''} is hidden`);
        return await element.isHidden();
    }

    async getCount(locator: FLEX, elementName?: string): Promise<number> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Getting count of matched elements${elementName ? ': [' + elementName + ']' : ''}`);
        return await element.count();
    }

    async getAllTexts(locator: FLEX, elementName?: string): Promise<string[]> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Getting all inner texts from matched elements${elementName ? ': [' + elementName + ']' : ''}`);
        return await element.allInnerTexts();
    }

    // ─────────────────────────────────────────────
    // 6. Wait Methods
    // ─────────────────────────────────────────────

    async waitForVisible(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Waiting for element${elementName ? ': [' + elementName + ']' : ''} to be visible`);
        await element.waitFor({ state: 'visible', timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async waitForHidden(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Waiting for element${elementName ? ': [' + elementName + ']' : ''} to be hidden`);
        await element.waitFor({ state: 'hidden', timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async waitForAttached(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Waiting for element${elementName ? ': [' + elementName + ']' : ''} to be attached to DOM`);
        await element.waitFor({ state: 'attached', timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async waitForDetached(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Waiting for element${elementName ? ': [' + elementName + ']' : ''} to be detached from DOM`);
        await element.waitFor({ state: 'detached', timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async waitForEnabled(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Waiting for element${elementName ? ': [' + elementName + ']' : ''} to be enabled`);
        await expect(element).toBeEnabled({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    // ─────────────────────────────────────────────
    // 7. Scroll Methods
    // ─────────────────────────────────────────────

    async scrollIntoView(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Scrolling element${elementName ? ': [' + elementName + ']' : ''} into view`);
        await element.scrollIntoViewIfNeeded({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async scrollToTop(): Promise<void> {
        this.logger.info(`Scrolling page to top`);
        await this.page.evaluate(() => window.scrollTo(0, 0));
    }

    async scrollToBottom(): Promise<void> {
        this.logger.info(`Scrolling page to bottom`);
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    async scrollByOffset(x: number, y: number): Promise<void> {
        this.logger.info(`Scrolling page by offset (${x}, ${y})`);
        await this.page.evaluate(([dx, dy]) => window.scrollBy(dx, dy), [x, y]);
    }

    // ─────────────────────────────────────────────
    // 8. Page Load Methods
    // ─────────────────────────────────────────────

    async waitForPageLoad(): Promise<void> {
        this.logger.info(`Waiting for DOM content loaded`);
        await this.page.waitForLoadState('domcontentloaded', { timeout: DEFAULT_ACTION_TIMEOUT_MS });
        this.logger.info(`Waiting for page to fully load`);
        await this.page.waitForLoadState('load', { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async waitForNetworkIdle(): Promise<void> {
        this.logger.info(`Waiting for network to be idle`);
        await this.page.waitForLoadState('networkidle', { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async waitForTimeout(milliseconds: number): Promise<void> {
        this.logger.info(`Waiting for ${milliseconds}ms`);
        await this.page.waitForTimeout(milliseconds);
    }

    // ─────────────────────────────────────────────
    // 9. Validation / Assertion Methods
    // ─────────────────────────────────────────────

    async expectVisible(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} is visible`);
        await expect(element).toBeVisible({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectHidden(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} is hidden`);
        await expect(element).toBeHidden({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectEnabled(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} is enabled`);
        await expect(element).toBeEnabled({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectDisabled(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} is disabled`);
        await expect(element).toBeDisabled({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectChecked(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} is checked`);
        await expect(element).toBeChecked({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectUnchecked(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} is unchecked`);
        await expect(element).not.toBeChecked({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectText(locator: FLEX, text: string, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} has text: ${text}`);
        await expect(element).toHaveText(text, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectContainsText(locator: FLEX, text: string, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} contains text: ${text}`);
        await expect(element).toContainText(text, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectValue(locator: FLEX, value: string, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} has value: ${value}`);
        await expect(element).toHaveValue(value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectAttribute(locator: FLEX, attribute: string, value: string, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} has attribute ${attribute}: ${value}`);
        await expect(element).toHaveAttribute(attribute, value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectCount(locator: FLEX, count: number, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} count is: ${count}`);
        await expect(element).toHaveCount(count, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectClass(locator: FLEX, className: string, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} has class: ${className}`);
        await expect(element).toHaveClass(className, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectCSS(locator: FLEX, property: string, value: string, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} CSS ${property}: ${value}`);
        await expect(element).toHaveCSS(property, value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectPageTitle(title: string): Promise<void> {
        this.logger.info(`Asserting page title is: ${title}`);
        await expect(this.page).toHaveTitle(title, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectPageTitleContains(title: string): Promise<void> {
        this.logger.info(`Asserting page title contains: ${title}`);
        await expect(this.page).toHaveTitle(new RegExp(title), { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectPageURL(url: string): Promise<void> {
        this.logger.info(`Asserting page URL is: ${url}`);
        await expect(this.page).toHaveURL(url, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    async expectPageURLContains(url: string): Promise<void> {
        this.logger.info(`Asserting page URL contains: ${url}`);
        await expect(this.page).toHaveURL(new RegExp(url), { timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

}