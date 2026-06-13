# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.ts >> Login Functionality Tests >> Verify that user can login with valid credentials
- Location: src\tests\LoginPage.spec.ts:16:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/playwright/ttacart/index.html"
Received: "https://app.thetestingacademy.com/playwright/ttacart/inventory"
Timeout:  15000ms

Call log:
  - Expect "toHaveURL" with timeout 15000ms
    - waiting for navigation to finish...
    - navigated to "https://app.thetestingacademy.com/playwright/ttacart/inventory"
    32 × unexpected value "https://app.thetestingacademy.com/playwright/ttacart/inventory"

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
- text: Products
- combobox "Sort products":
  - option "Name (A to Z)" [selected]
  - option "Name (Z to A)"
  - option "Price (low to high)"
  - option "Price (high to low)"
- main:
  - article:
    - link:
      - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
    - link "Test.allTheThings() T-Shirt (Red)":
      - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
    - text: This classic TTA t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
    - button "Add to cart"
  - article:
    - link:
      - /url: ./inventory-item.html?id=tta-bike-light
    - link "TTA Bike Light":
      - /url: ./inventory-item.html?id=tta-bike-light
    - text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
    - button "Add to cart"
  - article:
    - link:
      - /url: ./inventory-item.html?id=tta-bolt-tshirt
    - link "TTA Bolt T-Shirt":
      - /url: ./inventory-item.html?id=tta-bolt-tshirt
    - text: Get your testing superhero on with the TTA bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
    - button "Add to cart"
  - article:
    - link:
      - /url: ./inventory-item.html?id=tta-fleece-jacket
    - link "TTA Fleece Jacket":
      - /url: ./inventory-item.html?id=tta-fleece-jacket
    - text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
    - button "Add to cart"
  - article:
    - link:
      - /url: ./inventory-item.html?id=tta-junior-tester-onesie
    - link "TTA Junior Tester Onesie":
      - /url: ./inventory-item.html?id=tta-junior-tester-onesie
    - text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
    - button "Add to cart"
  - article:
    - link:
      - /url: ./inventory-item.html?id=tta-practice-backpack
    - link "TTA Practice Backpack":
      - /url: ./inventory-item.html?id=tta-practice-backpack
    - text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
    - button "Add to cart"
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
  345 | 
  346 |     async waitForNetworkIdle(): Promise<void> {
  347 |         this.logger.info(`Waiting for network to be idle`);
  348 |         await this.page.waitForLoadState('networkidle', { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  349 |     }
  350 | 
  351 |     // ─────────────────────────────────────────────
  352 |     // 9. Validation / Assertion Methods
  353 |     // ─────────────────────────────────────────────
  354 | 
  355 |     async expectVisible(locator: FLEX): Promise<void> {
  356 |         const element = this.resolveLocator(locator);
  357 |         this.logger.info(`Asserting element is visible`);
  358 |         await expect(element).toBeVisible({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  359 |     }
  360 | 
  361 |     async expectHidden(locator: FLEX): Promise<void> {
  362 |         const element = this.resolveLocator(locator);
  363 |         this.logger.info(`Asserting element is hidden`);
  364 |         await expect(element).toBeHidden({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  365 |     }
  366 | 
  367 |     async expectEnabled(locator: FLEX): Promise<void> {
  368 |         const element = this.resolveLocator(locator);
  369 |         this.logger.info(`Asserting element is enabled`);
  370 |         await expect(element).toBeEnabled({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  371 |     }
  372 | 
  373 |     async expectDisabled(locator: FLEX): Promise<void> {
  374 |         const element = this.resolveLocator(locator);
  375 |         this.logger.info(`Asserting element is disabled`);
  376 |         await expect(element).toBeDisabled({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  377 |     }
  378 | 
  379 |     async expectChecked(locator: FLEX): Promise<void> {
  380 |         const element = this.resolveLocator(locator);
  381 |         this.logger.info(`Asserting element is checked`);
  382 |         await expect(element).toBeChecked({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  383 |     }
  384 | 
  385 |     async expectUnchecked(locator: FLEX): Promise<void> {
  386 |         const element = this.resolveLocator(locator);
  387 |         this.logger.info(`Asserting element is unchecked`);
  388 |         await expect(element).not.toBeChecked({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  389 |     }
  390 | 
  391 |     async expectText(locator: FLEX, text: string): Promise<void> {
  392 |         const element = this.resolveLocator(locator);
  393 |         this.logger.info(`Asserting element has text: ${text}`);
  394 |         await expect(element).toHaveText(text, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  395 |     }
  396 | 
  397 |     async expectContainsText(locator: FLEX, text: string): Promise<void> {
  398 |         const element = this.resolveLocator(locator);
  399 |         this.logger.info(`Asserting element contains text: ${text}`);
  400 |         await expect(element).toContainText(text, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  401 |     }
  402 | 
  403 |     async expectValue(locator: FLEX, value: string): Promise<void> {
  404 |         const element = this.resolveLocator(locator);
  405 |         this.logger.info(`Asserting element has value: ${value}`);
  406 |         await expect(element).toHaveValue(value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  407 |     }
  408 | 
  409 |     async expectAttribute(locator: FLEX, attribute: string, value: string): Promise<void> {
  410 |         const element = this.resolveLocator(locator);
  411 |         this.logger.info(`Asserting element has attribute ${attribute}: ${value}`);
  412 |         await expect(element).toHaveAttribute(attribute, value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  413 |     }
  414 | 
  415 |     async expectCount(locator: FLEX, count: number): Promise<void> {
  416 |         const element = this.resolveLocator(locator);
  417 |         this.logger.info(`Asserting element count is: ${count}`);
  418 |         await expect(element).toHaveCount(count, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  419 |     }
  420 | 
  421 |     async expectClass(locator: FLEX, className: string): Promise<void> {
  422 |         const element = this.resolveLocator(locator);
  423 |         this.logger.info(`Asserting element has class: ${className}`);
  424 |         await expect(element).toHaveClass(className, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  425 |     }
  426 | 
  427 |     async expectCSS(locator: FLEX, property: string, value: string): Promise<void> {
  428 |         const element = this.resolveLocator(locator);
  429 |         this.logger.info(`Asserting element CSS ${property}: ${value}`);
  430 |         await expect(element).toHaveCSS(property, value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  431 |     }
  432 | 
  433 |     async expectPageTitle(title: string): Promise<void> {
  434 |         this.logger.info(`Asserting page title is: ${title}`);
  435 |         await expect(this.page).toHaveTitle(title, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  436 |     }
  437 | 
  438 |     async expectPageTitleContains(title: string): Promise<void> {
  439 |         this.logger.info(`Asserting page title contains: ${title}`);
  440 |         await expect(this.page).toHaveTitle(new RegExp(title), { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  441 |     }
  442 | 
  443 |     async expectPageURL(url: string): Promise<void> {
  444 |         this.logger.info(`Asserting page URL is: ${url}`);
> 445 |         await expect(this.page).toHaveURL(url, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
      |                                 ^ Error: expect(page).toHaveURL(expected) failed
  446 |     }
  447 | 
  448 |     async expectPageURLContains(url: string): Promise<void> {
  449 |         this.logger.info(`Asserting page URL contains: ${url}`);
  450 |         await expect(this.page).toHaveURL(new RegExp(url), { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  451 |     }
  452 | 
  453 | }
```