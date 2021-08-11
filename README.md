# Starter Discord Bot

A basic start discord bot using [discord.js](https://discord.js.org/#/).

## instructions

1. `git clone https://github.com/lpatipat/scaffold-discord.git`

2. `npm install` to install necessary dependencies. Check package.json

3. Grab a discord token and invite the bot to your server. Follow the instructions on their [guide](https://discordjs.guide/oauth2/#implicit-grant-flow).

4. create a file named config.json for the token, guildId, and clientId. The guildId can be found by right clicking on your server on the server tabs on discord. The clientId and token are found in the [dev-portal](https://discord.com/developers/docs/intro). You can follow the template given: "config.example.json".

5. `npm run deploy` to deploy discord's slash commands. Two are already set up in ./commands

6. `npm run start` to run the bot.

You can create new commands by following the structure of each command exports in the /commands folder.
