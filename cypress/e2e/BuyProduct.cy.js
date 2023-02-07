/// <reference types="cypress" />

describe("buy products on each account", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
    cy.url().should("include", "saucedemo.com/");
  });

  it("Mengecek halaman website", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("include", "saucedemo.com/");
  });

  it("Menggunakan data Valid", () => {
    cy.fixture("data").then((data) => {
      const username = data.username;
      const password = data.password;

      //memasukkan username dan password
      cy.get("#user-name").type(username[0]);
      cy.get("#password").type(password);

      //login
      cy.get("#login-button").click();
      cy.get(".title").should("contain.text", "Products");
      cy.wait(2000);

      //masuk ke halaman Barang
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get("a").contains("Sauce Labs Backpack").click();
      cy.get(".inventory_details_name").should(
        "contain",
        "Sauce Labs Backpack"
      );

      //logout
      cy.logout();
    });
  });

  it("Mengecek field email (ERROR)", () => {
    cy.fixture("data").then((data) => {
      const username = data.username;
      const password = data.password;

      //memasukkan username dan password
      cy.get("#user-name").type(username[1]);
      cy.get("#password").type(password);

      //login
      cy.get("#login-button").click();
      cy.wait(1000);

      cy.get("h3").should(
        "contain.text",
        "Epic sadface: Sorry, this user has been locked out."
      );
      cy.get("h3").should("be.visible");
      cy.get(".error-button").click();
      cy.get("#user-name").clear();
      cy.get("#password").clear();
      cy.get(".bot_column").should("be.visible");
    });
  });

  it("Menggunakan data akun email (PROBLEM)", () => {
    cy.fixture("data").then((data) => {
      const username = data.username;
      const password = data.password;

      //memasukkan username dan password
      cy.get("#user-name").type(username[2]);
      cy.get("#password").type(password);

      //login
      cy.get("#login-button").click();
      cy.wait(2000);
      cy.get("#item_4_img_link").should("be.visible").click();
      cy.get(".inventory_details_img_container").should("be.visible").click();

      //logout
      cy.logout();
    });
  });

  it("Menggunakan data akun email (GLITCH)", () => {
    cy.fixture("data").then((data) => {
      const username = data.username;
      const password = data.password;

      //memasukkan username dan password
      cy.get("#user-name").type(username[3]);
      cy.get("#password").type(password);

      //login
      cy.get("#login-button").click();
      cy.get(".title").should("contain.text", "Products");
      cy.wait(2000);

      //masuk ke halaman Barang
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get("a").contains("Sauce Labs Backpack").click();
      cy.get(".inventory_details_name").should(
        "contain",
        "Sauce Labs Backpack"
      );

      //logout
      cy.logout();
    });
  });
});
