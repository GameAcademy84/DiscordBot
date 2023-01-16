const { Command } = require('@sapphire/framework');


module.exports = class ByeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'remove_bde',
			memberName: 'remove_bde',
			group: 'divers',
			aliases: ['aurevoir', 'bye'],
			description: 'Remove adhérent role to member',
			//userPermissions: ['ADMINISTRATOR'], // l'utilisateur doit être administrateur pour exécuter la commande
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
                .setDescription('user to remove Adhérent role')
                .setRequired(true)
                );
        })
	}
	
	async chatInputRun(interaction)
	{
		let user = interaction.options.getUser('user');
		let member = interaction.guild.members.cache.get(user.id);
		let adherentRole = interaction.guild.roles.cache.get("895023579484274748");
		if(member != null)
		{
			if (!member.roles.cache.has(adherentRole.id)) 
			{
				interaction.channel.send(member.displayName + " n'est pas adhérent au BDE");
			}
			else
			{
				member.roles.remove(adherentRole).catch(console.error);
				await interaction.reply(member.displayName + " n'est plus adhérent au BDE");
			}
		}
	}

	
};

      //await member.roles.add('895023579484274748');



