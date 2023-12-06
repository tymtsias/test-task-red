import { visitPage, testScenario } from "../models/zeroLoansModels";

describe("Scenario Tests", () => {
  before(() => {
    visitPage();
  });

  it("Login via MetaMask", () => {
    testScenario();
  });
});
