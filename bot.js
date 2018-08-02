//Libraries / Dependencies / files 

const Discord = require('discord.js');
const bot  = new Discord.Client();
let prefix = "??";
var playCommand = prefix+"play";
const ytdl = require('ytdl-core');
const Fortnite = require('fortnite');
const client = new Fortnite(process.env.FT_KEY);
const agree= "âœ…";
var ADMIN_ID = '139039555180429312'; //YOUR DISCORD ID
var exec = require('child_process').exec;
var md = "```";
//END of Libraries / Dependencies / files 




bot.on('ready',()=> { //->>>>>>>>> WHEN THE BOT STARTS
bot.user.setStatus('idle');
	console.log('Bot connected !');
	 bot.user.setGame(`With dog toys and ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} servers.`);
});

bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
	var maDate = new Date() ;
	var h = maDate.getHours();
	var s = maDate.getSeconds();
	var min = maDate.getMinutes();
	const ADMIN_CHANNEL = bot.channels.get("405792135233798186","376472607714836490"); // ("ADMIN_SERVER_ID","ADMIN_SERVER_CHANNEL")
	var GUILD_NAME = guild.name;
	var GUILD_ID = guild.id ;
	var GUILD_MEMBERCOUNT = guild.memberCount;
	ADMIN_CHANNEL.send('```['+h+':'+min+':'+s+']'+'[New guild joined] : <'+GUILD_NAME+'  (id:'+GUILD_ID+') This guild has '+GUILD_MEMBERCOUNT+' members! >'+'```');
 
});

