import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { AmazonLandingPage } from "../../e2e/page_objects/AmazonLandingPage";
import { SearchResultsPage } from "../../e2e/page_objects/SearchResultsPage";
import { ProductDetailsPage } from "../../e2e/page_objects/ProductDetailsPage";
import { ProductConfirmationPage } from "../../e2e/page_objects/ProductConfirmationPage";
import { SignInPage } from "../../e2e/page_objects/SignInPage";

const amazonLandingPage = new AmazonLandingPage();
const searchResultsPage = new SearchResultsPage();
const productDetailsPage = new ProductDetailsPage();
const productConfirmationPage = new ProductConfirmationPage();
const signInPage = new SignInPage();

Given("I am on amazon.in page", () => {
  amazonLandingPage.navigateToPage();
});

Then("I verify the page title and the amazon logo", () => {
  amazonLandingPage.verifyPageTitleAndLogo();
});

When("I search for the desired {string} in the search bar", (product) => {
  amazonLandingPage.searchForDesiredProduct(product);
});

Then("I should see the {string} search results page", (product) => {
  searchResultsPage.verifyProductSearchResultsPage(product);
});

When("I click on the first product", () => {
  searchResultsPage.clickOnTheProduct();
});

Then("I should see the {string} details page", (product) => {
  productDetailsPage.verifyProductDetailsPage(product);
});

Then("I verify the {string}", (productPrice) => {
  productDetailsPage.verifyProductPrice(productPrice);
});

Then("I increase the product {string}", (productQuantity) => {
  productDetailsPage.increaseProductQuantity(productQuantity);
});

When("I click on the add to cart button", () => {
  productDetailsPage.clickOnAddToCartButton();
});

Then("I should see the product confirmation page", () => {
  productConfirmationPage.verifyProductConfirmationPage();
});

Then(
  "I verify {string} with respect to the {string} added on the confirmation page",
  async (productPrice, quantity) => {
    productConfirmationPage.verifyMessageAndTotalPrice(productPrice, quantity);
  }
);

When("I click on the proceed to buy button", () => {
  productConfirmationPage.clickOnProceedToBuyButton();
});

Then("I should see the sign in page", () => {
  signInPage.verifySignInPage();
});
