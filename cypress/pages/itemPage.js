class itemPage {
  get addToBagButton() {
    return cy.get(`[data-testid="add-button"]`);
  }

  clickAddToBagButton() {
    this.addToBagButton.click();
  }

  get sizeButton() {
    return cy.get("#variantSelector");
  }

  clickSizeButton() {
    this.sizeButton.click();
  }
}

module.exports = new itemPage();
