import { ActionEvent } from "@openzeppelin/defender-sdk-action-client";

// Entrypoint for the Autotask
export async function handler(actionEvent: ActionEvent) {
  if (!actionEvent.request?.body) {
    return;
  }

  const conditionRequest = actionEvent.request.body;
  console.log(`conditionRequest: ${JSON.stringify(conditionRequest, null, 2)}`);
}
