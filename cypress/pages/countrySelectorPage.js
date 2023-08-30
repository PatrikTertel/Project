class countryPage {
  get closeButton() {
    return cy.get(`[data-testid="close-button"]`);
  }

  clickCloseButton() {
    this.closeButton.click();
  }

  get confirmButton() {
    return cy.get('[data-testid="save-country-button"]');
  }

  clickConfirmButton() {
    this.confirmButton.click();
  }

  get countryList() {
    cy.wait(2000);
    return cy.get(`#country`);
  }

  openCountryList(country) {
    this.countryList.select(country);
  }

  get title() {
    return cy.get("#country-title");
  }

  get currency() {
    return cy.get("#singleCurrency");
  }
}

module.exports = new countryPage();
