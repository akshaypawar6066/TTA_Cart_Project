# TTA Playwright Advanced Automation Framework

> **Production-Grade Test Automation Framework** built with **Playwright** and **TypeScript** for the **TTACart e-commerce application**.

[![Playwright](https://img.shields.io/badge/Playwright-1.60-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![npm](https://img.shields.io/badge/npm-9+-CB3837?logo=npm&logoColor=white)](https://www.npmjs.com)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)]()

An enterprise-ready test automation framework featuring **Page Object Model (POM)**, **Fixture-based Architecture**, **Multi-layer Reporting**, **Winston Logging**, **Dynamic Test Data Management**, and **CI/CD Integration** with Jenkins & GitHub Actions.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Setup & Installation](#setup--installation)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Framework Components](#framework-components)
- [Writing Tests](#writing-tests)
- [Reporting](#reporting)
- [CI/CD Integration](#cicd-integration)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

---

## Overview

This framework automates the **TTACart e-commerce application** with a focus on:

- ✅ **Maintainability**: Clean POM pattern with inherited base functionality
- ✅ **Scalability**: Modular architecture for easy feature expansion
- ✅ **Reliability**: Built-in retry logic, proper wait strategies, comprehensive logging
- ✅ **Reporting**: Custom branded reports with multi-layer reporting
- ✅ **CI/CD Ready**: Seamless Jenkins and GitHub Actions integration
- ✅ **Developer Experience**: Fixture injection, clear test structure, instant feedback

### Application Under Test
- **Name**: TTACart (E-commerce shopping & checkout platform)
- **Base URL**: https://app.thetestingacademy.com/playwright/ttacart/
- **User Flow**: Login → Browse Inventory → Add to Cart → Checkout (2-step) → Order Complete

---

## Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Test Framework** | Playwright Test | 1.60.0 |
| **Language** | TypeScript | 6.0.3 |
| **Runtime** | Node.js | 18+ |
| **Package Manager** | npm | 9+ |
| **Logging** | Winston | 3.19.0 |
| **Data Generation** | Faker.js | 8.4.1 |
| **Reporting** | Custom TTA + Allure + Playwright HTML | Multi |
| **CI/CD** | Jenkins + GitHub Actions | - |
| **Module System** | CommonJS | Node16 resolution |
| **Code Quality** | ESLint + Prettier + TypeScript | - |

---

## Key Features

🎯 **Page Object Model (POM)**
- Centralized locator management
- Reusable page methods
- Clean, readable test code

🎯 **Base Class Architecture**
- Common initialization (Logger, LocatorUtil)
- Shared methods across all pages
- Consistent naming conventions

🎯 **LocatorUtil Wrapper**
- Standardized element interactions
- Built-in logging for every action
- Flexible locator handling (string or Locator object)
- Default timeouts and retry logic

🎯 **Winston Logging**
- Scoped child loggers per page/module
- Console + file output (logs/combined.log)
- Error-only logs (logs/error.log)
- Structured timestamped format

🎯 **Fixture-Based Testing**
- Page objects injected directly into tests
- Auto-login fixture for authenticated flows
- Clean test code without boilerplate

🎯 **Multi-Layer Reporting**
- **Custom TTA Reporter** (branded HTML with real-time updates)
- **Playwright HTML Report** (default reporter)
- **Allure Reporting** (metrics & history)
- **JUnit XML** (CI/CD integration)
- **JSON Output** (programmatic access)

🎯 **Data-Driven Testing**
- JSON-based test data management
- Faker.js for dynamic data generation
- Environment-based configuration

🎯 **CI/CD Ready**
- Jenkins Pipeline integration
- GitHub Actions workflows
- Artifact publishing
- Test result aggregation

---

## Project Structure

```
AdvancePlaywrightFramework_TTACart/
│
├── src/
│   ├── api/                          # API client layer (future)
│   │
│   ├── config/
│   │   ├── env.ts                    # Environment configuration loader
│   │   ├── dev.env                   # Dev environment variables
│   │   ├── qa.env                    # QA environment variables
│   │   ├── stg.env                   # Staging environment variables
│   │   └── prod.env                  # Production environment variables
│   │
│   ├── fixtures/
│   │   ├── pages.fixture.ts          # Page object injection fixture
│   │   └── auth.fixture.ts           # Auto-login fixture (extends pages)
│   │
│   ├── pages/                        # Page Object Model classes
│   │   ├── BasePage.ts               # Abstract base class (logger, locatorUtil)
│   │   ├── LoginPage.ts              # Login page actions
│   │   ├── InventoryPage.ts          # Product listing page
│   │   ├── CartPage.ts               # Shopping cart page
│   │   ├── CheckoutStepOnePage.ts    # Checkout personal info form
│   │   ├── CheckoutStepTwoPage.ts    # Checkout review page
│   │   └── CheckoutCompletePage.ts   # Order confirmation page
│   │
│   ├── testData/
│   │   └── LoginData.json            # Test credentials & expected values
│   │
│   ├── tests/                        # Test spec files (*.spec.ts)
│   │   ├── LoginPage.spec.ts         # Login feature tests
│   │   ├── InventoryPage.spec.ts     # Product management tests
│   │   ├── CartPage.spec.ts          # Cart functionality tests
│   │   ├── CheckoutStepOnePage.spec.ts  # Checkout step 1 tests
│   │   ├── CheckoutStepTwoPage.spec.ts  # Checkout step 2 tests
│   │   ├── CheckoutCompletePage.spec.ts # Order completion tests
│   │   └── E2ETest.spec.ts           # Full end-to-end flow
│   │
│   └── utils/
│       ├── Logger.ts                 # Winston logger configuration
│       ├── LocatorUtil.ts            # Element interaction wrapper (FLEX type)
│       ├── CustomReporter.ts         # Custom TTA HTML reporter
│       └── DataGenerator.ts          # Faker-based test data factory
│
├── logs/                             # Winston log output (gitignored)
│   ├── combined.log                  # All logs
│   └── error.log                     # Error logs only
│
├── .github/
│   ├── workflows/
│   │   └── playwright.yml            # GitHub Actions CI workflow
│   └── copilot-instructions.md       # AI assistant guidelines
│
├── .augment/                         # Augment Code rules
├── .vscode/                          # VS Code settings
├── allure-results/                   # Allure report data (gitignored)
├── allure-report/                    # Allure HTML report (gitignored)
├── playwright-report/                # Playwright HTML report (gitignored)
├── tta-report/                       # Custom TTA HTML report (gitignored)
├── test-results/                     # Test artifacts (gitignored)
│
├── rules/                            # Project rules & conventions
│   ├── README.md                     # Rules directory info
│   └── test-quality-checks.md        # Quality check guidelines
│
├── playwright.config.ts              # Playwright test configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies & npm scripts
├── Jenkinsfile                       # Jenkins pipeline definition
├── Dockerfile                        # Docker container setup
├── .env                              # Environment variables (gitignored)
├── .gitignore                        # Git ignore rules
└── README.md                         # This file
```

---

## Architecture

### 1. Page Object Model (POM)

Each page encapsulates:
- **Locators**: Private Locator objects for page elements
- **Methods**: Public async methods for page interactions
- **Inheritance**: Extends `BasePage` for shared functionality

```typescript
export class LoginPage extends BasePage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        super(page, "LoginPage");
        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }

    async loginToApplication(username: string, password: string): Promise<void> {
        await this.locatorUtil.fill(this.usernameInput, username, 'Username');
        await this.locatorUtil.fill(this.passwordInput, password, 'Password');
        await this.locatorUtil.click(this.loginButton, 'Login Button');
        await this.locatorUtil.waitForPageLoad();
    }
}
```

### 2. Base Class Architecture

`BasePage.ts` initializes:
- **Logger**: Scoped Winston logger for the page class
- **LocatorUtil**: Wrapper for all element interactions
- **Page Object**: Playwright Page instance

```typescript
export abstract class BasePage {
    protected readonly page: Page;
    protected readonly locatorUtil: LocatorUtil;
    protected readonly logger: Logger;

    constructor(page: Page, scope: string) {
        this.page = page;
        this.logger = createLogger(scope);
        this.locatorUtil = new LocatorUtil(page, this.logger);
    }

    protected async navigateToTheApplication(url: string): Promise<void> {
        this.logger.info(`Navigating to: ${url}`);
        await this.page.goto(url);
        await this.locatorUtil.waitForPageLoad();
    }
}
```

### 3. LocatorUtil Wrapper (FLEX Type)

Provides a standardized API for element interactions:
- **Mouse Actions**: click, doubleClick, rightClick, hover, dragAndDrop
- **Keyboard Actions**: pressKey, typeText
- **Input Methods**: fill, clear, check, uncheck
- **Select Operations**: selectByText, selectByValue, selectByIndex
- **State Checks**: isVisible, isEnabled, isChecked, isHidden
- **Wait Methods**: waitForVisible, waitForHidden, waitForPageLoad, waitForNetworkIdle
- **Assertions**: expectVisible, expectText, expectValue, expectCount, etc.

Every method includes:
- Automatic logging
- Default timeout handling (15000ms)
- Element name annotation for clarity

```typescript
export type FLEX = Locator | string;

export class LocatorUtil {
    async click(locator: FLEX, elementName?: string): Promise<void> {
        const element = this.resolveLocator(locator);
        this.logger.info(`Clicking on element${elementName ? ': [' + elementName + ']' : ''}`);
        await element.click({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
    }

    private resolveLocator(locator: FLEX): Locator {
        return typeof locator === 'string' ? this.page.locator(locator) : locator;
    }
}
```

### 4. Fixture Injection

Tests receive page objects via fixture injection:

```typescript
// pages.fixture.ts
export const test = base.extend<PageObjectFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    // ... more fixtures
});

// tests use fixtures directly
test('Login test', async ({ loginPage, inventoryPage }) => {
    await loginPage.navigateToApplication();
    await loginPage.loginToApplication('standard_user', 'tta_secret');
    // ... 
});
```

Auth fixture extends page fixtures and auto-logs in:

```typescript
// auth.fixture.ts
export const test = pagesTest.extend<AuthFixtures>({
    authenticatedUserSession: [
        async ({ loginPage }, use) => {
            await loginPage.navigateToApplication();
            await loginPage.loginToApplication(env.username, env.password);
            await loginPage.verifyLoginSuccessfullyWithValidCredentials();
            await use();
        },
        { auto: true }
    ]
});
```

---

## Setup & Installation

### Prerequisites
- **Node.js** 18+ 
- **npm** 9+
- **Git**

### Step 1: Clone Repository
```bash
git clone https://github.com/akshaypawar6066/TTA_Cart_Project.git
cd AdvancePlaywrightFramework_TTACart
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Install Playwright Browsers
```bash
npx playwright install --with-deps
```

### Step 4: Configure Environment
Create environment files in `src/config/`:

**src/config/qa.env**
```bash
APP_URL=https://app.thetestingacademy.com/playwright/ttacart/
APP_USERNAME=standard_user
APP_PASSWORD=tta_secret
```

**src/config/.env** (for local development)
```bash
TEST_ENV=qa
LOG_LEVEL=info
```

### Step 5: Verify Setup
```bash
npm run typecheck
npm run lint
npm test -- --headed --max-workers=1
```

---

## Running Tests

### All Tests
```bash
npm test
```

### By Priority Tag
```bash
npm run smoke       # @smoke tests
npm run regression  # @regression tests
npm run sanity      # @sanity tests
```

### By Browser
```bash
npm run chrome      # Chromium only
npm run firefox     # Firefox only
npm run webkit      # WebKit (Safari) only
```

### Specific Spec File
```bash
npx playwright test src/tests/LoginPage.spec.ts
npx playwright test src/tests/E2ETest.spec.ts
```

### With Browser Visible
```bash
npm run test:headed
```

### Debug Mode
```bash
npx playwright test --debug
```

### UI Mode (Interactive)
```bash
npx playwright test --ui
```

### With Environment Override
```bash
TEST_ENV=stg npm test
TEST_ENV=prod npm test
```

---

## Configuration

### Environment Configuration (src/config/)

Multiple environment files for different deployment targets:

| Environment | File | Base URL |
|-------------|------|----------|
| Development | `dev.env` | http://localhost:3000 |
| QA | `qa.env` | https://app.thetestingacademy.com/playwright/ttacart/ |
| Staging | `stg.env` | https://stage.thetestingacademy.com/playwright/ttacart/ |
| Production | `prod.env` | https://app.thetestingacademy.com/playwright/ttacart/ |

### Playwright Configuration (playwright.config.ts)

Key settings:
```typescript
{
    testDir: './src/tests',
    fullyParallel: false,
    retries: isCI ? 2 : 0,
    workers: 2,
    reporter: [
        ['./src/utils/CustomReporter.ts'],    // Custom TTA reporter
        ['html', { outputFolder: 'playwright-report' }],
        ['json', { outputFile: 'test-results/results.json' }],
        ['junit', { outputFile: 'test-results/results.xml' }],
        ['allure-playwright', { resultsDir: 'allure-results' }],
        ['list']
    ],
    use: {
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        actionTimeout: 15000,
        navigationTimeout: 30000
    }
}
```

### TypeScript Configuration (tsconfig.json)

```typescript
{
    "compilerOptions": {
        "target": "ES2022",
        "module": "CommonJS",
        "strict": true,
        "moduleResolution": "Node16",
        "resolveJsonModule": true
    }
}
```

---

## Framework Components

### Logger (src/utils/Logger.ts)

Winston-based logging with scoped child loggers:

```typescript
import { createLogger } from '@utils/Logger';

// In page classes - logger is auto-created in BasePage
this.logger.info('Action started');
this.logger.warn('Potential issue');
this.logger.error('Error occurred', error);
this.logger.debug('Debug info', data);
```

**Output**: 
- Console: Colorized, timestamped
- `logs/combined.log`: All logs
- `logs/error.log`: Error logs only

### DataGenerator (src/utils/DataGenerator.ts)

Faker-based test data factory:

```typescript
import { DataGenerator } from '@utils/DataGenerator';

const firstName = DataGenerator.getFirstName();
const email = DataGenerator.getEmail();
const zipCode = DataGenerator.getZipCode();
const password = DataGenerator.getPassword();
```

### CustomReporter (src/utils/CustomReporter.ts)

Generates branded HTML reports with:
- Real-time test progress
- Per-test & per-step details
- Embedded screenshots & videos
- Test history tracking
- Environment metadata

Output: `tta-report/index.html`

---

## Writing Tests

### Test Structure

Follow the Arrange-Act-Assert pattern with clear steps:

```typescript
import { test } from "@fixtures/pages.fixture";
import { faker } from "@faker-js/faker";
import { env } from "../config/env";

test.describe("Login Functionality Tests", () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToApplication();
    });

    test("Verify user can login with valid credentials @p0 @smoke", async ({ loginPage }) => {
        // Arrange
        await loginPage.verifyLoginPageIsDisplayed();
        
        // Act
        await loginPage.loginToApplication(env.username, env.password);
        
        // Assert
        await loginPage.verifyLoginSuccessfullyWithValidCredentials();
    });

    test("Verify error message on invalid credentials @p1", async ({ loginPage }) => {
        await loginPage.loginToApplication("invalid", "wrong");
        await loginPage.verifyErrorMessage("Username and password do not match");
    });
});
```

### End-to-End Example

```typescript
test("Verify user can complete checkout successfully @e2e", async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutStepOnePage,
    checkoutStepTwoPage,
    checkoutCompletePage
}) => {
    // Login
    await loginPage.navigateToApplication();
    await loginPage.loginToApplication(env.username, env.password);
    await loginPage.verifyLoginSuccessfullyWithValidCredentials();

    // Browse & Add to Cart
    await inventoryPage.verifyInventoryPageIsDisplayed();
    await inventoryPage.addProductToCart("tta-practice-backpack");
    await inventoryPage.openCart();

    // Cart
    await cartPage.verifyUserIsLandedOnCartPageOrNot();
    await cartPage.clickOnCheckoutButton();

    // Checkout Step 1
    await checkoutStepOnePage.verifyCheckoutStepOnePageIsDisplayed();
    await checkoutStepOnePage.fillCheckoutInformation(
        faker.person.firstName(),
        faker.person.lastName(),
        faker.location.zipCode()
    );
    await checkoutStepOnePage.clickOnContinueButton();

    // Checkout Step 2
    await checkoutStepTwoPage.verifyCheckoutStepTwoPageIsDisplayed();
    await checkoutStepTwoPage.verifyFinishButtonIsEnabledOnCheckOutPageTwo();
    await checkoutStepTwoPage.clickOnFinishButton();

    // Order Complete
    await checkoutCompletePage.verifyCheckoutCompletePageIsDisplayed();
    await checkoutCompletePage.verifyStatusOfTheOrderIsCompletedOrNot();
});
```

---

## Reporting

### Multi-Layer Reporting Strategy

| Reporter | Output | Purpose |
|----------|--------|---------|
| **Custom TTA** | `tta-report/index.html` | Branded, real-time dashboard |
| **Playwright** | `playwright-report/` | Detailed test traces & network logs |
| **Allure** | `allure-report/` | Test metrics & trend analysis |
| **JUnit XML** | `test-results/results.xml` | CI/CD integration |
| **JSON** | `test-results/results.json` | Programmatic analysis |

### Viewing Reports

```bash
# Custom TTA Report
open tta-report/index.html

