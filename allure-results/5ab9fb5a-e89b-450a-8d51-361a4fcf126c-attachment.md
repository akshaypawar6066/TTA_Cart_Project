# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: InventoryPage.spec.ts >> Inventory Page Tests >> Verify product count on inventory page
- Location: src\tests\InventoryPage.spec.ts:25:10

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('#login-button')
    - locator resolved to <button type="submit" class="login-btn" id="login-button" data-test="login-button">Login</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - complementary [ref=e2]:
    - button "Close menu" [ref=e3] [cursor=pointer]: ×
    - link "All Items" [ref=e4] [cursor=pointer]:
      - /url: ./inventory.html
    - link "About" [ref=e5] [cursor=pointer]:
      - /url: https://app.thetestingacademy.com/
    - link "Logout" [ref=e6] [cursor=pointer]:
      - /url: "#"
    - link "Reset App State" [ref=e7] [cursor=pointer]:
      - /url: "#"
  - banner [ref=e8]:
    - button "Open menu" [ref=e9] [cursor=pointer]:
      - img [ref=e10]
    - generic [ref=e12]: TTACart
    - link "Shopping cart" [ref=e13] [cursor=pointer]:
      - /url: ./cart.html
      - img [ref=e14]
  - generic [ref=e18]:
    - generic [ref=e19]: Products
    - generic [ref=e20]:
      - img [ref=e21]
      - combobox "Sort products" [ref=e23] [cursor=pointer]:
        - option "Name (A to Z)" [selected]
        - option "Name (Z to A)"
        - option "Price (low to high)"
        - option "Price (high to low)"
  - main [ref=e24]:
    - generic [ref=e26]:
      - article [ref=e27]:
        - link [ref=e28] [cursor=pointer]:
          - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
          - img [ref=e29]:
            - generic [ref=e31]: test.
            - generic [ref=e32]: all()
        - generic [ref=e33]:
          - link "Test.allTheThings() T-Shirt (Red)" [ref=e35] [cursor=pointer]:
            - /url: ./inventory-item.html?id=test-allthethings-tshirt-red
          - generic [ref=e36]: This classic TTA t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e37]:
            - generic [ref=e38]: $15.99
            - button "Add to cart" [ref=e39] [cursor=pointer]
      - article [ref=e40]:
        - link [ref=e41] [cursor=pointer]:
          - /url: ./inventory-item.html?id=tta-bike-light
          - img [ref=e42]
        - generic [ref=e48]:
          - link "TTA Bike Light" [ref=e50] [cursor=pointer]:
            - /url: ./inventory-item.html?id=tta-bike-light
          - generic [ref=e51]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e52]:
            - generic [ref=e53]: $9.99
            - button "Add to cart" [ref=e54] [cursor=pointer]
      - article [ref=e55]:
        - link [ref=e56] [cursor=pointer]:
          - /url: ./inventory-item.html?id=tta-bolt-tshirt
          - img [ref=e57]
        - generic [ref=e60]:
          - link "TTA Bolt T-Shirt" [ref=e62] [cursor=pointer]:
            - /url: ./inventory-item.html?id=tta-bolt-tshirt
          - generic [ref=e63]: Get your testing superhero on with the TTA bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e64]:
            - generic [ref=e65]: $15.99
            - button "Add to cart" [ref=e66] [cursor=pointer]
      - article [ref=e67]:
        - link [ref=e68] [cursor=pointer]:
          - /url: ./inventory-item.html?id=tta-fleece-jacket
          - img [ref=e69]
        - generic [ref=e75]:
          - link "TTA Fleece Jacket" [ref=e77] [cursor=pointer]:
            - /url: ./inventory-item.html?id=tta-fleece-jacket
          - generic [ref=e78]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e79]:
            - generic [ref=e80]: $49.99
            - button "Add to cart" [ref=e81] [cursor=pointer]
      - article [ref=e82]:
        - link [ref=e83] [cursor=pointer]:
          - /url: ./inventory-item.html?id=tta-junior-tester-onesie
          - img [ref=e84]:
            - generic [ref=e88]: JR
        - generic [ref=e89]:
          - link "TTA Junior Tester Onesie" [ref=e91] [cursor=pointer]:
            - /url: ./inventory-item.html?id=tta-junior-tester-onesie
          - generic [ref=e92]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e93]:
            - generic [ref=e94]: $7.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
      - article [ref=e96]:
        - link [ref=e97] [cursor=pointer]:
          - /url: ./inventory-item.html?id=tta-practice-backpack
          - img [ref=e98]
        - generic [ref=e103]:
          - link "TTA Practice Backpack" [ref=e105] [cursor=pointer]:
            - /url: ./inventory-item.html?id=tta-practice-backpack
          - generic [ref=e106]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e107]:
            - generic [ref=e108]: $29.99
            - button "Add to cart" [ref=e109] [cursor=pointer]
  - contentinfo [ref=e111]:
    - generic [ref=e112]:
      - link "Twitter" [ref=e113] [cursor=pointer]:
        - /url: https://twitter.com/TheTestingAcad
        - img [ref=e114]
      - link "Facebook" [ref=e116] [cursor=pointer]:
        - /url: https://facebook.com/
        - img [ref=e117]
      - link "LinkedIn" [ref=e119] [cursor=pointer]:
        - /url: https://linkedin.com/
        - img [ref=e120]
    - generic [ref=e122]:
      - text: (c) 2026 TTACart - The Testing Academy. All Rights Reserved.
      - link "Terms of Service" [ref=e123] [cursor=pointer]:
        - /url: https://app.thetestingacademy.com/
      - text: "|"
      - link "Privacy Policy" [ref=e124] [cursor=pointer]:
        - /url: https://app.thetestingacademy.com/
