const { Command } = require('@sapphire/framework');
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

    
async chatInputRun(interaction)
{
      //let member = message.mentions.members.first();
    const prefix = '/test '
    	let mess = interaction.message.content.slice(prefix.length).trim()+1;
        let channel = interaction.message.channel; //ID du channel #Bot
    	if(!isNaN(mess))
            {
                mess = mess > 100 ? 100 : mess;
                const currentTimestamp = Date.now();
                let nb = 0;
     await channel.messages.fetch({limit : mess}).then(messages => {
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



