const { Command } = require('@sapphire/framework');
const { isMessageInstance } = require('@sapphire/discord.js-utilities');
const Discord = require("discord.js");

module.exports = class SaidCommand extends Command {
	constructor(client2) {
		super(client2, {
			name: 'test',
			memberName: 'test',
			group: 'divers',
			aliases: ['tests', 'testing'],
			description: 'GA  someting on discord server',
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
            builder.setName(this.name).setDescription(this.description);
        })
    }

    
async messageRun(message, args)
{
    const nb = await args.pick('number');
      //let member = message.mentions.members.first();
        let channel = msg.channel; //ID du channel #Bot
    	if(!isNaN(nb))
            {
                nb = nb >= 100 ? 100 : nb+1;
                const currentTimestamp = Date.now();
     await channel.messages.fetch({limit : nb}).then(messages => {
    	try
        {
            var newMessages = [];
            newMessages=messages.filter(e=>e.createdTimestamp > currentTimestamp - 1123200000);
            channel.send('Messages supprimés');
            channel.bulkDelete(newMessages);
        }
         catch (error)
             {
                 console.log(error);
             }
     });
        //await message.delete();
            }
	 
      
		//member.send('ok');
    	
    	//client_Test.channels.cache.get('726865690736197693').send('test');
              }
              };

      //await member.roles.add('895023579484274748');



