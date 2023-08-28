const header = require("../pages/components/header");
const loginPage = require("../pages/loginPage");

describe.skip("login page test", () => {
  it("should open login page", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickEnterButton();
    header.clickMyAccountButton();
    cy.url().should("include", "https://my.asos.com/identity/login?signin");
  });

  it("should redirect to apple login page", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickEnterButton();
    header.clickMyAccountButton();
    cy.get("#signup-apple").click();
    cy.origin("https://appleid.apple.com/", () => {
      cy.url().should("include", "https://appleid.apple.com/");
    });
  });

  it("should show error if email field empty", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickEnterButton();
    header.clickMyAccountButton();
    loginPage.inputPassword("123");
    loginPage.clickSignInButton();
    cy.get("#EmailAddress-error")
      .invoke("text")
      .should("equal", "Oops! You need to type your email here");
  });

  it("should show error if password field empty", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickEnterButton();
    header.clickMyAccountButton();
    loginPage.inputEmail("test@test.com");
    loginPage.clickSignInButton();
    cy.get("#Password-error")
      .invoke("text")
      .should("equal", "Hey, we need a password here");
  });

  it("should send reset password message", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickEnterButton();
    header.clickMyAccountButton();
    loginPage.clickForgotPasswordButton();
    loginPage.inputEmailToReset("test@test.com");
    loginPage.clickResetButton();
    cy.get("#main > div > div > h2")
      .invoke("text")
      .should("equal", "Reset password link sent");
  });
});
