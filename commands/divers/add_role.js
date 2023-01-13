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

async run(message)
{

		let myRole = message.guild.roles.cache.get("895023579484274748");
		let bdeRole = message.guild.roles.cache.get("525221753581207573");
		let member = message.mentions.members.first();
    
    	if(member != null)
        {
			if (message.member.roles.cache.has(bdeRole.id)){ 
				if (member.roles.cache.has(myRole.id)) {
					await message.channel.send(member.displayName + " est déjà adhérent au BDE");
				}
				else{
					await member.roles.add(myRole).catch(console.error);
					await message.channel.send(member.displayName + " est désormais adhérent au BDE");
				}
		
		}
		else	
			await message.channel.send("Vous n'avez pas l'autorisation pour effectuer cette commande");
       }
            }


	
};

      //await member.roles.add('895023579484274748');



