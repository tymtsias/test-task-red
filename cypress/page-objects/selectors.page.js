export class SelectorPage {
  uiLoadSelector() {
    return cy.get('body[class="chakra-ui-light"]');
  }
  loginButton() {
    return cy.get('div[class="css-k5rr6j"]');
  }
  metamaskButton() {
    return cy.get('button[data-testid="component-wallet-button-metamask"]');
  }
  walletButton() {
    return cy.get('div[class="css-k5rr6j"]');
  }
  walletConnectionBadge() {
    return cy.get('div[class="w3m-connection-badge"]');
  }
}
export default SelectorPage;
