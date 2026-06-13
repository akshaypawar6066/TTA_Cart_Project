# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: InventoryPage.spec.ts >> Inventory Page Tests >> Verify user can add product to cart and remove from cart
- Location: src\tests\InventoryPage.spec.ts:30:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('//p[@data-test=\'cart-empty\']')
Expected: "Your cart is empty"
Received: "Your cart is empty."
Timeout:  15000ms

Call log:
  - Expect "toHaveText" with timeout 15000ms
  - waiting for locator('//p[@data-test=\'cart-empty\']')
    33 × locator resolved to <p data-test="cart-empty">Your cart is empty.</p>
       - unexpected value "Your cart is empty."

```

```yaml
- paragraph: Your cart is empty.
```

# Test source

```ts
  295 |         this.logger.info(`Waiting for element to be attached to DOM`);
  296 |         await element.waitFor({ state: 'attached', timeout: DEFAULT_ACTION_TIMEOUT_MS });
  297 |     }
  298 | 
  299 |     async waitForDetached(locator: FLEX): Promise<void> {
  300 |         const element = this.resolveLocator(locator);
  301 |         this.logger.info(`Waiting for element to be detached from DOM`);
  302 |         await element.waitFor({ state: 'detached', timeout: DEFAULT_ACTION_TIMEOUT_MS });
  303 |     }
  304 | 
  305 |     async waitForEnabled(locator: FLEX): Promise<void> {
  306 |         const element = this.resolveLocator(locator);
  307 |         this.logger.info(`Waiting for element to be enabled`);
  308 |         await expect(element).toBeEnabled({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  309 |     }
  310 | 
  311 |     // ─────────────────────────────────────────────
  312 |     // 7. Scroll Methods
  313 |     // ─────────────────────────────────────────────
  314 | 
  315 |     async scrollIntoView(locator: FLEX): Promise<void> {
  316 |         const element = this.resolveLocator(locator);
  317 |         this.logger.info(`Scrolling element into view`);
  318 |         await element.scrollIntoViewIfNeeded({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  319 |     }
  320 | 
  321 |     async scrollToTop(): Promise<void> {
  322 |         this.logger.info(`Scrolling page to top`);
  323 |         await this.page.evaluate(() => window.scrollTo(0, 0));
  324 |     }
  325 | 
  326 |     async scrollToBottom(): Promise<void> {
  327 |         this.logger.info(`Scrolling page to bottom`);
  328 |         await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  329 |     }
  330 | 
  331 |     async scrollByOffset(x: number, y: number): Promise<void> {
  332 |         this.logger.info(`Scrolling page by offset (${x}, ${y})`);
  333 |         await this.page.evaluate(([dx, dy]) => window.scrollBy(dx, dy), [x, y]);
  334 |     }
  335 | 
  336 |     // ─────────────────────────────────────────────
  337 |     // 8. Page Load Methods
  338 |     // ─────────────────────────────────────────────
  339 | 
  340 |     async waitForPageLoad(): Promise<void> {
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
  352 |     // ─────────────────────────────────────────────
  353 |     // 9. Validation / Assertion Methods
  354 |     // ─────────────────────────────────────────────
  355 | 
  356 |     async expectVisible(locator: FLEX): Promise<void> {
  357 |         const element = this.resolveLocator(locator);
  358 |         this.logger.info(`Asserting element is visible`);
  359 |         await expect(element).toBeVisible({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  360 |     }
  361 | 
  362 |     async expectHidden(locator: FLEX): Promise<void> {
  363 |         const element = this.resolveLocator(locator);
  364 |         this.logger.info(`Asserting element is hidden`);
  365 |         await expect(element).toBeHidden({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  366 |     }
  367 | 
  368 |     async expectEnabled(locator: FLEX): Promise<void> {
  369 |         const element = this.resolveLocator(locator);
  370 |         this.logger.info(`Asserting element is enabled`);
  371 |         await expect(element).toBeEnabled({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  372 |     }
  373 | 
  374 |     async expectDisabled(locator: FLEX): Promise<void> {
  375 |         const element = this.resolveLocator(locator);
  376 |         this.logger.info(`Asserting element is disabled`);
  377 |         await expect(element).toBeDisabled({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  378 |     }
  379 | 
  380 |     async expectChecked(locator: FLEX): Promise<void> {
  381 |         const element = this.resolveLocator(locator);
  382 |         this.logger.info(`Asserting element is checked`);
  383 |         await expect(element).toBeChecked({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  384 |     }
  385 | 
  386 |     async expectUnchecked(locator: FLEX): Promise<void> {
  387 |         const element = this.resolveLocator(locator);
  388 |         this.logger.info(`Asserting element is unchecked`);
  389 |         await expect(element).not.toBeChecked({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  390 |     }
  391 | 
  392 |     async expectText(locator: FLEX, text: string): Promise<void> {
  393 |         const element = this.resolveLocator(locator);
  394 |         this.logger.info(`Asserting element has text: ${text}`);
> 395 |         await expect(element).toHaveText(text, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
      |                               ^ Error: expect(locator).toHaveText(expected) failed
  396 |     }
  397 | 
  398 |     async expectContainsText(locator: FLEX, text: string): Promise<void> {
  399 |         const element = this.resolveLocator(locator);
  400 |         this.logger.info(`Asserting element contains text: ${text}`);
  401 |         await expect(element).toContainText(text, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  402 |     }
  403 | 
  404 |     async expectValue(locator: FLEX, value: string): Promise<void> {
  405 |         const element = this.resolveLocator(locator);
  406 |         this.logger.info(`Asserting element has value: ${value}`);
  407 |         await expect(element).toHaveValue(value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  408 |     }
  409 | 
  410 |     async expectAttribute(locator: FLEX, attribute: string, value: string): Promise<void> {
  411 |         const element = this.resolveLocator(locator);
  412 |         this.logger.info(`Asserting element has attribute ${attribute}: ${value}`);
  413 |         await expect(element).toHaveAttribute(attribute, value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  414 |     }
  415 | 
  416 |     async expectCount(locator: FLEX, count: number): Promise<void> {
  417 |         const element = this.resolveLocator(locator);
  418 |         this.logger.info(`Asserting element count is: ${count}`);
  419 |         await expect(element).toHaveCount(count, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  420 |     }
  421 | 
  422 |     async expectClass(locator: FLEX, className: string): Promise<void> {
  423 |         const element = this.resolveLocator(locator);
  424 |         this.logger.info(`Asserting element has class: ${className}`);
  425 |         await expect(element).toHaveClass(className, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  426 |     }
  427 | 
  428 |     async expectCSS(locator: FLEX, property: string, value: string): Promise<void> {
  429 |         const element = this.resolveLocator(locator);
  430 |         this.logger.info(`Asserting element CSS ${property}: ${value}`);
  431 |         await expect(element).toHaveCSS(property, value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  432 |     }
  433 | 
  434 |     async expectPageTitle(title: string): Promise<void> {
  435 |         this.logger.info(`Asserting page title is: ${title}`);
  436 |         await expect(this.page).toHaveTitle(title, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  437 |     }
  438 | 
  439 |     async expectPageTitleContains(title: string): Promise<void> {
  440 |         this.logger.info(`Asserting page title contains: ${title}`);
  441 |         await expect(this.page).toHaveTitle(new RegExp(title), { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  442 |     }
  443 | 
  444 |     async expectPageURL(url: string): Promise<void> {
  445 |         this.logger.info(`Asserting page URL is: ${url}`);
  446 |         await expect(this.page).toHaveURL(url, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  447 |     }
  448 | 
  449 |     async expectPageURLContains(url: string): Promise<void> {
  450 |         this.logger.info(`Asserting page URL contains: ${url}`);
  451 |         await expect(this.page).toHaveURL(new RegExp(url), { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  452 |     }
  453 | 
  454 | }
```