class clothesPage {
  get firstItemButton() {
    return cy.get("#pta-product-204499841-0 p");
  }

  clickFirstItemButton() {
    this.firstItemButton.scrollIntoView();
    this.firstItemButton.click();
  }

  get favButton() {
    return cy.get("#product-204499841 > .saveForLater_mm1gc");
  }

  clickFavButton() {
    this.favButton.click();
  }
}

module.exports = new clothesPage();
