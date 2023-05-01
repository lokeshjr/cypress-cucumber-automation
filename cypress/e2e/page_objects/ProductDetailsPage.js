export class ProductDetailsPage {
  elements = {
    productTitle: () => cy.get("#productTitle"),
    productPriceText: () => cy.get("#price"),
    quantityDropDown: () => cy.get("#quantity"),
    addToCartButton: () => cy.get("#add-to-cart-button"),
    buyNowButton: () => cy.get("#buy-now-button"),
  };

  verifyProductDetailsPage(product) {
    cy.title().should("include", product);
    this.elements.productTitle().should("contain", product);
    this.elements.addToCartButton().should("be.visible");
  }

  verifyProductPrice(productPrice) {
    this.elements.productPriceText().should("contain", productPrice);
  }

  increaseProductQuantity(quantity) {
    this.elements.quantityDropDown().select(quantity);
  }

  clickOnAddToCartButton() {
    this.elements.addToCartButton().click();
  }
}
