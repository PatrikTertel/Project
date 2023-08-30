const header = require("../pages/components/header");
const mainPage = require("../pages/mainPage");
const loginPage = require("../pages/loginPage");
const clothesPage = require("../pages/clothesPage");
const favoritsPage = require("../pages/favoritsPage");

describe("Favorits page test", () => {
  it("should add item to favorits", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickManButton();
    header.clickClothingButton();
    header.clickBestsellersButton();
    mainPage.clickDeliverPopup();
    mainPage.clickCloseButton();
    clothesPage.clickFavButton();
    header.clickFavIconButton();
    cy.contains("adidas Sportswear Tiro striped t-shirt in green", {
      timeout: 10000,
    }).should("exist");
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
    favoritsPage.noItemsText.should("be.visible");
  });

  it("should remove after adding to bag", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickManButton();
    header.clickClothingButton();
    header.clickBestsellersButton();
    mainPage.clickDeliverPopup();
    mainPage.clickCloseButton();
    clothesPage.clickFavButton();
    header.clickFavIconButton();
    favoritsPage.clickSizeButton(1);
    favoritsPage.clickMoveToBagButton();
    cy.get(".content_Nbbyw").should("be.visible"); //На сайте есть проблема с корзиной, выдает ошибку. Завязался на появление поп-апа
  });
});
