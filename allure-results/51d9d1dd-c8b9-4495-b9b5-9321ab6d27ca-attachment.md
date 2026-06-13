# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: E2ETest.spec.ts >> End to End Test >> Verify user can complete the checkout process end to end successfully
- Location: src\tests\E2ETest.spec.ts:7:9

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://stage.thetestingacademy.com/playwright/ttacart/
Call log:
  - navigating to "https://stage.thetestingacademy.com/playwright/ttacart/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: stage.thetestingacademy.com
      - text: ’s server IP address could not be found.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy, firewall, and DNS configuration" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
        - listitem [ref=e16]:
          - link "Running Windows Network Diagnostics" [ref=e17] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e18]: ERR_NAME_NOT_RESOLVED
  - generic [ref=e19]:
    - button "Reload" [ref=e21] [cursor=pointer]
    - button "Details" [ref=e22] [cursor=pointer]
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
     |                         ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://stage.thetestingacademy.com/playwright/ttacart/
  22 |         await this.locatorUtil.waitForPageLoad();
  23 | 
  24 |     }
  25 | }
  26 | 
  27 | 
  28 | 
```