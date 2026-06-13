import { test } from "../fixtures/pages.fixture";

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
            await loginPage.loginToApplication("standard_user", "tta_secret");
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
            await loginPage.loginToApplication("invalid_user", "wrong_password");
        });
        await test.step("Verify error message is displayed", async () => {
            await loginPage.verifyErrorMessage("Username and password do not match");
        });
    });


});
