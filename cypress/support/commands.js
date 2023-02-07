Cypress.Commands.add("logout", () => {
  cy.get("button").contains("Open Menu").click();
  cy.get("a").contains("Logout").click();
  cy.get(".login_logo").should("be.visible");
});
