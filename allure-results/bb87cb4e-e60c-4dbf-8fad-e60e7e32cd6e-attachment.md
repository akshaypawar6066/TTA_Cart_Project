# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckoutCompletePage.spec.ts >> Checkout Complete Page Tests >> Verify order status is completed or not on checkout complete page
- Location: src\tests\CheckoutCompletePage.spec.ts:22:9

# Error details

```
Error: page.goto: net::ERR_QUIC_PROTOCOL_ERROR at https://app.thetestingacademy.com/playwright/ttacart/
Call log:
  - navigating to "https://app.thetestingacademy.com/playwright/ttacart/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - heading "This site can’t be reached" [level=1] [ref=e7]
  - paragraph [ref=e8]:
    - text: The webpage at
    - strong [ref=e9]: https://app.thetestingacademy.com/playwright/ttacart/
    - text: might be temporarily down or it may have moved permanently to a new web address.
  - generic [ref=e10]: ERR_QUIC_PROTOCOL_ERROR
```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | import { LocatorUtil } from "../utils/LocatorUtil";
  3  | import { createLogger, Logger } from "../utils/Logger";
  4  | 
  5  | 
  6  | export abstract class BasePage {
  7  | 
  8  |     protected readonly page: Page;
  9  |     protected readonly locatorUtil: LocatorUtil;
  10 |     protected readonly logger: Logger;
  11 | 
  12 |     constructor(page: Page, scope: string) {
  13 |         this.page = page;
  14 |         this.logger = createLogger(scope);
  15 |         this.locatorUtil = new LocatorUtil(page, this.logger);
  16 | 
  17 |     }
  18 | 
  19 |     protected async navigateToTheApplication(url: string): Promise<void> {
  20 |         this.logger.info(`Navigating to the application: ${url}`);
> 21 |         await this.page.goto(url);
     |                         ^ Error: page.goto: net::ERR_QUIC_PROTOCOL_ERROR at https://app.thetestingacademy.com/playwright/ttacart/
  22 |         await this.locatorUtil.waitForPageLoad();
  23 | 
  24 |     }
  25 | }
  26 | 
  27 | 
  28 | 
```