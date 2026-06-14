import { test } from "../../fixtures/auth.fixture";

test.describe("Cart Page Tests", () => {

    const productId = "tta-practice-backpack";
    const productName = "TTA Practice Backpack";

    test("Verify user is landed on cart page", async ({ inventoryPage, cartPage }) => {
        await inventoryPage.addProductToCart(productId);
        await inventoryPage.openCart();
        await cartPage.verifyUserIsLandedOnCartPageOrNot();
    });

    test("Verify product is added to cart", async ({ inventoryPage, cartPage }) => {
        await inventoryPage.addProductToCart(productId);
        await inventoryPage.openCart();
        await cartPage.verifyProductAddedToCartOrNot(productName);
    });

    test("Verify checkout button is visible when product is in cart", async ({ inventoryPage, cartPage }) => {
        await inventoryPage.addProductToCart(productId);
        await inventoryPage.openCart();
        await cartPage.verifyCheckoutButtonIsVisibleWhenProductInCart();
    });

    test("Verify user can remove product from cart", async ({ inventoryPage, cartPage }) => {
        await inventoryPage.addProductToCart(productId);
        await inventoryPage.openCart();
        await cartPage.removeProductFromCart(productId);
        await cartPage.verifyProductRemovedFromCartOrNot("Your cart is empty.");
    });


    test("Verify user can navigate to inventory page by clicking on continue shopping button", async ({ inventoryPage, cartPage }) => {
        await inventoryPage.addProductToCart(productId);
        await inventoryPage.openCart();
        await cartPage.clickOnContinueShoppingButton();
        await inventoryPage.verifyInventoryPageIsDisplayed();
    });
});
