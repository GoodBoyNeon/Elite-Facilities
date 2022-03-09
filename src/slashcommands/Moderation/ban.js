const {
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require("discord.js");

module.exports = {
    name: 'ban',
    description: 'bans a member',
    perm: 'BAN_MEMBER',
    options: [{
            name: 'user',
            description: 'the user to perform action on',
            type: 'USER',
            required: true,
        },
        {
            name: 'reason',
            description: 'reason to ban the user',
            type: 'STRING',
        },
    ],
    run: async (client, interaction) => {
        try {
            const user = interaction.options.getMember('user');
            const reason = interacton.options.getString('reason') || 'No reason given';

            await interaction.guild.members.ban(user, reason);
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                    .setTitle('Member banned!')
                    .setDescription(`Successfully banned ${user}!\n**Reason:** ${reason}\n**Responsible Moderator:** ${interaction.member}`)
                    .setAuthor({
                        name: `${user}`,
                        iconURL: `${inetraction.member.displayAvatarURL(true)}`,
                    })
                    .setTimestamp()
                ]
            })
            await user.send({
                embeds: [
                    new MessageEmbed()
                    .setTitle('You Were Banned From Elite Hub!')
                    .setDescription(`You have been banned from Elite Hub.\n\n**Reason:** ${reason}\n**Responsible Moderator:** ${interaction.member}`)
                    .setFooter({
                        text: 'Dm GoodBoyNeon#2424 to appeal your ban!',
                    })
                    .setTimestamp()
                ]
            })
        } catch (err) {
            console.error(err)
            interaction.reply({
                content: 'Error executing the command, please ring the devs!',
                ephemeral: true,
            });
        }
    },
};