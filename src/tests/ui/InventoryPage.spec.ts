import { test } from "../../fixtures/auth.fixture";


test.describe("Inventory Page Tests", () => {

    test("Verify user is landed on inventory page after successful login", async ({ inventoryPage }) => {
        await inventoryPage.verifyInventoryPageIsDisplayed();
    });

    test("Verify product count on inventory page", async ({ inventoryPage }) => {
        await inventoryPage.verifyProductCountOnInventoryPage(6);
    });


    test("Verify user can add product to cart and remove from cart", async ({ inventoryPage, cartPage }) => {
        const productId: string = "tta-practice-backpack";
        await inventoryPage.addProductToCart(productId);
        await inventoryPage.verifyProductAddedToCartOrNotFromInventoryPage();
        await inventoryPage.openCart();
        await cartPage.verifyUserIsLandedOnCartPageOrNot();
        await cartPage.verifyProductAddedToCartOrNot("TTA Practice Backpack");
        await cartPage.removeProductFromCart(productId);
        await cartPage.verifyProductRemovedFromCartOrNot("Your cart is empty.");
    });

});