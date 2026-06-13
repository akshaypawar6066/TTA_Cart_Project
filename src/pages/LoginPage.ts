import { expect, Locator, Page } from "@playwright/test";
import {BasePage} from './BasePage';
import { env } from '../config/env';
import LoginData from '../testData/LoginData.json'

class LoginPage extends BasePage {

    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;
    private readonly loginCredentialsHint: Locator;

    constructor(page: Page) {
        super(page, "LoginPage");
        this.usernameInput = page.locator("#user-name");
        this.passwordInput =page.locator(`//input[@id='password']`)
        this.loginButton = page.locator("#login-button");
        this.errorMessage =page.locator("#login-error")
        this.loginCredentialsHint = page.locator('[data-test="login-credentials"]');
    }

    async navigateToApplication(): Promise<void>  {
        await this.navigateToTheApplication(env.baseURL);
    }

    async loginToApplication(username: string, password: string): Promise<void> {
        await this.locatorUtil.fill(this.usernameInput, username, 'Username Input');
        await this.locatorUtil.fill(this.passwordInput, password, 'Password Input');
        await this.locatorUtil.click(this.loginButton, 'Login Button'); 
        await this.locatorUtil.waitForPageLoad();
    }

    async verifyLoginSuccessfullyWithValidCredentials(): Promise<void>  {
           await this.locatorUtil.expectPageURL(LoginData.validUser.expectedUrl);
    }

    async verifyErrorMessage(message: string): Promise<void> {
        await this.locatorUtil.expectContainsText(this.errorMessage, message, 'Error Message');
    }

    async verifyLoginPageIsDisplayed(): Promise<void> {
        await this.locatorUtil.expectVisible(this.loginButton, 'Login Button');
        await this.locatorUtil.expectPageTitle('TTACart - Login');
    }

}

export { LoginPage }