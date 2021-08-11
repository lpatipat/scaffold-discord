const { token } = require("./config.json");
const { client } = require("./discord-client.js");

client.once("ready", () => {
  console.log("Ready to go!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (!client.commands.has(interaction.commandName)) return;

  try {
    await client.commands.get(interaction.commandName).execute(interaction);
  } catch (error) {
    console.error(error);
    return interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

client.login(token);
