import { test } from "../fixtures/auth.fixture";
import { faker } from "@faker-js/faker";

test.describe("Checkout Step One Page Tests", () => {

    test("Verify user is landed on checkout step one page", async ({ inventoryPage, cartPage, checkoutStepOnePage }) => {
        await inventoryPage.addProductToCart("tta-practice-backpack");
        await inventoryPage.openCart();
        await cartPage.clickOnCheckoutButton();
        await checkoutStepOnePage.verifyCheckoutStepOnePageIsDisplayed();
    });

    test("Verify user can fill checkout information and proceed to step two", async ({ inventoryPage, cartPage, checkoutStepOnePage }) => {
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
    });

    test("Verify user can cancel checkout and go back to cart", async ({ inventoryPage, cartPage, checkoutStepOnePage }) => {
        await inventoryPage.addProductToCart("tta-practice-backpack");
        await inventoryPage.openCart();
        await cartPage.clickOnCheckoutButton();
        await checkoutStepOnePage.verifyCheckoutStepOnePageIsDisplayed();
        await checkoutStepOnePage.clickOnCancelButton();
        await cartPage.verifyUserIsLandedOnCartPageOrNot();
    });

});
