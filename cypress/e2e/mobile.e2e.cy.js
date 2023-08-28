const header = require("../pages/components/header");
const mainPage = require("../pages/mainPage");
const loginPage = require("../pages/loginPage");
const clothesPage = require("../pages/clothesPage");
const itemPage = require("../pages/itemPage");
const favoritsPage = require("../pages/favoritsPage")

describe("Bag tests", () => {
    it('changing user agent', () => {
// cy.viewport(390, 844, {
//     userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/75.0.3770.70 Mobile/15C114 Safari/604.1'
// })
cy.visit('https://www.asos.com/')
      })

  it.skip('changing user agent', () => {
    // cy.visit("https://www.asos.com/", {
    //   onBeforeLoad: (win) => {
    //     Object.defineProperty(win.navigator, 'userAgent', {
    //       value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/75.0.3770.70 Mobile/15C114 Safari/604.1',
    //     });    
    //   }
    // })
    cy.viewport(390, 844)
    cy.visit('https://www.asos.com/')
  })

});
