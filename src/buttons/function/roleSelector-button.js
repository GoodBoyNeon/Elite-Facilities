const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'roleSelector-button',
	run: async (client, interaction) => {
		let member = interaction.member;
		
		const myRolesEmbed = new MessageEmbed()
		.setTitle(`Roles for ${interaction.member.user.username}`)
		.setDescription(`${member.roles.cache.map(r => r).join(' ').replace('@everyone', ' ') || 'You got no roles apparently...'}`)
		interaction.reply({
			embeds: [myRolesEmbed],
			ephemeral: true
		})
	}
}