# Playwright HTML
npm run report

# Allure Report
npm run allure:generate
npm run allure:open

# Allure Live Server
npm run allure:serve
```

---

## CI/CD Integration

### Jenkins Pipeline

**Jenkinsfile** - Automated test execution stages:

1. **Checkout**: Clone from GitHub
2. **Environment**: Display Node/npm versions
3. **Install Dependencies**: `npm ci`
4. **Run Tests**: `npm run ci:all`
5. **Publish Results**: JUnit reports to dashboard
6. **Archive Artifacts**: Reports for download

#### Jenkins Parameters
- **TEST_ENV**: Environment (qa, stg, dev, prod)
- **BRANCH_NAME**: Git branch (default: master)

### GitHub Actions Workflow

**`.github/workflows/playwright.yml`**

Triggers on:
- Push to main/master
- Pull requests to main/master

Steps:
1. Checkout code
2. Setup Node.js (LTS)
3. Install dependencies
4. Install Playwright browsers
5. Run tests
6. Upload artifacts (30-day retention)

---

## Best Practices

### Page Object Design
```typescript
// ✅ Good
async addProductToCart(productId: string): Promise<void> {
    await this.locatorUtil.click(
        this.getAddToCartButton(productId),
        'Add to Cart Button'
    );
    this.logger.info(`Added product ${productId} to cart`);
}

