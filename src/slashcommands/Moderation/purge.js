module.exports = {
  name: "purge",
  description: "delete a specific amount of messages at once",
  perm: "MANAGE_MESSAGES",
  options: [
    {
      name: "amount",
      description: "the amount of messages to delete",
      type: "NUMBER",
      required: true,
    },
  ],
  run: async (client, interaction) => {
    let amount = interaction.options.getNumber("amount");

    try {
      interaction.channel.bulkDelete(amount, true);
      return interaction.reply({
        content: `Successfully deleted ${amount} messages!`,
        ephemeral: true,
      });
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  },
};
