const { Command } = require('@sapphire/framework');
const { EmbedBuilder } = require('discord.js');


module.exports = class SaidCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'said',
			memberName: 'said',
			group: 'divers',
			aliases: ['annonce', 'message'],
			description: 'GA said someting on discord server',
	                guildOnly: true,
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
		});
	}

async run(message)
{
	if(message.author.id == 524954384808017943)
        {
		var prefix = "/said";
		var messageSlice = message.content.slice(prefix.length).trim();
        message.delete();
		const Args = messageSlice.split("##");
            
        const messageEmbed = 
        {
		color:0x0099FF,
		title:Args[0],
		url:Args[1],
		author :{ name: 'GAME ACADEMY', iconURL: 'https://cdn.discordapp.com/attachments/873180067977629766/1062661853228048384/logo.png', url: 'https://www.gameacademy.fr' },
		description:Args[2],
		thumbnail:'https://uploads-ssl.webflow.com/5fb51d39d7860f53100a7005/62039a4881efb147f51fa5b8_FullWhite_Game%20Academy_lateral-p-500.png',//GA BLANC
		/*.addFields(
			{ name: 'Regular field title', value: 'Some value here' },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
		)
		.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })*/
		image:{url:Args[3]},
		timestamp: new Date().toISOString()
        };
		//.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

		await message.channel.send({ embed: messageEmbed });  
        //await message.channel.send(Args[0] + Args[1] + Args[2] + Args[3]);  
            
            
		//message.delete();
		//messageSlice = messageSlice.replace(/(https?:\/\/[^\s]+)/, '');
        //await message.channel.send(messageSlice).then(message2 => message2.edit(messageSlice.replace(/(https?:\/\/[^\s]+)/, '')));
       // const msg_attachment = message.attachment;  
		//await message.channel.send(messageSlice).then(message2=>message2.edit();
        //await message.edit("edition");
		
        }
    else
  		await message.channel.send("tu n'es pas authorisé à faire ça.");
    
}


	
};

      //await member.roles.add('895023579484274748');



