const { Command } = require('@sapphire/framework');


module.exports = class ByeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'remove_bde',
			memberName: 'remove_bde',
			group: 'divers',
			aliases: ['aurevoir', 'bye'],
			description: 'Add member to Adhérent',
			//userPermissions: ['ADMINISTRATOR'], // l'utilisateur doit être administrateur pour exécuter la commande
	                guildOnly: true,
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
		});
	}

async run(message)
{
	
		let myRole = message.guild.roles.cache.get("895023579484274748");
		let bdeRole = message.guild.roles.cache.get("525221753581207573");
		let member = message.mentions.members.first();
    
    if(member != null)
        {
		if (message.member.roles.cache.has(bdeRole.id)){ 
			if (!member.roles.cache.has(myRole.id)) {
  				await message.channel.send(member.displayName + " n'est pas adhérent au BDE");
			}
			else{
			await member.roles.remove(myRole).catch(console.error);
			await message.channel.send(member.displayName + " n'est plus adhérent au BDE");
			}
		}
		else
			await message.channel.send("Vous n'avez pas l'autorisation pour effectuer cette commande");
        }
        
}

	
};

      //await member.roles.add('895023579484274748');



