import {
  handler,
  sharedState,
  UserOpProcessedEventParams,
  PostOpRevertReasonEventParams,
} from "../src/index";
import {
  handleOpsBaseSepoliaActionEvent,
  handleOpsOptimismActionEvent,
  handleOpsArbitrumActionEvent,
} from "./fixtures/handleOpsActionEvent";
import { expect } from "chai";

describe("Handler and sharedState Tests", () => {
  beforeEach(() => {
    Object.keys(sharedState).forEach((key) => delete sharedState[key]);
  });

  it("should initialize sharedState as an empty object", () => {
    expect(sharedState).to.deep.equal({});
  });

  it("handleOpsBaseSepoliaActionEvent", async () => {
    await handler(handleOpsBaseSepoliaActionEvent);

    const chargeInPostOpSuccess: UserOpProcessedEventParams[] = sharedState[
      "ChargeInPostOpSuccess"
    ] as UserOpProcessedEventParams[];
    expect(chargeInPostOpSuccess[0].chargeSuccessful).to.eq(true);

    const chargeInPostOpFail: UserOpProcessedEventParams[] = sharedState[
      "ChargeInPostOpFail"
    ] as UserOpProcessedEventParams[];

    expect(chargeInPostOpFail[0].chargeSuccessful).to.eq(false);

    const postOpRevertReason: PostOpRevertReasonEventParams[] = sharedState[
      "PostOpRevertReason"
    ] as PostOpRevertReasonEventParams[];

    expect(postOpRevertReason[0].revertReason.error).to.eq("CanNotChargeFrom");
  });

  it("handleOpsOptimismActionEvent", async () => {
    await handler(handleOpsOptimismActionEvent);

    const chargeInPostOpSuccess: UserOpProcessedEventParams[] = sharedState[
      "ChargeInPostOpSuccess"
    ] as UserOpProcessedEventParams[];
    expect(chargeInPostOpSuccess[0].chargeSuccessful).to.eq(true);
  });

  it("handleOpsArbitrumActionEvent", async () => {
    await handler(handleOpsArbitrumActionEvent);

    const chargeInPostOpSuccess: UserOpProcessedEventParams[] = sharedState[
      "ChargeInPostOpSuccess"
    ] as UserOpProcessedEventParams[];
    expect(chargeInPostOpSuccess[0].chargeSuccessful).to.eq(true);
  });

  it("should not retain state between tests", () => {
    expect(sharedState).to.deep.equal({});
  });
});
