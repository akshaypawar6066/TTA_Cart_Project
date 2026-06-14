import { test } from "../../fixtures/auth.fixture";
import { faker } from "@faker-js/faker";

test.describe("Checkout Complete Page Tests", {tag:"@EndToEndTest"}, () => {

    test("Verify user is landed on checkout complete page after clicking on finish", async ({ inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {
        await inventoryPage.addProductToCart("tta-practice-backpack");
        await inventoryPage.openCart();
        await cartPage.clickOnCheckoutButton();
        await checkoutStepOnePage.verifyCheckoutStepOnePageIsDisplayed();
        await checkoutStepOnePage.fillCheckoutInformation(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.location.zipCode()
        );
        await checkoutStepOnePage.clickOnContinueButton();
        await checkoutStepTwoPage.verifyCheckoutStepTwoPageIsDisplayed();
        await checkoutStepTwoPage.clickOnFinishButton();
        await checkoutCompletePage.verifyCheckoutCompletePageIsDisplayed();
    });

    test("Verify order status is completed or not on checkout complete page", async ({ inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {
        await inventoryPage.addProductToCart("tta-practice-backpack");
        await inventoryPage.openCart();
        await cartPage.clickOnCheckoutButton();
        await checkoutStepOnePage.verifyCheckoutStepOnePageIsDisplayed();
        await checkoutStepOnePage.fillCheckoutInformation(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.location.zipCode()
        );
        await checkoutStepOnePage.clickOnContinueButton();
        await checkoutStepTwoPage.verifyCheckoutStepTwoPageIsDisplayed();
        await checkoutStepTwoPage.clickOnFinishButton();
        await checkoutCompletePage.verifyCheckoutCompletePageIsDisplayed();
        await checkoutCompletePage.verifyStatusOfTheOrderIsCompletedOrNot();
    });

    test("Verify user can go back to inventory page from checkout complete page", async ({ inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {
        await inventoryPage.addProductToCart("tta-practice-backpack");
        await inventoryPage.openCart();
        await cartPage.clickOnCheckoutButton();
        await checkoutStepOnePage.verifyCheckoutStepOnePageIsDisplayed();
        await checkoutStepOnePage.fillCheckoutInformation(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.location.zipCode()
        );
        await checkoutStepOnePage.clickOnContinueButton();
        await checkoutStepTwoPage.verifyCheckoutStepTwoPageIsDisplayed();
        await checkoutStepTwoPage.clickOnFinishButton();
        await checkoutCompletePage.verifyCheckoutCompletePageIsDisplayed();
        await checkoutCompletePage.verifyStatusOfTheOrderIsCompletedOrNot();
        await checkoutCompletePage.clickOnBackHomeButton();
        await inventoryPage.verifyInventoryPageIsDisplayed();
    });

});
