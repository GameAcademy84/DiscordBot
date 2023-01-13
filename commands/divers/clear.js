const { Command } = require('@sapphire/framework');

module.exports = class ClearCommand extends Command {
	constructor(client2) {
		super(client2, {
			name: 'clear',
			memberName: 'clear',
			group: 'divers',
			aliases: ['delete', 'cleaning'],
			description: 'bot clean X messages',
	                guildOnly: true,
	                throttling: {
	                        usages: 2,
	                        duration: 10,
	                },
		});
	}

    
async run(message)
{
      if(message.author.id == 524954384808017943){ //si l'utilisateur est Xylcan
    		const prefix = '/clear '
    		let mess = message.content.slice(prefix.length).trim()+1; //arg nombre de message à supprimer
        	let channel = message.channel; //ID du channel utilisé
    		if(!isNaN(mess)) //Si arg n'est pas un nombre
          	  {
             	   mess = mess > 100 ? 100 : mess; // limite mess à 100 MAX 
              	   const currentTimestamp = Date.now(); //récupère la date du message
           
   			await channel.messages.fetch({limit : mess}).then(messages => {
    		try
       		 {
           		 var newMessages = [];
           		 newMessages=messages.filter(e=>e.createdTimestamp > currentTimestamp - 1123200000); //Filtre si le message < 13 jours
            	 channel.send('Messages supprimés');
           		 channel.bulkDelete(newMessages); //supprime les messages
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
              }};

      //await member.roles.add('895023579484274748');



