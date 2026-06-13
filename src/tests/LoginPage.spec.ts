import { test } from "../fixtures/pages.fixture";
import LoginData from '../testData/LoginData.json'
import { env } from '../config/env';

test.describe("Login Functionality Tests", () => {

    test.beforeEach(async ({ loginPage }) => {
        await test.step("Navigate to the application", async () => {
            await loginPage.navigateToApplication();
        });
    });

    test("Verify user can login with valid credentials", async ({ loginPage }) => {
        await test.step("Verify login page is displayed", async () => {
            await loginPage.verifyLoginPageIsDisplayed();
        });
        await test.step("Enter valid username and password", async () => {
            await loginPage.loginToApplication(env.username, env.password);
        });
        await test.step("Verify user is redirected to inventory page", async () => {
            await loginPage.verifyLoginSuccessfullyWithValidCredentials();
        });
    });

    test("Verify error message on invalid credentials", async ({ loginPage }) => {
        await test.step("Verify login page is displayed", async () => {
            await loginPage.verifyLoginPageIsDisplayed();
        });
        await test.step("Enter invalid username and password", async () => {
            await loginPage.loginToApplication(LoginData.invalidUser.username, LoginData.invalidUser.password);
        });
        await test.step("Verify error message is displayed", async () => {
            await loginPage.verifyErrorMessage(LoginData.invalidUser.errorMessage);
        });
    });


});
