import { test } from "../../fixtures/auth.fixture";
import { faker } from "@faker-js/faker";

test.describe("Checkout Step Two Page Tests", () => {

    test("Verify user is landed on checkout step two page", async ({ inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage }) => {
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
    });

    test("Verify finish button is enabled on checkout page two", async ({ inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage }) => {
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
        await checkoutStepTwoPage.verifyFinishButtonIsEnabledOnCheckOutPageTwo();

    });


    test("Verify user can cancel checkout from step two and go back to cart", async ({ inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage }) => {
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
        await checkoutStepTwoPage.clickOnCancelButton();
        await cartPage.verifyUserIsLandedOnCartPageOrNot();
    });

});