// ❌ Avoid
async click_button(id) {
    this.page.click(`button[data-test="${id}"]`);
}
```

### Test Structure
```typescript
// ✅ Good - Clear arrangement
test('User can checkout successfully', async ({ page, loginPage, cartPage }) => {
    // Arrange
    await loginPage.navigateToApplication();
    
    // Act
    await loginPage.loginToApplication(user, pass);
    
    // Assert
    await cartPage.verifyLoggedIn();
});
```

### Locator Selection
```typescript
// ✅ Best - Use data-testid
private readonly deleteButton = this.page.locator('[data-testid="delete"]');

// ✅ Good - Use XPath for complex elements
private readonly title = this.page.locator('//h1[@class="title"]');

// ❌ Avoid - Too generic
private readonly button = this.page.locator('button');
```

### Waits & Timeouts
```typescript
// ✅ Good
async clickCheckout(): Promise<void> {
    await this.locatorUtil.waitForVisible(this.checkoutButton);
    await this.locatorUtil.click(this.checkoutButton, 'Checkout');
    await this.locatorUtil.waitForPageLoad();
}

// ❌ Avoid
await page.waitForTimeout(2000);
await page.click('button');
```

### Code Quality Checks
```bash
# Before committing
npm run lint:fix       # Fix linting issues
npm run format         # Format code
npm run typecheck      # Check types
npm test -- --max-workers=1  # Run tests
```

---

## Troubleshooting

### Tests Timeout
**Problem**: Tests hang or timeout
**Solution**:
```bash
# Check LocatorUtil.ts DEFAULT_ACTION_TIMEOUT_MS
# Increase if slow environment: 15000ms → 30000ms
# Check network logs in Playwright HTML report
```

### Flaky Tests
**Problem**: Tests pass sometimes, fail other times
**Solution**:
```typescript
// ❌ Avoid hard waits
await page.waitForTimeout(3000);

