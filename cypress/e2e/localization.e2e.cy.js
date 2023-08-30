const header = require("../pages/components/header");
const loginPage = require("../pages/loginPage");

const countrySelectorPage = require("../pages/countrySelectorPage");

describe("Search field functionality", () => {
  it("should change language", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickCountrySelector();
    countrySelectorPage.openCountryList("Spain");
    countrySelectorPage.title.invoke("text").should("equal", "Preferencias");
  });

  it("should change language", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickCountrySelector();
    countrySelectorPage.openCountryList("Spain");
    countrySelectorPage.clickConfirmButton();
    header.countrySelector.should("have.attr", "alt", "Spain");
  });

  it("should block restricted country", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickCountrySelector();
    countrySelectorPage.openCountryList("Belarus");
    countrySelectorPage.clickConfirmButton();
    cy.get("p").invoke("text").should("include", "Приносим свои извинения");
    loginPage.navigate("https://www.asos.com/");
    cy.get("p").invoke("text").should("include", "Приносим свои извинения");
  });
});
