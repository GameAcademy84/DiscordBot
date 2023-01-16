const { ChannelType } = require("discord.js");
const config = require("./config");
const jointocreatemap = new Map();
module.exports = function (client) {
    const description = {
        name: "jointocreate",
        filename: "jointocreate.js",
        version: "3.2"
    }
     //SECURITY LOOP
  new Promise(resolve => {
    setInterval(() => {
      resolve(2);
        try{
          const guild = client.guilds.cache.get(config.guildid);
          const channels = guild.channels.cache.map(ch => ch.id)
          for (let i = 0; i < channels.length; i++) {
            const key = 'tempvoicechannel_${guild.id}_${channels[i]}';
            if (jointocreatemap.get(key)) {
              var vc = guild.channels.cache.get(jointocreatemap.get(key));
              if (vc.members.size < 1) {
                jointocreatemap.delete(key);
                return vc.delete();
              } else {}
            }
          }
      }catch{}
    }, 10000)
  })

    
//log that the module is loaded
    console.log(' :: ⬜️ Module: ${description.name} | Loaded version ${description.version} from ("${description.filename}")')
//voice state update event to check joining/leaving channels
    client.on("voiceStateUpdate", (oldState, newState) => {
        console.log("on voice state update");
  // SET CHANNEL NAME STRING
  //IGNORE BUT DONT DELETE!
        let oldparentname = "unknown";
        let oldchannelname = "unknown";
        let oldchanelid = "unknown";
        if (oldState && oldState.channel && oldState.channel.parent && oldState.channel.parent.name)
            oldparentname = oldState.channel.parent.name;
        if (oldState && oldState.channel && oldState.channel.name)
            oldchannelname = oldState.channel.name;
        if (oldState && oldState.channelId)
            oldchanelid = oldState.channelId;
        let newparentname = "unknown";
        let newchannelname = "unknown";
        let newchanelid = "unknown";
        if (newState && newState.channel && newState.channel.parent && newState.channel.parent.name)
            newparentname = newState.channel.parent.name;
        if (newState && newState.channel && newState.channel.name)
            newchannelname = newState.channel.name;
        if (newState && newState.channelId)
            newchanelid = newState.channelId;
        if (oldState.channelId)
        {
      if (typeof oldState.channel.parent !== "undefined")
          oldChannelName = '${oldparentname}\n\t**${oldchannelname}**\n*${oldchanelid}*';
      else
          oldChannelName = '-\n\t**${oldparentname}**\n*${oldchanelid}*';
  }
        if (newState.channelId)
        {
            if (typeof newState.channel.parent !== "undefined")
                newChannelName = '${newparentname}\n\t**${newchannelname}**\n*${newchanelid}*';
            else
                newChannelName = '-\n\t**${newchannelname}**\n*${newchanelid}*';
  }
  // JOINED V12
  if (!oldState.channelId && newState.channelId) {
      if (newState.channelId !== config.JOINTOCREATECHANNEL)
          return;  //if its not the jointocreatechannel skip
    jointocreatechannel(newState);   //load the function
  }
  // LEFT V12
  if (oldState.channelId && !newState.channelId) {
    console.log("Leaved channel");
            //get the jointocreatechannel id from the map
          if (jointocreatemap.get('tempvoicechannel_${oldState.guild.id}_${oldState.channelId}')) {
            //fetch it from the guild
            var vc = oldState.guild.channels.cache.get(jointocreatemap.get('tempvoicechannel_${oldState.guild.id}_${oldState.channelId}'));
            //if the channel size is below one
            if (vc.members.size < 1) { 
              //delete it from the map
              jointocreatemap.delete('tempvoicechannel_${oldState.guild.id}_${oldState.channelId}'); 
              //log that it is deleted
              console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Channel vide -> Destruction")
              //delete the voice channel
              return vc.delete(); 
          }
            else {
            }
          }
  }
  // Switch v12
  if (oldState.channelId && newState.channelId) {
  
    if (oldState.channelId !== newState.channelId) {
      //if its the join to create channel
      if(newState.channelId===config.JOINTOCREATECHANNEL) 
      //make a new channel
      jointocreatechannel(oldState);  
      //BUT if its also a channel ín the map (temp voice channel)
      if (jointocreatemap.get('tempvoicechannel_${oldState.guild.id}_${oldState.channelId}')) {
        //fetch the channel
        var vc = oldState.guild.channels.cache.get(jointocreatemap.get('tempvoicechannel_${oldState.guild.id}_${oldState.channelId}'));
        //if the size is under 1
        if (vc.members.size < 1) { 
          //delete it from the map
          jointocreatemap.delete('tempvoicechannel_${oldState.guild.id}_${oldState.channelId}'); 
         //log it 
          console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " ::  Channel vide -> Destruction")
        //delete the room
          return vc.delete(); 
      }
      else {
      }
      }
    }
}
  })
    async function jointocreatechannel(user) {
      //log it 
      console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Channel Gaming crée")
      //user.member.user.send("This can be used to message the member that a new room was created")
      await user.guild.channels.create({
        name: '👥｜Vocal de ' + user.member.user.username,
        type: ChannelType.GuildVoice,
        parent: "850056066008088587", //user.channel.parent.id, //user.channel.parent.id, //or set it as a category id //
        
      }).then(async vc => {
        //move user to the new channel
        user.setChannel(vc);
        //set the new channel to the map
        jointocreatemap.set('tempvoicechannel_${vc.guild.id}_${vc.id}', vc.id);
        //change the permissions of the channel
        // await vc.overwritePermissions([
        //   {
        //     id: user.id,
        //     allow: ['MANAGE_CHANNELS'],
        //   },
        //   {
        //     id: "853706301527556126", //user.guild.id,
        //     allow: ['VIEW_CHANNEL'],
        //   },
        // ]);
      });
    }
}

//853706301527556126

