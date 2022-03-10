const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "8ball",
  description: "randomly answers the question you provided",
  options: [
    {
      name: "question",
      description: "your question",
      type: "STRING",
      required: true,
    },
  ],

  run: async (client, interaction) => {
    let answers = [
      "yes.",
      "Absolutely",
      "ofc",
      "obviously yes",
      "The following statement is true.",
      "No.",
      "Nope",
      "false statement",
      "I'll consider it a no",
      "Never.",
      "maybe",
      "probably",
      "idk",
    ];

    let question = interaction.options.getString("question");
    let answer = Math.floor(Math.random() * answers.length);

    let ballEmbed = new MessageEmbed()
      .setAuthor({
        name: `${interaction.member.user.tag}`,
        iconURL: `${interaction.member.displayAvatarURL({ dynamic: true })}`,
      })
      .setTitle(question)
      .setDescription("- " + answers[answer])
      .setColor("WHITE");

    interaction.reply({
      embeds: [ballEmbed],
    });
  },
};
