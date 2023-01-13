const config = require("./config.json");

const { SapphireClient } = require('@sapphire/framework');
const {GatewayIntentBits } = require('discord.js');
const path = require('path');

const client = new SapphireClient({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers]});

// client2.registry //Création du registre des commandes disponibles NE FONCTIONNE PAS AU 11/01/23
//     .registerDefaultTypes()
//     .registerGroups([
//         ['divers', 'Divers'], // la première valeur correspond à la section 'group' de votre commande, la deuxième valeur sera utilisée pour l'affichage du nom du groupe, dans l'aide par exemple.
//     ])
//     .registerCommandsIn(path.join(__dirname, 'commands'));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------INSTANCE DES CLIENTS--------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

const jointocreate = require("./jointocreate"); //Lancement du bot Jointocreate
	jointocreate(client);
const jointocreate2 = require("./jointocreate2"); //Lancement du bot Jointocreate2
	jointocreate2(client);
//const welcome = require("./welcome"); //Lancement du bot Welcome
//	welcome(client);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------VÉRIFIE lE LANCEMENT DES CLIENTS--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
client.on("ready", ()=>console.log("BOT Prêt")); 
client.login(config.TOKEN); //Jointocreate & Jointocreate2

