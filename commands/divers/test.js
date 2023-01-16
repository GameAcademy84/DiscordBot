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
            builder
            .setName(this.name)
            .setDescription(this.description)
            .addNumberOption(option => 
                option
                .setName('nb')
                .setDescription('how many messages to delete')
                .setRequired(true)
                );
        })
    }

    async execute(interaction)
    {

    }
    
async chatInputRun(interaction)
{
    let nb = interaction.options.getNumber('nb');
        let channel = interaction.channel; //ID du channel #Bot
        console.log(nb);
    	if(!isNaN(nb))
            {
                nb = nb >= 100 ? 100 : nb;
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
            await interaction.reply(`deleted ${nb} messages`);
	 
      
		//member.send('ok');
    	
    	//client_Test.channels.cache.get('726865690736197693').send('test');
              }
              };

      //await member.roles.add('895023579484274748');



