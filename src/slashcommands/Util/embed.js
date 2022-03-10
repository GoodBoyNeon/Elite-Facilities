const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  description: "creates an embed message containing specified data",
  perm: "MANAGE_MESSAGES",
  options: [
    {
      name: "title",
      description: "title of your embed",
      type: "STRING",
      required: false,
    },
    {
      name: "description",
      description: "description of your embed",
      type: "STRING",
      required: false,
    },
    {
      name: "author",
      description: "author of the embed",
      type: "STRING",
      required: false,
    },
    {
      name: "color",
      description:
        "color of the embed. You can pass in hex code, color name or RANDOM",
      type: "STRING",
      required: false,
    },
    {
      name: "footer",
      description: "footer of the embed",
      type: "STRING",
      required: false,
    },
    {
      name: "image",
      description: "link of the image",
      type: "STRING",
      required: false,
    },
    {
      name: "thumbnail",
      description: "link for the thumbnail of the embed",
      type: "STRING",
      required: false,
    },
  ],
  run: async (client, interaction) => {
    let title = interaction.options.getString("title");
    let description = interaction.options.getString("description");
    let author = interaction.options.getString("author");
    let color = interaction.options.getString("color");
    let footer = interaction.options.getString("footer");
    let image = interaction.options.getString("image");
    let thumbnail = interaction.options.getString("thumbnail");

    try {
      let embed = new MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setAuthor(author)
        .setColor(color)
        .setFooter(footer)
        .setImage(image)
        .setThumbnail(thumbnail);

      interaction.channel.send({ embeds: [embed] });
      interaction.reply({ content: "embed has been sent!", ephemeral: true });
    } catch (err) {
      if (err) {
        console.error(err);
        interaction.reply({
          content:
            "Failed to send your embed! Please check if you have provided appropriate color name/hex and URL(s)",
          ephemeral: true,
        });
      }
    }
  },
};
