const { ChannelType } = require("discord.js");
const config = require("./config");
const jointocreatemap2 = new Map();
module.exports = function (client) {
    const description = {
        name: "jointocreate2",
        filename: "jointocreate2.js",
        version: "3.2"
    }
     //SECURITY LOOP
  new Promise(resolve => {
    setInterval(() => {
      resolve(2);
        try{
          const guild = client.guilds.cache.get(config.guildId);
          const channels = guild.channels.cache.map(ch => ch.Id)
          for (let i = 0; i < channels.length; i++) {
            const key = `tempvoicechannel_${guild.Id}_${channels[i]}`;
            if (jointocreatemap2.get(key)) {
              var vc = guild.channels.cache.get(jointocreatemap2.get(key));
              if (vc.members.size < 1) {
                jointocreatemap2.delete(key);
                return vc.delete();
              } else {}
            }
          }
      }catch{}
    }, 10000)
  })

    
//log that the module is loaded
    console.log(` :: ⬜️ Module: ${description.name} | Loaded version ${description.version} from ("${description.filename}")`)
//voice state update event to check joining/leaving channels
    client.on("voiceStateUpdate", (oldState, newState) => {
  // SET CHANNEL NAME STRING
  //IGNORE BUT DONT DELETE!
  let oldparentname = "unknown"
  let oldchannelname = "unknown"
  let oldchanelId = "unknown"
  if (oldState && oldState.channel && oldState.channel.parent && oldState.channel.parent.name) oldparentname = oldState.channel.parent.name
  if (oldState && oldState.channel && oldState.channel.name) oldchannelname = oldState.channel.name
  if (oldState && oldState.channelId) oldchanelId = oldState.channelId
  let newparentname = "unknown"
  let newchannelname = "unknown"
  let newchanelId = "unknown"
  if (newState && newState.channel && newState.channel.parent && newState.channel.parent.name) newparentname = newState.channel.parent.name
  if (newState && newState.channel && newState.channel.name) newchannelname = newState.channel.name
  if (newState && newState.channelId) newchanelId = newState.channelId
  if (oldState.channelId) {
      if (typeof oldState.channel.parent !== "undefined")  oldChannelName = `${oldparentname}\n\t**${oldchannelname}**\n*${oldchanelId}*`
       else  oldChannelName = `-\n\t**${oldparentname}**\n*${oldchanelId}*`
  }
  if (newState.channelId) {
      if (typeof newState.channel.parent !== "undefined") newChannelName = `${newparentname}\n\t**${newchannelname}**\n*${newchanelId}*`
      else newChannelName = `-\n\t**${newchannelname}**\n*${newchanelId}*`
  }
  // JOINED V12
  if (!oldState.channelId && newState.channelId) {
    if(newState.channelId !== config.JOINTOCREATECHANNEL2) return;  //if its not the jointocreatechannel2 skip
    jointocreatechannel2(newState);   //load the function
  }
  // LEFT V12
  if (oldState.channelId && !newState.channelId) {
            //get the jointocreatechannel2 Id from the map
          if (jointocreatemap2.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`)) {
            //fetch it from the guild
            var vc = oldState.guild.channels.cache.get(jointocreatemap2.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`));
            if(vc == 'undefined')
              console.log("Undefined channel")
            else
            {
            //if the channel size is below one
            if (vc.members.size < 1) { 
              //delete it from the map
              jointocreatemap2.delete(`tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`); 
              //log that it is deleted
              console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Vocal Détruit")
              //delete the voice channel
              return vc.delete(); 
          }
          }
        }
  }
  // Switch v12
  if (oldState.channelId && newState.channelId) {
  
    if (oldState.channelId !== newState.channelId) {
      //if its the join to create channel
      if(newState.channelId===config.JOINTOCREATECHANNEL2) 
      //make a new channel
      jointocreatechannel2(oldState);  
      //BUT if its also a channel ín the map (temp voice channel)
      if (jointocreatemap2.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`)) {
        //fetch the channel
        var vc = oldState.guild.channels.cache.get(jointocreatemap2.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`));
        if(vc == 'undefined')
              console.log("Undefined channel")
            else
            {
        //if the size is under 1
        if (vc.members.size < 1) { 
          //delete it from the map
          jointocreatemap2.delete(`tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`); 
         //log it 
          console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Channel vIde -> Destruction")
        //delete the room
          return vc.delete(); 
      }
      else {
      }
      }
    }
    }
}
  })
    async function jointocreatechannel2(user) {
      //log it 
      console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Channel Classe crée")
      //user.member.user.send("This can be used to message the member that a new room was created")
      await user.guild.channels.create({
        name:`🏫｜Classe de ${user.member.user.username}`, 
        type: ChannelType.GuildVoice,
        parent: "524976426244374560", //user.channel.parent.Id, 
      }).then(async vc => {
        //move user to the new channel
        user.setChannel(vc);
        //set the new channel to the map
        jointocreatemap2.set(`tempvoicechannel_${vc.guild.id}_${vc.id}`, vc.id);
      });
    }
}

//853706301527556126

