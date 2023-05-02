@smoke
Feature: Add product to cart

    Scenario Outline: verify addition of product to the cart functionality
        Given I am on amazon.in page
        Then I verify the page title and the amazon logo
        When I search for the desired "<product>" in the search bar
        Then I should see the "<product>" search results page
        When I click on the first product
        Then I should see the "<product>" details page
        And I verify the "<productPrice>"
        And I increase the product "<quantity>"
        When I click on the add to cart button
        Then I should see the product confirmation page
        Then I verify "<productPrice>" with respect to the "<quantity>" added on the confirmation page
        When I click on the proceed to buy button
        Then I should see the sign in page

        Examples:
            | product                |  | productPrice |  | quantity |
            | The Catcher in the Rye |  | 279.00       |  | 19       |
            | The Book Thief         |  | 998.87       |  | 2        |
