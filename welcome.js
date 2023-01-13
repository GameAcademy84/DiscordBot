const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = function (client) {
    const description = {
        name: "welcome",
        filename: "welcome.js",
        version: "1.0" //11.01.23
    }

	

	client.on("guildMemberAdd", member => //Vérifie l'arrivée d'un nouveau membre sur le serveur
    { 	
        	let channel = client.channels.cache.get('726869614272708749'); //ID du channel #Bienvenue
        	let avatar = member.user.displayAvatarURL({ size: 1024, dynamic: true }); // Récupère l'avatard du membre 
        
        	const messageEmbed = //Embed envoyé au nouveau membre
       		 {
			color:0x0099FF,
			title: 'GAME ACADEMY - École de concepteurs de jeux vidéo',
			url:'https://www.gameacademy.fr',
			author :{ name: 'GAME ACADEMY', iconURL: 'https://cdn.discordapp.com/attachments/873180067977629766/1062661853228048384/logo.png', url: 'https://www.gameacademy.fr' },
			description:('Bienvenue parmis nous **' + member.displayName + '**, \n\n **QUI SOMMES NOUS ?‍** \n\n**Game Academy** est une école supérieure de concepteurs de jeux vidéo formant des **[Game Developers](https://www.gameacademy.fr/formations/programmation)** et des **[Game Artists 2D/3D](https://www.gameacademy.fr/formations/infographie-2d-3d)** située à Avignon, dans le Vaucluse. \nGrâce à nos programmes 				éducatifs favorisant la pratique et les projets en équipes, **Game Academy** est un vrai tremplin vers les meilleurs studios de développement de jeux vidéo.'),
			
			fields: [
                { name: '\n', value: '\n\n\n' },
				{ name: '📖｜règles-du-serveur', value: 'Commence par accepter les [règles du serveur](https://discord.com/channels/524954689301643284/889078403901304873)' },
				{ name: '💬｜discussions', value: '[Une question ?](https://discord.com/channels/524954689301643284/889078403901304873)', inline: true },
                { name: '❓｜faq', value: '[Une infomation?](https://discord.com/channels/524954689301643284/896843475205652490)', inline: true },
				{ name: '🏫｜débouchés', value: '[Nos recrutements?](https://discord.com/channels/524954689301643284/850644094056529931)', inline: true },
				],
			
			image:{url:'https://uploads-ssl.webflow.com/5fb51d39d7860f53100a7005/62039a4881efb147f51fa5b8_FullWhite_Game%20Academy_lateral-p-500.png'},
			timestamp: new Date().toISOString()
       		 };
        
        	let url_background = 'http://image.noelshack.com/fichiers/2023/02/4/1673516015-welcomecard.png' //image backlground de la carte
			let url_card = 'https://api.popcat.xyz/welcomecard?background='+url_background+'&text1='+member.displayName+'&text2=Bienvenue+sur+le+serveur+de&text3=GAME+ACADEMY&avatar='+avatar; //création de l'image
			url_card = url_card.replace('.webp', '.png'); //remplace Webp to Png

        
			member.send({ embed: messageEmbed });
			channel.send(url_card);
    		 });
    
 	client.on("guildMemberRemove", member =>{ //Vérifie l'arrivée d'un nouveau membre sur le serveur
        	let avatar = member.user.displayAvatarURL({ size: 1024, dynamic: true }); // Récupère l'avatard du membre
   			let url_background = 'http://image.noelshack.com/fichiers/2023/02/4/1673516015-welcomecard.png' //image backlground de la carte
            let date = new Date(); //récupère la date 
            let timer = date.toLocaleString(); //converti la date en string 'XX/XX/XXXX XX.XX.XX'
			let url_card = 'https://api.popcat.xyz/welcomecard?background='+url_background+'&text1='+member.displayName+'&text2=A+quitté+le+serveur&text3='+timer+'&avatar='+avatar; //création de l'image
			url_card = url_card.replace('.webp', '.png'); //remplace Webp to Png
        	let channel = client.channels.cache.get('726865690736197693'); //ID du channel #Bot
        	channel.send(url_card);	
	});
};
    