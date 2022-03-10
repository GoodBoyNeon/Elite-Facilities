const {
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
  MessageButton,
} = require("discord.js");

module.exports = {
  name: "function",
  description: "run a admin only function",
  perm: ["ADMINSTRATOR"],
  options: [
    {
      name: "function",
      description: "which function do you wanna use?",
      type: "STRING",
      required: true,
    },
  ],
  run: async (client, interaction) => {
    const functionType = interaction.options.getString("function");

    function sendRoleSelector() {
      const roles = [
        {
          name: "News Ping",
          description: "get pinged when we have some server news",
          value: "896700471316717588",
        },
        {
          name: "Giveaway Ping",
          description: "get pinged when we host giveaways",
          value: "896700716608016424",
        },
        {
          name: "Events Ping",
          description: "get pinged when we host events",
          value: "896700542317916171",
        },
        {
          name: "Chat Revive Ping",
          description: "help us make the chat active",
          value: "896700606008393738",
        },
        {
          name: "Ping Friendly",
          description: "Do you prefer getting pinged?",
          value: "908293565883506688",
        },
        {
          name: "Non-ping Friendly",
          description: "Do you prefer getting pinged?",
          value: "908294038870949928",
        },
        {
          name: "Gender: Male",
          description: "Is your gender male?",
          value: "896698193415397396",
        },
        {
          name: "Gender: Female",
          description: "Is your gender female?",
          value: "896698253301657630",
        },
        {
          name: "Gender: Non-binary/LGBT+",
          description: "Is your gender non-binary?",
          value: "896698347690262568",
        },
      ];

      const roleSelectorEmbed = new MessageEmbed()
        .setTitle("Personalize your server profile")
        .setDescription(
          "Use the below dropdown menu to select the roles you want to have. If you'd like to remove the role, select it again.\nNote that these roles don't grant you extra permissions, you are allowed to select as many roles as you want!"
        )
        .setColor("BLURPLE")
        .setFooter({ text: "use the below button to show your roles!" });

      const roleSelectorRow = new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setMinValues(1)
          .setMaxValues(roles.length)
          .setCustomId("role-selector")
          .setPlaceholder("Please select your desired roles")
          .addOptions([
            {
              label: roles[0].name,
              description: roles[0].description,
              value: roles[0].value,
              emoji: "<:newschannel:899148262051819521>",
            },
            {
              label: roles[1].name,
              description: roles[1].description,
              value: roles[1].value,
              emoji: "<:grayheart:908287678234120192>",
            },
            {
              label: roles[2].name,
              description: roles[2].description,
              value: roles[2].value,
              emoji: "<:discovery:908262711832481812>",
            },
            {
              label: roles[3].name,
              description: roles[3].description,
              value: roles[3].value,
              emoji: "<:Public:903892581623152720>",
            },
            {
              label: roles[4].name,
              description: roles[4].description,
              value: roles[4].value,
              emoji: "<:yesyesyesy:908293466579152907>",
            },
            {
              label: roles[5].name,
              description: roles[5].description,
              value: roles[5].value,
              emoji: "<:nononon:908293430260695080>",
            },
            {
              label: roles[6].name,
              description: roles[6].description,
              value: roles[6].value,
              emoji: "♂",
            },
            {
              label: roles[7].name,
              description: roles[7].description,
              value: roles[7].value,
              emoji: "♀️",
            },
            {
              label: roles[8].name,
              description: roles[8].description,
              value: roles[8].value,
              emoji: "◻️",
            },
          ])
      );

      interaction.channel.send({
        embeds: [roleSelectorEmbed],
        components: [roleSelectorRow],
      });
    }
    try {
      if (functionType === "roleSelector") {
        sendRoleSelector();
      }
    } catch (err) {
      console.error(err);
    }
  },
};
