# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.ts >> Login Functionality Tests >> Verify error message on invalid credentials
- Location: src\tests\LoginPage.spec.ts:27:9

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "TTACart"
Received: "TTACart - Login"
Timeout:  15000ms

Call log:
  - Expect "toHaveTitle" with timeout 15000ms
    33 × unexpected value "TTACart - Login"

```

```yaml
- heading "TTACart" [level=1]
- textbox "Username"
- textbox "Password"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- paragraph: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- paragraph: tta_secret
```

# Test source

```ts
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
  395 |         await expect(element).toHaveText(text, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
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
> 436 |         await expect(this.page).toHaveTitle(title, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
      |                                 ^ Error: expect(page).toHaveTitle(expected) failed
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