describe("Lambdatest Login ", () => {
  it("Open the URL", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
  });
  it("Login into the application", () => {

    cy.get('[type="submit"]').eq(0).click();
  });
  it("Search the Product", () => {
    cy.get('[name="search"]').eq(0).type("VAIO");
    cy.get('[type="submit"]').eq(0).click();
  });
  it("Verify Product after search ", () => {
    cy.contains("Sony VAIO");
  });
});
