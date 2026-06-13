# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckoutStepTwoPage.spec.ts >> Checkout Step Two Page Tests >> Verify user can cancel checkout from step two and go back to inventory
- Location: src\tests\CheckoutStepTwoPage.spec.ts:42:9

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "TTACart - Products"
Received: "TTACart - Your Cart"
Timeout:  15000ms

Call log:
  - Expect "toHaveTitle" with timeout 15000ms
    33 × unexpected value "TTACart - Your Cart"

```

```yaml
- complementary:
  - button "Close menu": ×
  - link "All Items":
    - /url: ./inventory.html
  - link "About":
    - /url: https://app.thetestingacademy.com/
  - link "Logout":
    - /url: "#"
  - link "Reset App State":
    - /url: "#"
- banner:
  - button "Open menu":
    - img
  - text: TTACart
  - link "Shopping cart":
    - /url: ./cart.html
    - img
    - text: "1"
- text: Your Cart
- main:
  - text: QTY Description 1
  - link "TTA Practice Backpack":
    - /url: ./inventory-item.html?id=tta-practice-backpack
  - text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
  - button "Remove"
  - link "Continue Shopping":
    - /url: ./inventory.html
    - img
    - text: Continue Shopping
  - link "Checkout":
    - /url: ./checkout-step-one.html
- contentinfo:
  - link "Twitter":
    - /url: https://twitter.com/TheTestingAcad
    - img
  - link "Facebook":
    - /url: https://facebook.com/
    - img
  - link "LinkedIn":
    - /url: https://linkedin.com/
    - img
  - text: (c) 2026 TTACart - The Testing Academy. All Rights Reserved.
  - link "Terms of Service":
    - /url: https://app.thetestingacademy.com/
  - text: "|"
  - link "Privacy Policy":
    - /url: https://app.thetestingacademy.com/
```

# Test source

```ts
  341 |         this.logger.info(`Waiting for DOM content loaded`);
  342 |         await this.page.waitForLoadState('domcontentloaded', { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  343 |         this.logger.info(`Waiting for page to fully load`);
  344 |         await this.page.waitForLoadState('load', { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  345 |     }
  346 | 
  347 |     async waitForNetworkIdle(): Promise<void> {
  348 |         this.logger.info(`Waiting for network to be idle`);
  349 |         await this.page.waitForLoadState('networkidle', { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  350 |     }
  351 | 
  352 |     async waitForTimeout(milliseconds: number): Promise<void> {
  353 |         this.logger.info(`Waiting for ${milliseconds}ms`);
  354 |         await this.page.waitForTimeout(milliseconds);
  355 |     }
  356 | 
  357 |     // ─────────────────────────────────────────────
  358 |     // 9. Validation / Assertion Methods
  359 |     // ─────────────────────────────────────────────
  360 | 
  361 |     async expectVisible(locator: FLEX, elementName?: string): Promise<void> {
  362 |         const element = this.resolveLocator(locator);
  363 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} is visible`);
  364 |         await expect(element).toBeVisible({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  365 |     }
  366 | 
  367 |     async expectHidden(locator: FLEX, elementName?: string): Promise<void> {
  368 |         const element = this.resolveLocator(locator);
  369 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} is hidden`);
  370 |         await expect(element).toBeHidden({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  371 |     }
  372 | 
  373 |     async expectEnabled(locator: FLEX, elementName?: string): Promise<void> {
  374 |         const element = this.resolveLocator(locator);
  375 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} is enabled`);
  376 |         await expect(element).toBeEnabled({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  377 |     }
  378 | 
  379 |     async expectDisabled(locator: FLEX, elementName?: string): Promise<void> {
  380 |         const element = this.resolveLocator(locator);
  381 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} is disabled`);
  382 |         await expect(element).toBeDisabled({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  383 |     }
  384 | 
  385 |     async expectChecked(locator: FLEX, elementName?: string): Promise<void> {
  386 |         const element = this.resolveLocator(locator);
  387 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} is checked`);
  388 |         await expect(element).toBeChecked({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  389 |     }
  390 | 
  391 |     async expectUnchecked(locator: FLEX, elementName?: string): Promise<void> {
  392 |         const element = this.resolveLocator(locator);
  393 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} is unchecked`);
  394 |         await expect(element).not.toBeChecked({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  395 |     }
  396 | 
  397 |     async expectText(locator: FLEX, text: string, elementName?: string): Promise<void> {
  398 |         const element = this.resolveLocator(locator);
  399 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} has text: ${text}`);
  400 |         await expect(element).toHaveText(text, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  401 |     }
  402 | 
  403 |     async expectContainsText(locator: FLEX, text: string, elementName?: string): Promise<void> {
  404 |         const element = this.resolveLocator(locator);
  405 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} contains text: ${text}`);
  406 |         await expect(element).toContainText(text, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  407 |     }
  408 | 
  409 |     async expectValue(locator: FLEX, value: string, elementName?: string): Promise<void> {
  410 |         const element = this.resolveLocator(locator);
  411 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} has value: ${value}`);
  412 |         await expect(element).toHaveValue(value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  413 |     }
  414 | 
  415 |     async expectAttribute(locator: FLEX, attribute: string, value: string, elementName?: string): Promise<void> {
  416 |         const element = this.resolveLocator(locator);
  417 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} has attribute ${attribute}: ${value}`);
  418 |         await expect(element).toHaveAttribute(attribute, value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  419 |     }
  420 | 
  421 |     async expectCount(locator: FLEX, count: number, elementName?: string): Promise<void> {
  422 |         const element = this.resolveLocator(locator);
  423 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} count is: ${count}`);
  424 |         await expect(element).toHaveCount(count, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  425 |     }
  426 | 
  427 |     async expectClass(locator: FLEX, className: string, elementName?: string): Promise<void> {
  428 |         const element = this.resolveLocator(locator);
  429 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} has class: ${className}`);
  430 |         await expect(element).toHaveClass(className, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  431 |     }
  432 | 
  433 |     async expectCSS(locator: FLEX, property: string, value: string, elementName?: string): Promise<void> {
  434 |         const element = this.resolveLocator(locator);
  435 |         this.logger.info(`Asserting element${elementName ? ': [' + elementName + ']' : ''} CSS ${property}: ${value}`);
  436 |         await expect(element).toHaveCSS(property, value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  437 |     }
  438 | 
  439 |     async expectPageTitle(title: string): Promise<void> {
  440 |         this.logger.info(`Asserting page title is: ${title}`);
> 441 |         await expect(this.page).toHaveTitle(title, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
      |                                 ^ Error: expect(page).toHaveTitle(expected) failed
  442 |     }
  443 | 
  444 |     async expectPageTitleContains(title: string): Promise<void> {
  445 |         this.logger.info(`Asserting page title contains: ${title}`);
  446 |         await expect(this.page).toHaveTitle(new RegExp(title), { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  447 |     }
  448 | 
  449 |     async expectPageURL(url: string): Promise<void> {
  450 |         this.logger.info(`Asserting page URL is: ${url}`);
  451 |         await expect(this.page).toHaveURL(url, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  452 |     }
  453 | 
  454 |     async expectPageURLContains(url: string): Promise<void> {
  455 |         this.logger.info(`Asserting page URL contains: ${url}`);
  456 |         await expect(this.page).toHaveURL(new RegExp(url), { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  457 |     }
  458 | 
  459 | }
```