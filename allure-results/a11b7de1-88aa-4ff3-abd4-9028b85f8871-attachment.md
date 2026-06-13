# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckoutCompletePage.spec.ts >> Checkout Complete Page Tests >> Verify user is landed on checkout complete page after clicking on finish
- Location: src\tests\CheckoutCompletePage.spec.ts:32:9

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('[data-test="firstName"]')
    - locator resolved to <input type="text" id="first-name" name="firstName" data-test="firstName" placeholder="First Name" autocomplete="given-name"/>
    - fill("Jordyn")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Test source

```ts
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
  29  |     constructor(page: Page, logger?: Logger) {
  30  |         this.page = page;
  31  |         this.logger = logger ?? createLogger('LocatorUtil');
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
  43  |     async click(locator: FLEX, elementName?: string): Promise<void> {
  44  |         const element = this.resolveLocator(locator);
  45  |         this.logger.info(`Clicking on element${elementName ? ': [' + elementName + ']' : ''}`);
  46  |         await element.click({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  47  |     }
  48  | 
  49  |     async doubleClick(locator: FLEX, elementName?: string): Promise<void> {
  50  |         const element = this.resolveLocator(locator);
  51  |         this.logger.info(`Double clicking on element${elementName ? ': [' + elementName + ']' : ''}`);
  52  |         await element.dblclick({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  53  |     }
  54  | 
  55  |     async rightClick(locator: FLEX, elementName?: string): Promise<void> {
  56  |         const element = this.resolveLocator(locator);
  57  |         this.logger.info(`Right clicking on element${elementName ? ': [' + elementName + ']' : ''}`);
  58  |         await element.click({ button: 'right', timeout: DEFAULT_ACTION_TIMEOUT_MS });
  59  |     }
  60  | 
  61  |     async hover(locator: FLEX, elementName?: string): Promise<void> {
  62  |         const element = this.resolveLocator(locator);
  63  |         this.logger.info(`Hovering over element${elementName ? ': [' + elementName + ']' : ''}`);
  64  |         await element.hover({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  65  |     }
  66  | 
  67  |     async dragAndDrop(source: FLEX, target: FLEX, elementName?: string): Promise<void> {
  68  |         const sourceElement = this.resolveLocator(source);
  69  |         const targetElement = this.resolveLocator(target);
  70  |         this.logger.info(`Dragging element${elementName ? ': [' + elementName + ']' : ''} to target`);
  71  |         await sourceElement.dragTo(targetElement, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  72  |     }
  73  | 
  74  |     async forceClick(locator: FLEX, elementName?: string): Promise<void> {
  75  |         const element = this.resolveLocator(locator);
  76  |         this.logger.info(`Force clicking on element${elementName ? ': [' + elementName + ']' : ''}`);
  77  |         await element.click({ force: true, timeout: DEFAULT_ACTION_TIMEOUT_MS });
  78  |     }
  79  | 
  80  |     async clickWithOffset(locator: FLEX, x: number, y: number, elementName?: string): Promise<void> {
  81  |         const element = this.resolveLocator(locator);
  82  |         this.logger.info(`Clicking on element${elementName ? ': [' + elementName + ']' : ''} at offset (${x}, ${y})`);
  83  |         await element.click({ position: { x, y }, timeout: DEFAULT_ACTION_TIMEOUT_MS });
  84  |     }
  85  | 
  86  |     // ─────────────────────────────────────────────
  87  |     // 2. Keyboard Actions
  88  |     // ─────────────────────────────────────────────
  89  | 
  90  |     async pressKey(locator: FLEX, key: string, elementName?: string): Promise<void> {
  91  |         const element = this.resolveLocator(locator);
  92  |         this.logger.info(`Pressing key: ${key}${elementName ? ' on element: [' + elementName + ']' : ''}`);
  93  |         await element.press(key, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  94  |     }
  95  | 
  96  |     async pressMultipleKeysSequentially(locator: FLEX, keys: string[], elementName?: string): Promise<void> {
  97  |         const element = this.resolveLocator(locator);
  98  |         for (const key of keys) {
  99  |             this.logger.info(`Pressing key: ${key}${elementName ? ' on element: [' + elementName + ']' : ''}`);
  100 |             await element.press(key);
  101 |         }
  102 |     }
  103 | 
  104 |     async typeText(locator: FLEX, text: string, delay = 50, elementName?: string): Promise<void> {
  105 |         const element = this.resolveLocator(locator);
  106 |         this.logger.info(`Typing text character by character: ${text}${elementName ? ' on element: [' + elementName + ']' : ''}`);
  107 |         await element.pressSequentially(text, { delay });
  108 |     }
  109 | 
  110 |     // ─────────────────────────────────────────────
  111 |     // 3. Input Methods
  112 |     // ─────────────────────────────────────────────
  113 | 
  114 |     async fill(locator: FLEX, value: string, elementName?: string): Promise<void> {
  115 |         const element = this.resolveLocator(locator);
  116 |         this.logger.info(`Filling element${elementName ? ': [' + elementName + ']' : ''} with value: ${value}`);
> 117 |         await element.fill(value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
      |                       ^ Error: locator.fill: Test ended.
  118 |     }
  119 | 
  120 |     async clearAndFill(locator: FLEX, value: string, elementName?: string): Promise<void> {
  121 |         const element = this.resolveLocator(locator);
  122 |         this.logger.info(`Clearing and filling element${elementName ? ': [' + elementName + ']' : ''} with value: ${value}`);
  123 |         await element.clear({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  124 |         await element.fill(value, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  125 |     }
  126 | 
  127 |     async clear(locator: FLEX, elementName?: string): Promise<void> {
  128 |         const element = this.resolveLocator(locator);
  129 |         this.logger.info(`Clearing element${elementName ? ': [' + elementName + ']' : ''}`);
  130 |         await element.clear({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  131 |     }
  132 | 
  133 |     async check(locator: FLEX, elementName?: string): Promise<void> {
  134 |         const element = this.resolveLocator(locator);
  135 |         this.logger.info(`Checking element${elementName ? ': [' + elementName + ']' : ''}`);
  136 |         await element.check({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  137 |     }
  138 | 
  139 |     async uncheck(locator: FLEX, elementName?: string): Promise<void> {
  140 |         const element = this.resolveLocator(locator);
  141 |         this.logger.info(`Unchecking element${elementName ? ': [' + elementName + ']' : ''}`);
  142 |         await element.uncheck({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  143 |     }
  144 | 
  145 |     async uploadFile(locator: FLEX, filePath: string, elementName?: string): Promise<void> {
  146 |         const element = this.resolveLocator(locator);
  147 |         this.logger.info(`Uploading file: ${filePath}${elementName ? ' on element: [' + elementName + ']' : ''}`);
  148 |         await element.setInputFiles(filePath);
  149 |     }
  150 | 
  151 |     async uploadMultipleFiles(locator: FLEX, filePaths: string[], elementName?: string): Promise<void> {
  152 |         const element = this.resolveLocator(locator);
  153 |         this.logger.info(`Uploading multiple files: ${filePaths.join(', ')}${elementName ? ' on element: [' + elementName + ']' : ''}`);
  154 |         await element.setInputFiles(filePaths);
  155 |     }
  156 | 
  157 |     // ─────────────────────────────────────────────
  158 |     // 4. Select Methods
  159 |     // ─────────────────────────────────────────────
  160 | 
  161 |     async selectByText(locator: FLEX, text: string, elementName?: string): Promise<void> {
  162 |         const element = this.resolveLocator(locator);
  163 |         this.logger.info(`Selecting option by visible text: ${text}${elementName ? ' on element: [' + elementName + ']' : ''}`);
  164 |         await element.selectOption({ label: text }, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  165 |     }
  166 | 
  167 |     async selectByValue(locator: FLEX, value: string, elementName?: string): Promise<void> {
  168 |         const element = this.resolveLocator(locator);
  169 |         this.logger.info(`Selecting option by value: ${value}${elementName ? ' on element: [' + elementName + ']' : ''}`);
  170 |         await element.selectOption({ value:value }, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  171 |     }
  172 | 
  173 |     async selectByIndex(locator: FLEX, index: number, elementName?: string): Promise<void> {
  174 |         const element = this.resolveLocator(locator);
  175 |         this.logger.info(`Selecting option by index: ${index}${elementName ? ' on element: [' + elementName + ']' : ''}`);
  176 |         await element.selectOption({index: index }, { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  177 |     }
  178 | 
  179 |     async selectMultipleByText(locator: FLEX, texts: string[], elementName?: string): Promise<void> {
  180 |         const element = this.resolveLocator(locator);
  181 |         this.logger.info(`Selecting multiple options by text: ${texts.join(', ')}${elementName ? ' on element: [' + elementName + ']' : ''}`);
  182 |         await element.selectOption(texts.map(label => ({ label })), { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  183 |     }
  184 | 
  185 |     async selectMultipleByValue(locator: FLEX, values: string[], elementName?: string): Promise<void> {
  186 |         const element = this.resolveLocator(locator);
  187 |         this.logger.info(`Selecting multiple options by value: ${values.join(', ')}${elementName ? ' on element: [' + elementName + ']' : ''}`);
  188 |         await element.selectOption(values.map(value => ({ value })), { timeout: DEFAULT_ACTION_TIMEOUT_MS });
  189 |     }
  190 | 
  191 |     async getSelectedOption(locator: FLEX, elementName?: string): Promise<string> {
  192 |         const element = this.resolveLocator(locator);
  193 |         this.logger.info(`Getting selected option text${elementName ? ' from element: [' + elementName + ']' : ''}`);
  194 |         return await element.evaluate((el: HTMLSelectElement) =>
  195 |             el.options[el.selectedIndex]?.text ?? ''
  196 |         );
  197 |     }
  198 | 
  199 |     async getAllOptions(locator: FLEX, elementName?: string): Promise<string[]> {
  200 |         const element = this.resolveLocator(locator);
  201 |         this.logger.info(`Getting all dropdown options${elementName ? ' from element: [' + elementName + ']' : ''}`);
  202 |         return await element.evaluate((el: HTMLSelectElement) =>
  203 |             Array.from(el.options).map(opt => opt.text)
  204 |         );
  205 |     }
  206 | 
  207 |     // ─────────────────────────────────────────────
  208 |     // 5. WebElement Information Methods.
  209 |     // ─────────────────────────────────────────────
  210 | 
  211 |     async getText(locator: FLEX, elementName?: string): Promise<string> {
  212 |         const element = this.resolveLocator(locator);
  213 |         this.logger.info(`Getting inner text from element${elementName ? ': [' + elementName + ']' : ''}`);
  214 |         return await element.innerText({ timeout: DEFAULT_ACTION_TIMEOUT_MS });
  215 |     }
  216 | 
  217 |     async getTextContent(locator: FLEX, elementName?: string): Promise<string | null> {
```