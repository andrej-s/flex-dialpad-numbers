# Dial number overwrite for Flex

This Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). When you dial a number with the new [Twilio Flex Dialpad](https://www.twilio.com/docs/flex/dialpad), this plugin will check the dialed number against the regular expressions defined in `src/numberConfig.json` and replace the caller id with the corresponding one. Note: the Flex account must be associated with the phone number you are picking.

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) and [`Flex Plugins CLI`](https://www.twilio.com/docs/flex/developer/plugins/cli/install) installed.

Afterwards, install the dependencies by running `npm install` (or `--legacy-peer-deps`):

```bash
cd

# If you use npm
npm install
```

## Development

In order to develop locally, you can use the Webpack Dev Server by running:

```bash
twilio flex:plugins:start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:3000`. If you want to change that you can do this by setting the `PORT` environment variable:

When you make changes to your code, the browser window will be automatically refreshed.

## Deploy

When you are ready to deploy your plugin, in your terminal run:

```bash
twilio flex:plugins:deploy --major --changelog "Notes for this version" --description "Functionality of the plugin"
```

## Release

Once deployed, you can manually release your plugin via the Flex UI or via

```bash
twilio flex:plugins:release --plugin plugin-name@version --name "name" --description "description"
```

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.