```

# Test source

```ts
  1   | /**
  2   |  * This is Locator Utils file which contains utility functions for locators(WebElements).
  3   |  * FLEX - Flexible locator which can be either a string or a Playwright Locator object.
  4   |  *
  5   |  * Sections:
  6   |  *  1. Mouse Actions
  7   |  *  2. Keyboard Actions
  8   |  *  3. Input Methods
  9   |  *  4. Select Methods
  10  |  *  5. State & Getter Methods
  11  |  *  6. Wait Methods
  12  |  *  7. Scroll Methods
  13  |  *  8. Page Load Methods
  14  |  *  9. Validation / Assertion Methods
  15  |  */
  16  | 
  17  | import { expect, Locator, Page } from "@playwright/test";
  18  | import { createLogger, Logger } from "../utils/Logger";
  19  | 
  20  | export const DEFAULT_ACTION_TIMEOUT_MS = 15000;
  21  | export type FLEX = Locator | string;
  22  | 
  23  | 
  24  | export class LocatorUtil {
  25  | 
  26  |     private readonly page: Page;
  27  |     private readonly logger: Logger;
  28  | 
  29  |     constructor(page: Page, scope:string='ElementLocator') {
  30  |         this.page = page;
  31  |         this.logger = createLogger(scope);
  32  |        
  33  |     }
  34  | 
  35  |     private resolveLocator(locator: FLEX): Locator {
  36  |         return typeof locator === 'string' ? this.page.locator(locator) : locator;
  37  |     }
  38  | 
  39  |     // ─────────────────────────────────────────────
  40  |     // 1. Mouse Actions
  41  |     // ─────────────────────────────────────────────
  42  | 
  43  |     async click(locator: FLEX): Promise<void> {
  44  |         const element = this.resolveLocator(locator);
  45  |         this.logger.info(`Clicking on element`);
> 46  |         await element.click({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
      |                       ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  47  |     }
  48  | 
  49  |     async doubleClick(locator: FLEX): Promise<void> {
  50  |         const element = this.resolveLocator(locator);
  51  |         this.logger.info(`Double clicking on element`);
  52  |         await element.dblclick({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  53  |     }
  54  | 
  55  |     async rightClick(locator: FLEX): Promise<void> {
  56  |         const element = this.resolveLocator(locator);
  57  |         this.logger.info(`Right clicking on element`);
  58  |         await element.click({ button: 'right', timeout: DEFAULT_ACTION_TIMEOUT_MS });
  59  |     }
  60  | 
  61  |     async hover(locator: FLEX): Promise<void> {
  62  |         const element = this.resolveLocator(locator);
  63  |         this.logger.info(`Hovering over element`);
  64  |         await element.hover({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  65  |     }
  66  | 
  67  |     async dragAndDrop(source: FLEX, target: FLEX): Promise<void> {
  68  |         const sourceElement = this.resolveLocator(source);
  69  |         const targetElement = this.resolveLocator(target);
  70  |         this.logger.info(`Dragging element to target`);
  71  |         await sourceElement.dragTo(targetElement, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  72  |     }
  73  | 
  74  |     async forceClick(locator: FLEX): Promise<void> {
  75  |         const element = this.resolveLocator(locator);
  76  |         this.logger.info(`Force clicking on element`);
  77  |         await element.click({ force: true, timeout: DEFAULT_ACTION_TIMEOUT_MS });
  78  |     }
  79  | 
  80  |     async clickWithOffset(locator: FLEX, x: number, y: number): Promise<void> {
  81  |         const element = this.resolveLocator(locator);
  82  |         this.logger.info(`Clicking on element at offset (${x}, ${y})`);
  83  |         await element.click({ position: { x, y }, timeout: DEFAULT_ACTION_TIMEOUT_MS });
  84  |     }
  85  | 
  86  |     // ─────────────────────────────────────────────
  87  |     // 2. Keyboard Actions
  88  |     // ─────────────────────────────────────────────
  89  | 
  90  |     async pressKey(locator: FLEX, key: string): Promise<void> {
  91  |         const element = this.resolveLocator(locator);
  92  |         this.logger.info(`Pressing key: ${key}`);
  93  |         await element.press(key, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  94  |     }
  95  | 
  96  |     async pressMultipleKeysSequentially(locator: FLEX, keys: string[]): Promise<void> {
  97  |         const element = this.resolveLocator(locator);
  98  |         for (const key of keys) {
  99  |             this.logger.info(`Pressing key: ${key}`);
  100 |             await element.press(key);
  101 |         }
  102 |     }
  103 | 
  104 |     async typeText(locator: FLEX, text: string, delay = 50): Promise<void> {
  105 |         const element = this.resolveLocator(locator);
  106 |         this.logger.info(`Typing text character by character: ${text}`);
  107 |         await element.pressSequentially(text, { delay });
  108 |     }
  109 | 
  110 |     // ─────────────────────────────────────────────
  111 |     // 3. Input Methods
  112 |     // ─────────────────────────────────────────────
  113 | 
  114 |     async fill(locator: FLEX, value: string): Promise<void> {
  115 |         const element = this.resolveLocator(locator);
  116 |         this.logger.info(`Filling element with value: ${value}`);
  117 |         await element.fill(value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  118 |     }
  119 | 
  120 |     async clearAndFill(locator: FLEX, value: string): Promise<void> {
  121 |         const element = this.resolveLocator(locator);
  122 |         this.logger.info(`Clearing and filling element with value: ${value}`);
  123 |         await element.clear({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  124 |         await element.fill(value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  125 |     }
  126 | 
  127 |     async clear(locator: FLEX): Promise<void> {
  128 |         const element = this.resolveLocator(locator);
  129 |         this.logger.info(`Clearing element`);
  130 |         await element.clear({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  131 |     }
  132 | 
  133 |     async check(locator: FLEX): Promise<void> {
  134 |         const element = this.resolveLocator(locator);
  135 |         this.logger.info(`Checking element`);
  136 |         await element.check({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  137 |     }
  138 | 
  139 |     async uncheck(locator: FLEX): Promise<void> {
  140 |         const element = this.resolveLocator(locator);
  141 |         this.logger.info(`Unchecking element`);
  142 |         await element.uncheck({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  143 |     }
  144 | 
  145 |     async uploadFile(locator: FLEX, filePath: string): Promise<void> {
  146 |         const element = this.resolveLocator(locator);
```