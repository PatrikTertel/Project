class clothesPage {
  get firstItemButton() {
    return cy.get("#product-204460685");
  }

  clickFirstItemButton() {
    this.firstItemButton.scrollIntoView();
    this.firstItemButton.click();
  }

  get favButton() {
    return cy.get("#product-204460685 > .saveForLater_mm1gc");
  }

  clickFavButton() {
    this.favButton.click();
  }
}

module.exports = new clothesPage();
