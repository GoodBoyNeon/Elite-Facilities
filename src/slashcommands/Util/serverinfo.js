const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverinfo",
  description: "gives information about the server",
  run: async (client, interaction) => {
    try {
      let serverinfoEmbed = new MessageEmbed()
        .setTitle("Server Information")
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
        .setFooter({
          text: `Requested by ${interaction.member.user.tag}`,
          iconURL: `${interaction.member.displayAvatarURL()}`,
        })
        .setTimestamp()
        .setAuthor({
          name: `${interaction.guild.name}`,
          iconURL: `${interaction.guild.iconURL()}`,
        })
        .setColor("BLURPLE")
        .addFields(
          {
            name: "Server Name",
            value: `${interaction.guild.name}`,
            inline: true,
          },
          { name: "Server ID", value: `${interaction.guild.id}`, inline: true },
          {
            name: "Server Owner",
            value: `<@${interaction.guild.ownerId}>`,
            inline: true,
          },
          {
            name: "Total Members",
            value: `${interaction.guild.members.cache.size}`,
            inline: true,
          },
          {
            name: "Total Bots",
            value: `${
              interaction.guild.members.cache.filter(
                (member) => member.user.bot
              ).size
            }`,
            inline: true,
          },
          {
            name: "Total Emojis",
            value: `${interaction.guild.emojis.cache.size}`,
            inline: true,
          },
          {
            name: "Animated Emojis",
            value: `${
              interaction.guild.emojis.cache.filter((emoji) => emoji.animated)
                .size
            }`,
            inline: true,
          },
          {
            name: "Total Text Channels",
            value: `${
              interaction.guild.channels.cache.filter(
                (channel) => channel.type === "text"
              ).size
            }`,
            inline: true,
          },
          {
            name: "Total Voice Channels",
            value: `${
              interaction.guild.channels.cache.filter(
                (channel) => channel.type === "voice"
              ).size
            }`,
            inline: true,
          },
          {
            name: "Created At",
            value: `${interaction.guild.createdAt.toDateString()}`,
            inline: true,
          },
          {
            name: "Total Roles",
            value: `${interaction.guild.roles.cache.size}`,
            inline: true,
          },
          {
            name: "Total Boosters",
            value: `${interaction.guild.premiumSubscriptionCount}`,
            inline: true,
          }
        );
      interaction.reply({ embeds: [serverinfoEmbed] });
    } catch (err) {
      if (err) {
        console.error(err);
      }
    }
  },
};