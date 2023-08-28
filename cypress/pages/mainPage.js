const BasePage = require("./basePage");

class mainPage extends BasePage {
  get deliverPopup() {
    cy.wait(2000)
    return cy.get(".UNPPQ3g", { timeout: 10000 }).should('be.visible');
  }

  clickDeliverPopup() {
    this.deliverPopup.click();
  }

  get closeButton() {
    return cy.get('[data-testid="close-button"]');
  }

  clickCloseButton() {
    this.closeButton.click();
  }

  get loginButton() {
    return cy.get(".top-panel__userbar__auth");
  }

  clickLoginButton() {
    this.loginButton.click();
  }
}

module.exports = new mainPage();
