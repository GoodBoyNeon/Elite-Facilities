const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "suggest",
  description: "make a suggestion",
  options: [
    {
      name: "suggestion",
      description: "your suggestion",
      type: "STRING",
      required: true,
    },
  ],
  run: async (client, interaction) => {
    let suggestionChannel = interaction.guild.channels.cache.get("894807015602417705");
    let suggestion = interaction.options.getString("suggestion");

    let suggestionEmbed = new MessageEmbed()
      .setAuthor({
        name: `${interaction.member.user.tag}`,
        iconURL: `${interaction.member.displayAvatarURL()}`,
      })
      .setTitle(`${interaction.member.user.tag} suggests:`)
      .setDescription(`- ${suggestion}`)
      .setFooter({ text: "wanna suggest something too? Try /suggest!" })
      .setColor("WHITE")
      .addFields({
        name: "Status",
        value: ":bar_chart: waiting for community feedback. please vote.",
      });

    try {
      let suggestedMsg = await suggestionChannel.send({
        embeds: [suggestionEmbed],
      });
      suggestedMsg.react("<:yesyesyesy:908293466579152907>");
      suggestedMsg.react("<:nononon:908293430260695080>");
      interaction.reply({
        content: `suggestion submitted in ${suggestionChannel}`,
        ephemeral: true,
      });
    } catch (err) {
      console.error(err);
      interaction.reply({
        content: `error sending the command!\n\nERROR:\n${err}`,
        ephemeral: true,
      });
    }
  },
};
