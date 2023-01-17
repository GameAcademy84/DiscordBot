const { Command, InteractionHandlerStore } = require('@sapphire/framework');
const { EmbedBuilder } = require('discord.js');


module.exports = class SaidCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'said',
			memberName: 'said',
			group: 'divers',
			aliases: ['annonce', 'message'],
			description: 'Send embed in current channel',
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
            .addStringOption(option => 
                option
                .setName('title')
                .setDescription('title')
                .setRequired(true)
			)
			.addStringOption(option => 
				option
				.setName('url')
				.setDescription('url')
				.setRequired(true)
			)
			.addStringOption(option => 
				option
				.setName('description')
				.setDescription('description')
				.setRequired(true)
			)
			.addStringOption(option => 
				option
				.setName('image_url')
				.setDescription('image url')
				.setRequired(false)
			)
        })
    }

async chatInputRun(interaction)
{
		const messageEmbed = new EmbedBuilder()
		.setColor(0x009EE0)
		.setTitle(interaction.options.getString('title'))
		.setURL(interaction.options.getString('url'))
		.setAuthor({ name: 'GAME ACADEMY', iconURL: 'https://cdn.discordapp.com/attachments/873180067977629766/1062661853228048384/logo.png', url: 'https://www.gameacademy.fr' })
		.setDescription(interaction.options.getString('description'))
		.setThumbnail('https://uploads-ssl.webflow.com/5fb51d39d7860f53100a7005/62039a4881efb147f51fa5b8_FullWhite_Game%20Academy_lateral-p-500.png');//GA BLANC
		if(interaction.options.getString('image_url') !== null)
			messageEmbed.setImage(interaction.options.getString('image_url'));


		await interaction.channel.send({ embeds: [messageEmbed] });  

            
        
    
}


	
};

      //await member.roles.add('895023579484274748');