bot.on('message',async (message)=>	 { //->>>>>> WHEN A MESSAGE IS SENT 
	  if(message.author.bot) return;
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
	
	  if(command === "ping") {
		const m = await message.channel.send("Ping?");
		m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
	}
  
	  if(command === "setgame" && message.author.id==ADMIN_ID){ 
		var BOTgame = message.content.slice(prefix.length+command.length);
		bot.user.setGame(BOTgame);
	}
	
	  if(command === "say" && message.author.id==ADMIN_ID ){
		var BOTmsg = message.content.slice(prefix.length+command.length);
		message.delete();
		message.channel.send(BOTmsg);
	}
	  
	  if(command === "fortnite"){
		var pseudo = message.content.slice(prefix.length+command.length+1);
		client.getInfo(pseudo, 'pc').then(data =>message.channel.send("```css"+"\r\n"+"lifetime Stats of : "+pseudo+"\r\n"+"TOP1 : "+JSON.stringify(data.lifetimeStats[8].value)+"\r\n"+"Match played : "+JSON.stringify(data.lifetimeStats[7].value)+"\r\n"+"Win % : "+JSON.stringify(data.lifetimeStats[9].value)+"\r\n"+"Kills : "+JSON.stringify(data.lifetimeStats[10].value)+"\r\n"+"KD ratio : "+JSON.stringify(data.lifetimeStats[11].value)+"\r\n"+"Time played : "+JSON.stringify(data.lifetimeStats[13])+"\r\n"+"```"));
	}
	
	  if(command === "hello"){
		if(message.mentions.users.first()){
		BOTHIMSELF=message.mentions.users.first();
		if(BOTHIMSELF.id=='399986788753735690'){
		message.channel.send('hi');
		message.react("ðŸ‘‹");
		message.react('404312550554206208');
		message.channel.send('<:eeeh:404312550554206208> ');
												}
	  else{ return;}
											}
							}
	  
	  if(command === "avatar"){
		if(message.mentions.users.first()){
		var TaggedUSER = message.mentions.users.first();
		let avatar = TaggedUSER.displayAvatarURL ; 
		let embed = {description:"Here is the avatar of : "+TaggedUSER.username+" *[url]("+avatar+")*",image:{url:avatar}}
		 message.channel.send("", {embed});
		}else{return ;} 
	  }
	  
	  if(command === "dog"){
		var numberimage=Math.floor(Math.random() * Math.floor(imageurl.length));
		message.reply(imageurl[numberimage])
	  }
	  
	  if(command === "archillect"){
		var randomnum=Math.floor(Math.random() * Math.floor(183851));
		message.channel.send("http://archillect.com/"+randomnum);
	}
	
	  if(command === "hug") {	
		var hug = md+` 	
		*Hug*     *Hug*    *Hug*     *Hug*          *Hug*
		*Hug*     *Hug*    *Hug*     *Hug*       *Hug* *Hug*
		*Hug*     *Hug*    *Hug*     *Hug*      *Hug*   *Hug*
		*Hug*     *Hug*    *Hug*     *Hug*     *Hug*
		*Hug**Hug**Hug*    *Hug*     *Hug*    *Hug*
		*Hug**Hug**Hug*    *Hug*     *Hug*    *Hug*    *Hug**Hug*
		*Hug*     *Hug*    *Hug*     *Hug*     *Hug*     *Hug*
		*Hug*     *Hug*     *Hug*   *Hug*       *Hug*   *Hug*
		*Hug*     *Hug*      *Hug* *Hug*         *Hug* *Hug*
		*Hug*     *Hug*         *Hug*               *Hug* `+ md;
		message.reply(hug);
	}
	
	
});
var imageurl = new Array('https://i.imgur.com/kVLWTgy.jpg','https://i.imgur.com/W1PKAlu.jpg','https://i.imgur.com/DUvgdhr.jpg','https://i.imgur.com/L1oQhJU.png','https://i.imgur.com/o7rgMYY.png','https://i.imgur.com/tGaNmRB.jpg','https://i.imgur.com/MdcDpeZ.jpg','https://i.imgur.com/7z3dS5i.png','https://i.imgur.com/bfHeLH4.jpg','https://i.imgur.com/JIfsXR9.png','https://i.imgur.com/poM8Dhw.jpg','https://i.imgur.com/VKoaUwj.jpg','https://i.imgur.com/bY7ORrX.jpg','https://i.imgur.com/aQgoCfP.jpg','https://i.imgur.com/lWE2ZW0.jpg','https://i.imgur.com/hroKIcX.jpg','https://i.imgur.com/dpEXNbr.jpg','https://i.imgur.com/OVNLWpQ.jpg','https://i.imgur.com/yRCkRz4.jpg','https://i.imgur.com/iyITZLU.jpg','https://i.imgur.com/XjrwIF0.jpg','https://i.imgur.com/vUv9vrj.png','https://i.imgur.com/nzSAqDh.png','https://i.imgur.com/nHfrURC.jpg','https://i.imgur.com/q1MZa9H.jpg','https://i.imgur.com/pBgLa8q.jpg','https://i.imgur.com/ONBCmWV.png','https://i.imgur.com/nd1AwPm.jpg','https://i.imgur.com/3Likenl.jpg','https://i.imgur.com/b2wyJNH.png','https://i.imgur.com/ik1KTLZ.png','https://i.imgur.com/SulZnOp.jpg','https://i.imgur.com/4oBoujQ.png','https://i.imgur.com/EXDUlLZ.png','https://i.imgur.com/BvAw2U3.png','https://i.imgur.com/yOcd1bU.jpg','https://i.imgur.com/8QP41CO.png','https://i.imgur.com/Dm0WW9l.png','https://i.imgur.com/PGSdXTr.jpg','https://i.imgur.com/jjZas0f.png','https://i.imgur.com/dj6e0tQ.jpg','https://i.imgur.com/c13Lrvo.jpg','https://i.imgur.com/LjiYms7.jpg','https://i.imgur.com/0NaWjdi.jpg','https://i.imgur.com/3EMhtZm.jpg','https://i.imgur.com/iEG1SoE.jpg','https://i.imgur.com/eAKypGS.jpg','https://i.imgur.com/erZZwSB.jpg','https://i.imgur.com/UGyWuvb.jpg','https://i.imgur.com/cJIdeWa.jpg','https://i.imgur.com/rENtMLz.jpg','https://i.imgur.com/rENtMLz.jpg','https://i.imgur.com/vOYTuGO.jpg','https://i.imgur.com/r3931Gn.jpg','https://i.imgur.com/8AfsTfd.jpg','https://i.imgur.com/VZf2CSl.jpg','https://i.imgur.com/Utxzn1j.jpg','https://i.imgur.com/T98URFz.jpg','https://i.imgur.com/RdfWTIW.jpg','https://i.imgur.com/cBex5zo.jpg','https://i.imgur.com/UR2qJsC.png','https://i.imgur.com/iva8jMF.jpg','https://i.imgur.com/yPEb08M.jpg','https://i.imgur.com/L8SQGIB.jpg');

bot.login(process.env.BOT_TOKEN);
