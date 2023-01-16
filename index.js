const config = require("./config.json");

const { SapphireClient } = require('@sapphire/framework');
const { Client } = require('discord.js');
const {GatewayIntentBits } = require('discord.js');
const path = require('path');

const client = new SapphireClient({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers] });
const client2 = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.GUILD_VOICE_STATES] });

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
	jointocreate(client2);
const jointocreate2 = require("./jointocreate2"); //Lancement du bot Jointocreate2
	jointocreate2(client2);
//const welcome = require("./welcome"); //Lancement du bot Welcome
//	welcome(client);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------VÉRIFIE lE LANCEMENT DES CLIENTS--------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
client.on("ready", ()=>console.log("BOT Prêt")); 
client.login(config.TOKEN); //Jointocreate & Jointocreate2
client2.on("ready", () => console.log("client 2 Prêt"));
client2.login(config.TOKEN); //Jointocreate & Jointocreate2

