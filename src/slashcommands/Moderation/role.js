const choicesArray = [
	{
		name: 'add',
		value: 'add',
	},
	{
		name: 'remove',
		value: 'remove',
	},
	{
		name: 'has',
		value: 'has',
	}
]

const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'role',
	description: 'manage roles for a user',
	perm: 'MANAGE_ROLES',
	options: [
		{
			name: 'action',
			description: 'action to perform with the role',
			type: 'STRING',
			choices: choicesArray,
			required: true,
		},
		{
			name: 'role',
			description: 'the role to perform action on',
			type: 'ROLE',
			required: true,
		},
		{
			name: 'user',
			description: 'the user to perform action on',
			type: 'USER',
			required: true
		},
		{
			name: 'reason',
			description: 'reason for this action',
			type: 'STRING',
		},
	],
	run: async (client, interaction) => {
		const action = interaction.options.getString('action');
		const role = interaction.options.getRole('role');
		const user = interaction.options.getMember('user');
		const reason = interaction.options.getString('reason');

		if (action === 'add') {
			if (user.roles.cache.has(role)) {
				interaction.reply({
					content: `${user} already has ${role} role!`,
					ephemeral: true
				})
			} else {
				user.roles.add(role, [reason || 'No reason given' + ' -' + interaction.member.user.id])
				await interaction.reply(`Successfully added ${role} to ${user}`)
			}
		} else if (action === 'remove') {
			if (!user.roles.cache.has(role.id)) {
				interaction.reply({
					content: `${user} doesn\'t have ${role} role!`,
					ephemeral: true
				})
			} else {
				user.roles.remove(role, [reason || 'No reason given' + ' -' + interaction.member.user.id])
				await interaction.reply(`Successfully removed ${role} from ${user}`);
			}
		} else if (action === 'has') {
			if (user.roles.cache.has(role)) {
				interaction.reply('The user has the role!');
			} else if (!user.roles.cache.has(role)) {
				interaction.reply('The user doesn\'t have the role!')
			}
		}
	}
}