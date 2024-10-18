import { handler, sharedState, UserOpProcessedEventParams } from "../src/index";
import { handleOpsActionEvent } from "./fixtures/handleOpsActionEvent";
import { expect } from "chai";

describe("Handler and sharedState Tests", () => {
  beforeEach(() => {
    Object.keys(sharedState).forEach((key) => delete sharedState[key]);
  });

  it("should initialize sharedState as an empty object", () => {
    expect(sharedState).to.deep.equal({});
  });

  it("should update sharedState with the correct key-value pair", async () => {
    await handler(handleOpsActionEvent);

    const chargeInPostOpSuccess: UserOpProcessedEventParams[] =
      sharedState["ChargeInPostOpSuccess"];
    expect(chargeInPostOpSuccess[0].chargeSuccessful).to.eq(true);

    const chargeInPostOpFail: UserOpProcessedEventParams[] =
      sharedState["ChargeInPostOpFail"];

    expect(chargeInPostOpFail[0].chargeSuccessful).to.eq(false);
  });

  it("should not retain state between tests", () => {
    expect(sharedState).to.deep.equal({});
  });
});
