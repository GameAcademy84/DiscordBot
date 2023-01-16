const { Command } = require('@sapphire/framework');


module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'add_bde',
			memberName: 'add_bde',
			group: 'divers',
			aliases: ['bonjour', 'hi'],
			description: 'Add member to Adhérent',
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
                .setDescription('user to add BDE role')
                .setRequired(true)
                );
        })
    }

	async chatInputRun(interaction)
	{
		let user = interaction.options.getUser('user');
		let member = interaction.guild.members.cache.get(user.id);
		let adherentRole = interaction.guild.roles.cache.get("895023579484274748");
		interaction.channel.send(member.displayName + " devient adhérent et obtient le role " + adherentRole.name);
		// if(member != null)
		// {
		// 	if (member.roles.cache.has(adherentRole.id)) 
		// 	{
		// 		interaction.channel.send(member.displayName + " est déjà adhérent au BDE");
		// 	}
		// 	else
		// 	{
		// 		member.roles.add(adherentRole).catch(console.error);
		// 		await interaction.reply(member.displayName + " est désormais adhérent au BDE");
		// 	}
		// }
	}
};

      //await member.roles.add('895023579484274748');



