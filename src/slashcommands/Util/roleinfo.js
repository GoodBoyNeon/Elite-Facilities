const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'roleinfo',
	description: 'get information on a role',
	options: [
		{
			name: 'role',
			description: 'the role to get information on',
			type: 'ROLE',
			required: true
		}
	],
	run: async (client, interaction) => {
		const role = interaction.options.getRole('role');

		const roleinfoEmbed = new MessageEmbed()
		.setTitle
	}
}