const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const { token, labId, clientId } = require("./config.json");
const { client } = require("./discord-client.js");

/* 
	assumes client is available in this context and that
 	client#commands exists according to earlier guide sections
*/

console.log("client#commands: ", client.commands);
const commands = client.commands.map(({ execute, ...data }) => data);

const rest = new REST({ version: "9" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationGuildCommands(clientId, labId), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