// ✅ Use conditions instead
await locatorUtil.waitForVisible(element);
await locatorUtil.waitForPageLoad();
```

### Report Not Generated
**Problem**: `tta-report/` folder empty
**Solution**:
```bash
# 1. Verify CustomReporter in playwright.config.ts
# 2. Check test execution completed
# 3. Verify write permissions: chmod 755 tta-report/
```

### Playwright Browsers Not Found
```bash
# Reinstall browsers
npx playwright install --with-deps

# Specific browser
npx playwright install chromium --with-deps
```

### Environment Variable Issues
```bash
# Verify .env file
ls -la src/config/*.env

# Override environment
TEST_ENV=stg npm test
APP_URL=http://localhost:3000 npm test
```

---

## npm Scripts Reference

```json
{
  "test": "npx playwright test",
  "e2e": "npx playwright test src/tests/E2ETest.spec.ts",
  "install:browsers": "npx playwright install",
  "ci:all": "npm run install:browsers && npm run test",
  "ci:e2e": "npm run install:browsers && npm run e2e",
  "test:headed": "npx playwright test --headed",
  "smoke": "npx playwright test --grep @smoke",
  "regression": "npx playwright test --grep @regression",
  "sanity": "npx playwright test --grep @sanity",
  "chrome": "npx playwright test --project=chromium",
  "firefox": "npx playwright test --project=firefox",
  "webkit": "npx playwright test --project=webkit",
  "report": "npx playwright show-report",
  "allure:generate": "allure generate allure-results --clean -o allure-report",
  "allure:open": "allure open allure-report",
  "allure:serve": "allure serve allure-results",
  "lint": "npx eslint . --ext .ts,.tsx",
  "lint:fix": "npx eslint . --ext .ts,.tsx --fix",
  "typecheck": "npx tsc --noEmit",
  "format": "npx prettier --write \"**/*.{ts,tsx,js,json,md}\"",
  "format:check": "npx prettier --check \"**/*.{ts,tsx,js,json,md}\"",
  "build": "npx tsc",
  "clean": "npx rimraf playwright-report test-results allure-results allure-report"
}
```

---

## Test Coverage

| Module | Tests | Status |
|--------|-------|--------|
| Login | 3 | ✅ |
| Inventory | 3 | ✅ |
| Cart | 5 | ✅ |
| Checkout Step 1 | 3 | ✅ |
| Checkout Step 2 | 3 | ✅ |
| Checkout Complete | 3 | ✅ |
| End-to-End Flow | 1 | ✅ |
| **Total** | **21** | **✅** |

---

## Contributing

1. Create feature branch: `git checkout -b feature/test-xyz`
2. Write tests and page objects
3. Run quality checks: `npm run lint && npm run typecheck`
4. Commit: `git commit -m "feat: add tests for xyz"`
5. Push and create PR

---

## Resources

- 📖 [Playwright Documentation](https://playwright.dev/)
- 🎓 [The Testing Academy](https://thetestingacademy.com/)
- 📝 [Winston Logger](https://github.com/winstonjs/winston)
- 🎲 [Faker.js](https://fakerjs.dev/)
- 📊 [Allure Framework](https://docs.qameta.io/allure/)

---

## Support

- **GitHub Issues**: Report bugs or request features
- **Website**: https://thetestingacademy.com/
- **Email**: contact@thetestingacademy.com

---

## License

ISC © Pramod Dutta / The Testing Academy

---

## Author

**Built with ❤️ by [The Testing Academy](https://thetestingacademy.com/)**

Framework created in 2026 | Maintained by QA Automation Team

---

<div align="center">

### 🎭 Happy Testing!

If this framework helped you, please consider giving it a ⭐

</div>
