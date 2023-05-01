export class SearchResultsPage {
  elements = {
    firstProductLink: () =>
      cy.xpath(
        "(//a[@class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal'])[2]"
      ),
  };

  clickOnTheProduct() {
    this.elements.firstProductLink().invoke("removeAttr", "target").click();
  }

  verifyProductSearchResultsPage(product) {
    cy.title().should("include", product);
    this.elements.firstProductLink().should("be.visible");
  }
}
