const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'accsuggest',
	description: 'accept a suggestion',
	options: [
		{
			name: 'message-id',
			description: 'message id the suggestion',
			type: 'STRING',
			required: true
		},
		{
			name: 'reason',
			description: 'reason for accepting the suggestion',
			type: 'STRING',
			required: true
		}
	],
	run: async (client, interaction) => {
		let messageId = interaction.options.getString('message-id');
		let reason = interaction.options.getString('reason');
    let suggestionChannel = interaction.guild.channels.cache.get('894807015602417705');
    let suggestionMsg = await suggestionChannel.messages.fetch(messageId);

		let suggestionEmbed = suggestionMsg.embeds[0];

    if(!interaction.member.roles.cache.has('940999691032743976')) return interaction.reply({ content: 'You are not allowed to use this command!', ephemeral: true })
		
    let acceptedEmbed = new MessageEmbed()
		.setAuthor({ name: `${suggestionEmbed.author.name}`, iconURL: `${suggestionEmbed.author.iconURL}` })
    .setTitle(`${suggestionEmbed.title}`)
    .setDescription(`${suggestionEmbed.description}`)
		.setFooter({ text: `accepted by ${interaction.member.user.tag}`, iconURL: `${interaction.member.displayAvatarURL()}` })
    .setColor('GREEN')
    .addFields(
      { name: 'Status', value: `\<:yesyesyesy:908293466579152907> nice idea! we\'re working on it!\n**Reason:** ${reason}`}
    )
    await suggestionMsg.edit({ embeds: [acceptedEmbed] })
		await interaction.reply({ content: 'Suggestion accepted!', ephemeral: true })
	}
}