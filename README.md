# OffChainPaymaster for OpenZeppelin Actions

## 1. Install Necessary Packages

To get started, install the required package globally:

```bash
$ npm install --global @openzeppelin/defender-sdk-action-client
```

## 2. Build the Project

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

3. Get the Action ID

Retrieve the Action ID from the URL on the OpenZeppelin Defender Actions page:

[OpenZeppelin Defender Actions](https://defender.openzeppelin.com/#/actions/automatic)

```bash
$ export ACTION_ID="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

### (2) Deploy the OpenZeppelin Actions Script

Finally, deploy your script using the following command:

```bash
$ defender-action update-code ${ACTION_ID} dist/
```
