const header = require("../pages/components/header");
const mainPage = require("../pages/mainPage");
const loginPage = require("../pages/loginPage");
const clothesPage = require("../pages/clothesPage");
const itemPage = require("../pages/itemPage");
const favoritsPage = require("../pages/favoritsPage")

describe("Bag tests", () => {
  it("should add item to favorits", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickManButton();
    header.clickClothingButton();
    header.clickBestsellersButton();
    mainPage.clickDeliverPopup();
    mainPage.clickCloseButton();
    clothesPage.clickFavButton();
    header.clickFavIconButton();
    cy.contains('Weekday Johnny 5-pack Boxer Set in black ').should('exist');
  });

  it("should delete from favorits", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickManButton();
    header.clickClothingButton();
    header.clickBestsellersButton();
    mainPage.clickDeliverPopup();
    mainPage.clickCloseButton();
    clothesPage.clickFavButton();
    header.clickFavIconButton();
    favoritsPage.clickDeleteButton();
    favoritsPage.noItemsText.should('be.visible')

  });

  it.skip("should remove after adding to bag", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickManButton();
    header.clickClothingButton();
    header.clickBestsellersButton();
    mainPage.clickDeliverPopup();
    mainPage.clickCloseButton();
    clothesPage.clickFavButton();
    header.clickFavIconButton();
    favoritsPage.clickSizeButton(1)
    favoritsPage.clickMoveToBagButton()
    cy.wait(10000)
    // favoritsPage.clickFirstSizeButton()


  });


  it.skip('should add item to bag', () => {
      loginPage.navigate('https://www.asos.com/')
      header.clickManButton()
      header.clickClothingButton()
      header.clickBestsellersButton()
      mainPage.clickDeliverPopup()
      mainPage.clickCloseButton()
      clothesPage.clickFirstItemButton()
      // itemPage.clickSizeButton()
      // itemPage.clickAddToBagButton()
    })
});
