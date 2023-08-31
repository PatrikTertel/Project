class favoritsPage {
  get deleteButton() {
    return cy.get(".deleteButton_c9wnw");
  }

  clickDeleteButton() {
    this.deleteButton.click();
  }

  get noItemsText() {
    return cy.get(".noItemsTitle_uTxWD");
  }

  get sizeButton() {
    return cy.get(".productTile_twgqJ > .hasOptions_WfYHd > select");
  }

  clickSizeButton(size) {
    this.sizeButton.scrollIntoView();
    this.sizeButton.select(size);
  }

  get firstSizeButton() {
    return cy.get(
      ".productTile_twgqJ > .hasOptions_WfYHd > select > option:nth-child(1)",
    );
  }

  clickFirstSizeButton() {
    this.firstSizeButton.scrollIntoView();
    this.firstSizeButton.click();
  }

  get moveToBagButton() {
    return cy.get(".toBagButton_mYSbq");
  }

  clickMoveToBagButton() {
    this.moveToBagButton.scrollIntoView();
    this.moveToBagButton.click();
  }
}

module.exports = new favoritsPage();
