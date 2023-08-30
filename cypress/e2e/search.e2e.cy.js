const header = require("../pages/components/header");
const loginPage = require("../pages/loginPage");

describe("Search field functionality", () => {
  it("should find right brand", () => {
    loginPage.navigate("https://www.asos.com/");
    header.clickCountrySelector();
  });

  it("should save recent search", () => {
    cy.window().then((win) => {
      localStorage.setItem(
        "chrome:search",
        `{"recent":["adidas"],"suggestions":[],"term":"","isVisible":false}`,
      );
    });
    loginPage.navigate("https://www.asos.com/");
    header.searchInput.click();
    cy.get("#search-result-0").invoke("text").should("equal", `Adidas`);
  });
});
