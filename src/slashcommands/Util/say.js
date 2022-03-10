const { MessageEmbed } = require("discord.js");

const run = (client, interaction) => {
  let whatToSay = interaction.options.getString("what-to-say");

  try {
    const sayEmbed = new MessageEmbed()
      .setDescription(whatToSay)
      .setColor("WHITE")
      .setFooter(
        `${interaction.member.user.tag}`,
        interaction.member.displayAvatarURL({ dynamic: true })
      );

    interaction.reply({ embeds: [sayEmbed] });
  } catch (err) {
    if (err) {
      console.error(err);
    }
  }
};

module.exports = {
  name: "say",
  description: "repeats after you!",
  options: [
    {
      name: "what-to-say",
      description: "what should I say?",
      type: "STRING",
      required: true,
    },
  ],
  run,
};
