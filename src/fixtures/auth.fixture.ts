import { test as pagesTest, expect } from "./pages.fixture";
import { env } from '../config/env';

type AuthFixtures = {
    authenticatedUserSession: void;
};

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

export { expect };
