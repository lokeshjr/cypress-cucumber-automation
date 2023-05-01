export class AmazonLandingPage {
  elements = {
    amazonDotInLogo: () => cy.get("#nav-logo-sprites"),
    searchBar: () => cy.get("#twotabsearchtextbox"),
    searchBarSubmitButton: () => cy.get("#nav-search-submit-button"),
    searchDropDown: () => cy.get("#searchDropdownBox"),
  };

  navigateToPage() {
    cy.fixture("data.json").then((data) => {
      cy.visit(data.baseUrl);
    });
  }

  verifyPageTitleAndLogo() {
    this.elements.amazonDotInLogo().should("be.visible");
    cy.fixture("data.json").then((data) => {
      cy.title().should("include", data.landingPageTitle);
    });
  }

  searchForDesiredProduct(product) {
    this.elements.searchBar().type(product);
    this.elements.searchBarSubmitButton().click();
  }
}
