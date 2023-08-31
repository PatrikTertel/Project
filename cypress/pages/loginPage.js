const BasePage = require("./basePage");

class loginPage extends BasePage {
  get googleLoginButton() {
    return cy.get(".not-unified-signin-page-element #signup-google span");
  }

  clickGoogleLoginButton() {
    this.googleLoginButton.click();
  }

  get emailField() {
    return cy.get("#EmailAddress");
  }

  inputEmail(input) {
    this.emailField.type(input);
  }

  get passwordField() {
    return cy.get("#Password");
  }

  inputPassword(input) {
    this.passwordField.type(input);
  }

  get passwordField() {
    return cy.get("#Password");
  }

  inputPassword(input) {
    this.passwordField.type(input);
  }

  get signInButton() {
    return cy.get("#signin");
  }

  clickSignInButton() {
    this.signInButton.click();
  }

  get forgotPasswordButton() {
    return cy.get("#forgot-password-link");
  }

  clickForgotPasswordButton() {
    this.forgotPasswordButton.click();
  }

  get resetEmailField() {
    return cy.get("#Email");
  }

  inputEmailToReset(input) {
    this.resetEmailField.type(input);
  }

  get resetButton() {
    return cy.get("#send");
  }

  clickResetButton() {
    this.resetButton.click();
  }
}

module.exports = new loginPage();
