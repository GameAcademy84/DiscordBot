const { Command } = require('@sapphire/framework');
const { MembershipScreeningFieldType } = require('discord.js');


module.exports = class MuteCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'mute',
			memberName: 'mute',
			group: 'divers',
			aliases: ['muting', 'silence'],
			description: 'mute a discord member',
	                guildOnly: true,
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
		});
	}
	registerApplicationCommands(registry)
    {
        registry.registerChatInputCommand((builder)=>
        {
            builder
            .setName(this.name)
            .setDescription(this.description)
            .addUserOption(option => 
                option
                .setName('user')
                .setDescription('mute the discord user')
                .setRequired(true)
                )
			.addStringOption(option => 
				option
				.setName('reason')
				.setDescription('reason to mute')
				.setRequired(true)
				)
        })
    }

	async chatInputRun(interaction)
	{
		let user = interaction.options.getUser('user');
		let member = interaction.guild.members.cache.get(user.id);
		let muteRole = interaction.guild.roles.cache.get("933000009161523220");
		if(member != null)
		{
			if (member.roles.cache.has(muteRole.id)) 
			{
				interaction.channel.send(member.displayName + " est déjà **mute**");
			}
			else
			{
				member.roles.add(muteRole).catch(console.error);
				member.send("Vous avez été **mute** pour la raison suivant : " + interaction.options.getString('reason'));
				await interaction.reply("@"+member.displayName + " est désormais **muet**");
			}
		}
	}
};

      //await member.roles.add('895023579484274748');



