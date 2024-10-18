# OffChainPaymaster for OpenZeppelin Actions

## Prerequisites

1. Create an Actions project on [OpenZeppelin Defender](https://defender.openzeppelin.com/#/actions/automatic).

![Create Actions](images/createActions.png "Create Actions")

2. Get the Actions ID from the URL on the Actions page.

![Get Actions ID](images/getActionsId.png "Get Actions ID")

3. Use a Discord webhook to manage OffChainPaymaster messages. Get the WebHook URL from the specified Discord channel.

![Create Discord webhook url](images/createDiscordWebhookUrl.png "Create Discord webhook url")

3. In OpenZeppelin’s Secrets, add "DISCORD_PAYMASTER_CHANNEL_WEBHOOK" and set the webhook URL.

![Add webhook to secrets](images/addWebhookToSecrets.png "Add webhook to secrets")

4. Add "MONITORED_PAYMASTER_ADDRESSES" as a string array to filter paymaster addresses in EntryPoint’s UserOperationEvent, e.g., `["0x44D6f8362c144A1217f24A11bE35f2c418B6cb20","0xBDd6EB5C9A89f21B559f65C6b2bbeC265cE54C82"]`.

![Add paymaster addresses to secrets](images/addPaymasterAddressesToSecrets.png "Add paymaster addresses to secrets")

5. Install OpenZeppelin Defender SDK Action Client CLI on local

```bash
$ npm install --global @openzeppelin/defender-sdk-action-client
```

## 2. Build the Local Project

### (1) Prepare the Project

First, clone the repository and navigate into the project directory:

```bash
$ git clone https://github.com/oneleo/OffChainPaymaster-for-OpenZeppelin-Action.git
$ cd OffChainPaymaster-for-OpenZeppelin-Action/
$ npm install
```

### (2) Compile the Script

Next, compile the TypeScript code to JavaScript:

```
$ npm run build
```

## 3. Deploy the Script to OpenZeppelin Actions

### (1) Set Deployment Environment Variables

Before deploying, set the following environment variables:

1. Generate an API Key

Create an API key on the OpenZeppelin Defender website:

[OpenZeppelin Defender API Keys](https://defender.openzeppelin.com/#/settings/api-keys)

2. Set Environment Variables

Use the following commands to export your API key and secret:

```bash
$ export API_KEY="<YOUR_OPENZDPPELIN_API_KEY>" \
&& export API_SECRET="<YOUR_OPENZDPPELIN_API_SECRET>"
```

3. Set the Action ID

```bash
$ export ACTION_ID="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

### (2) Deploy the OpenZeppelin Actions Script

Finally, deploy your script using the following command:

```bash
$ defender-action update-code ${ACTION_ID} dist/
```
