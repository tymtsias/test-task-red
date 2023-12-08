import SelectorPage from "../page-objects/selectors.page";

let envVariables = Cypress.config();
const selectors = new SelectorPage();

export const visitPage = () => {
  cy.visit(envVariables.baseUrl);
  selectors.uiLoadSelector().should("be.visible");
};

export const testScenario = () => {
  selectors.loginButton().should("be.visible").click();
  selectors.metamaskButton().should("be.visible").click();
  // cy.acceptMetamaskAccess().should("be.true");
  selectors.walletButton().should("be.visible").click();
  selectors.walletConnectionBadge().should("be.visible").and("have.text", "Connected");
};
