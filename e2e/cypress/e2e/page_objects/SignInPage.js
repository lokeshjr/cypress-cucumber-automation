export class SignInPage {
  elements = {
    emailField: () => cy.get("#ap_email"),
    continueButton: () => cy.get("#continue"),
  };

  verifySignInPage() {
    cy.fixture("data.json").then((data) => {
      cy.title().should("include", data.signInPageTitle);
    });
    this.elements.emailField().should("be.visible");
    this.elements.continueButton().should("be.visible");
  }
}
