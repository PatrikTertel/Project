class header {
  get enterButton() {
    return cy.get("#myAccountDropdown > button");
  }

  clickEnterButton() {
    this.enterButton.click();
  }

  get myAccountButton() {
    return cy.get('[data-testid="myaccount-link"]');
  }

  clickMyAccountButton() {
    this.myAccountButton.click();
  }

  get manButton() {
    return cy.get("#men-floor");
  }

  clickManButton() {
    this.manButton.click();
  }

  get clothingButton() {
    return cy.get("div:nth-child(2) > .VylGWEt .yI6sHXc:nth-child(3)");
  }

  clickClothingButton() {
    this.clothingButton.click();
  }

  get bestSellersButton() {
    return cy.get(
      "#e87ba617-daa1-4b64-8f36-ab92e61283f7 li:nth-child(1) > .R5kwVNg",
    );
  }

  clickBestsellersButton() {
    this.bestSellersButton.click();
  }

  get favIconButton() {
    return cy.get('[data-testid="savedItemsIcon"]');
  }

  clickFavIconButton() {
    cy.scrollTo("top");
    cy.scrollTo("top");
    this.favIconButton.click();
  }

  get searchButton() {
    return cy.get(`[data-testid="searchIcon"]`);
  }

  clickSearchButton() {
    this.searchButton.click();
  }

  get searchInput() {
    return cy.get(`[data-testid="search-input"]`);
  }

  fillSearchInput(input) {
    this.searchInput.type(input);
    this.searchInput.type("{enter}");
  }

  get countrySelector() {
    return cy.get(".qMg7GGV:nth-child(1)");
  }

  clickCountrySelector() {
    // this.countrySelector.scrollIntoView()
    this.countrySelector.click();
  }
}
module.exports = new header();
