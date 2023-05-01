export class ProductConfirmationPage {
  elements = {
    addedToCartText: () =>
      cy.xpath("//div[@id='NATC_SMART_WAGON_CONF_MSG_SUCCESS']/span"),
    cartSubTotal: () =>
      cy.xpath("(//span[@class='a-price sw-subtotal-amount']/span)[1]"),
    proceedToBuyButton: () => cy.get("input[name='proceedToRetailCheckout']"),
    goToCartButton: () => cy.xpath("//span[@id='sw-gtc']/span/a"),
  };

  verifyProductConfirmationPage() {
    cy.title().should("include", "Shopping Cart");
    this.elements.addedToCartText().should("be.visible");
  }

  verifyMessageAndTotalPrice(productPrice, quantity) {
    let totalPrice = parseFloat(productPrice * quantity).toFixed(2);
    cy.log(totalPrice);
    this.elements
      .cartSubTotal()
      .invoke("text")
      .then((price) => {
        expect(price.split("₹").join("").split(",").join("")).to.eq(
          String(totalPrice)
        );
      });
    cy.fixture("data.json").then((data) => {
      this.elements.addedToCartText().should("contain", data.successMessage);
    });
  }

  clickOnProceedToBuyButton() {
    this.elements.proceedToBuyButton().click();
  }
}
