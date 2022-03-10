const { MessageEmbed } = require("discord.js");
const prettyMs = require("pretty-ms");

module.exports = {
  name: "ping",
  description: "replies with pong!",
  run: async (client, interaction) => {
    try {
      let resultPing = await interaction.reply({
        content: "Calculating ping...",
        fetchReply: true,
      });

      let botPing = resultPing.createdTimestamp - interaction.createdTimestamp;
      let apiPing = client.ws.ping;

      let pingEmbed = new MessageEmbed()
        .setTitle(":ping_pong: Ping Information")
        .setDescription(
          `> **Bot latency:** ${botPing}ms\n> **API latency:** ${apiPing}ms\n> **Bot\'s Uptime:** ${prettyMs(
            client.uptime
          )}`
        )
        .setColor("BLURPLE");

      await interaction.editReply({
        content: ":ping_pong: pong!",
        embeds: [pingEmbed],
      });
    } catch (err) {
      if (err) {
        console.error(err);
      }
    }
  },
};
