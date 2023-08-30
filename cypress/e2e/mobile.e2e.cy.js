const header = require("../pages/components/header");

beforeEach(() => {
  cy.visit("https://www.asos.com/", {
    onBeforeLoad: (win) => {
      Object.defineProperty(win.navigator, "userAgent", {
        value:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/116.0.5845.118 Mobile/15E148 Safari/604.1",
      });
    },
  });
});

describe("Mobile version", () => {
  it("should open mobile portrait version", () => {
    cy.viewport(390, 844);
    header.enterButton.should("be.visible");
    header.favIconButton.should("be.visible");
    header.searchButton.should("be.visible");
  });

  it("should open mobile landscape version", () => {
    cy.viewport(844, 390);
    header.enterButton.should("be.visible");
    header.favIconButton.should("be.visible");
    header.searchInput.should("be.visible");
  });

  it("should show get app pop-up", () => {
    cy.viewport(390, 844);
    cy.get(".XOsVcey").should("be.visible");
  });
});
