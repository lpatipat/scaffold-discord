// const { SlashCommandBuilder } = require("@discordjs/builders");

// module.exports = {
//   data: new SlashCommandBuilder()
//     .setName("ping")
//     .setDescription("Replies with Pong!"),
//   async execute(interaction) {
//     await interaction.reply("Pong!");
//   },
// };

module.exports = {
  name: "ping",
  description: "Replies with Pongers!",
  async execute(interaction) {
    await interaction.reply("Pongers!");
  },
};
