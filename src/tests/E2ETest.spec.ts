import { test } from "../fixtures/pages.fixture";
import { faker } from "@faker-js/faker";
import {env} from "../config/EnvConfig";

test.describe("End to End Test", () => {

    test("Verify user can complete the checkout process end to end successfully", async ({ page, loginPage, inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {
             
        await loginPage.navigateToApplication();
        await loginPage.loginToApplication(env.username, env.password);
        await loginPage.verifyLoginSuccessfullyWithValidCredentials();
        await inventoryPage.verifyInventoryPageIsDisplayed();
        await inventoryPage.addProductToCart("tta-practice-backpack");
        await inventoryPage.openCart();
        await cartPage.verifyUserIsLandedOnCartPageOrNot();
        await cartPage.clickOnCheckoutButton();
        await checkoutStepOnePage.verifyCheckoutStepOnePageIsDisplayed();
        await  checkoutStepOnePage.fillCheckoutInformation(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.location.zipCode()
        );
        await checkoutStepOnePage.clickOnContinueButton();
        await checkoutStepTwoPage.verifyCheckoutStepTwoPageIsDisplayed();
        await checkoutStepTwoPage.verifyFinishButtonIsEnabledOnCheckOutPageTwo();
        await checkoutStepTwoPage.clickOnFinishButton();
        await checkoutCompletePage.verifyCheckoutCompletePageIsDisplayed();
        await checkoutCompletePage.verifyStatusOfTheOrderIsCompletedOrNot();
        await page.waitForTimeout(3000);
        await checkoutCompletePage.clickOnBackHomeButton();
        await inventoryPage.verifyInventoryPageIsDisplayed();

    });
});