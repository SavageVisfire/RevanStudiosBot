const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
var token = 'NTA0NDc0MzI2MTEyNzk2Njg0.DrFj7w.5fDoYQB2IIgb2TRZE_pmWSsKlU0'
var prefix = '!'
var targettime= new Date("November 19, 2018 00:00:01").getTime();
let shutdownstring = Math.random().toString(36).substring(7);
console.log("Shutdown Code", shutdownstring);
x = null
artworkorderarray = [];
client.on("ready",function(ready){
client.user.setActivity(`For ${prefix}help`, {type: 'LISTENING'})
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
  client.channels.get('501518712239685662').send('Bot is now on')
});
client.on('message', function(message){
if(message.channel.id != 500798063250636800){
BadWords = ["anal","a n a l","wtaf","anus","a n u s","arse","a r s e","ass","a s s","ballsack","b a l l s a c k","balls","b a l l s","biatch","b i a t c h","bloody","b l o o d y","blowjob","b l o w j o b","blow job","bollock","b o l l o c k","bollok","b o l l o k","boner","b o n e r","damn","boob","b o o b","buttplug","b u t t p l u g","clitoris","c l i t o r i s","cock","c o c k","cunt","c u n t","dick","d i c k","dildo","d i l d o","fag","f a g","faggot","f a g g o t","feck","f e c k","fellate","f e l l a t e","fellatio","f e l l a t i o","felching","f e l c h i n g","fudgepacker","f u d g e p a c k e r","fudge packer","flange","f l a n g e","goddamn","god damn","g o d d a m n","hell","h e l l","homo"," h o m o","ho","h o","jerkoff","jerk off","j e r k o f f","lmao","l m a o","lmfao","l m f a o","piss","p i s s","prick","p r i c k","pube","p u b e","pussy","p u s s y","queer","q u e e r","scrotum","s c r o t u m","sex","s e x","slut","s l u t","smegma","s m e g m a","tit","t i t","twat","t w a t","wank","w a n k","whore","w h o r e","wtf","w t f","touchbase","fuck","f u c k","fk","f k","shit","s h i t","s hit","sh1t","s h 1 t","bitch","b i t c h","nigger","n i g g e r","nigga","n i g g a","nig","n i g","bastard","b a s t a r d","homo","h o m o","gay","g a y","lesbian","l e s b i a n","penis","p e n i s","virgin","v i r g i n","vagina","v a g i n a"];
var messageforbadcheck = message.content.toLowerCase().replace(/\s/g,'');
for(i =0;i<BadWords.length;i++){
if(messageforbadcheck.includes(BadWords[i])){
message.delete();
message.channel.send("Please Don't Use That Langauge.");
console.log(BadWords[i]);
const swearlogEmbed = new RichEmbed()
.setColor(0xFF0000)
.setAuthor('Curse!')
.addField(`${message.member.displayName}`,`CURSED!!!`)
.addField(`ID OF USER!`,`${message.author.id}`)
.addField(`Channel Name`,`"${message.channel.name}"`)
.addField(`Message!`,`${message.content}`)
.addField('Bad Word Inside!',`${BadWords[i]}`)
client.channels.get('500800806556139531').send(swearlogEmbed);
}
}
if(message.content.toLowerCase().replace(/\s/g,'').includes('apple')){
    if(message.content.toLowerCase().replace(/\s/g,'').includes('good')){
        message.delete()
        message.channel.send("Please Don't Use That Langauge, Apple is *censored* and we all know it.(Sorry, Tim Apple, but android is 10x better)")
    }
}
}
//Shutdown
if(message.content == `${prefix}shutdown ${shutdownstring}`){
client.channels.get('501518712239685662').send(`${message.author.id} or <@${message.author.id}> has initiated shutdown`).then(channel =>{
        process.exit();
    })
}
//nopingsrock
if(message.content == '<:nopingsrock:515613126448644098>'){
    message.channel.send(`<@${message.author.id}>`)
}
if(message.content == `${prefix}shutdown 3141`){
    if(message.author.id == `368561678193000449`){
    client.channels.get('501518712239685662').send(`${message.author.id} or <@${message.author.id}> has initiated shutdown`).then(channel =>{
            process.exit();
        })
    }
}
setInterval(function(){
    if(Date.now() == targettime){
        client.channels.get('500798063250636800').send('for(i=0;i<stuff.length;i++){\nconsole.log(stuff[i])}')
    }
},1)
//Shutdown Code Regen
if(message.content == `${prefix}shutdown regenerate`){
    if(message.member.hasPermission('ADMINISTRATOR')){
    shutdownstring = Math.random().toString(36).substring(7);
    console.log("Shutdown Code", shutdownstring);
    }
}
//Dice Roll
if(message.content.toLowerCase().startsWith(prefix + 'rolldice')){
var diceroll = Math.floor((Math.random() * 6) + 1)
message.channel.send('You rolled a ' + diceroll);
} 
//Delete Messages In Music Channel
if(message.channel.id == 500776477760159745){
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        if(message.author.id != 235088799074484224){
            if(message.author.id != 504474326112796684){
        message.delete(10000).then(msg => {
            console.log('Deleted Message in Music Channel')
        }).catch();
    }
    }
    }
}
if(message.content.startsWith(prefix + 'order')){
    const orderembed = new RichEmbed()
.setTitle('Revan Studios Order')
.setColor(0xFF0000)
.setAuthor('Bot Made by Visfire#2296') 
.addField('Please type in "Confirm Artwork" If You Would Like to Order Artwork','Be warned that misusing the bot will get you banned.')
    //message.channel.send('What type of order do you want? Answer within 30 seconds with "Artwork" or "Coding".')
message.channel.send(orderembed)
    .then(() => {
  message.channel.awaitMessages(response => (response.content.toLowerCase().replace(/\s/g,'') === 'confirmartwork'), {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
      if(collected.first().content.toLowerCase().replace(/\s/g,'') == 'confirmartwork'){
        
        message.guild.createChannel(`${message.author.id}`,'text',[{id: message.author.id,allow: ['READ_MESSAGES','SEND_MESSAGES']},{id: message.guild.id,deny: ["VIEW_CHANNEL"]}],`${message.author.id} wants to place an order`).then( channel => {
            channel.setParent("511333719651647520").then(channel => {
                x = channel.id;
                console.log(x);
                console.log(channel.parent.children.size);
                channel.setName(`Order #${channel.parent.children.size}`);
                client.channels.get(x).send(`Please enter a description of the artwork you would like. Use the format \n${prefix}description "your description here"`);
                client.channels.get('513113192386265099').send(`${message.member.displayName} or <@${message.author.id}> wants to order artwork`);
                artworkorderarray.push(message.author.id);
                artworkorderarray.push(channel.id);
            })
        }).catch(error => {
            console.error(error);
        });
        
    }
    })
    .catch(() => {
      message.channel.send('30 seconds has passed!');
      return;
    });
});
}
//Description
if(message.content.toLowerCase().startsWith(`${prefix}description`)){
for(descchecknum =0;descchecknum < artworkorderarray.length;descchecknum++){
if(message.author.id == artworkorderarray[descchecknum]){
if(message.channel.id == artworkorderarray[descchecknum+1]){
const descriptionembed = new RichEmbed()
.setColor(0xFF0000)
.setAuthor('Order To Claim')
.addField(`${message.member.displayName}`,`Wants to Order Artwork`)
.addField(`Description`,`"${message.content.slice(prefix.length + 11)}"`)
.addField(`Channel Name`,`#${message.channel.name}`)
client.users.get('445002121545383938').send(descriptionembed)
message.channel.send('Your description has succesfully been set. A representative will be here soon.');
}else{message.reply('Please do that in your designated channel')}
}else{`It seems that you have not initiated an order yet. Please start on by doing ${prefix}order`}
}
}
    if (message.content.toUpperCase().startsWith(prefix + 'PURGE')) {
        async function purge() {
            if (!message.member.hasPermission("MANAGE_MESSAGES")) { 
                message.channel.send('You need the manage messages permission to use this command.');
                return;
            }
    
            
            if (isNaN(message.content.slice(prefix.length).split(" ").slice(1)[0])) {
                message.channel.send('Please use a number as your arguments. \nUsage: ' + prefix + 'purge <amount>');
                return;
            }
            if ((message.content.slice(prefix.length).split(" ").slice(1)[0]) > 100 ) {
                message.channel.send('You can only purge a max of 100 messages at a time');
                return;
            }
            const fetched = await message.channel.fetchMessages({limit: message.content.slice(prefix.length).split(" ").slice(1)[0]});
            console.log(fetched.size + ' messages found, deleting...');
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`));
            message.channel.send(`Succesfully purged ${fetched.size} messages`).then(msg => {
                msg.delete(5000)
              }).catch();
        }
        purge();
    };
//Ping Check
	if(message.content.toLowerCase().startsWith(prefix + 'ping')){
        if (!message.member.hasPermission("ADMINISTRATOR")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('You need to be an admin to use this command.'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }
		message.channel.send('Pong! '+ Math.round(client.ping) + ' ms!');
    }
//Runtime
if(message.content.toLowerCase().startsWith(prefix + 'runtime')){
    if (!message.member.hasPermission("ADMINISTRATOR")) { // This checks to see if they DONT have it, the "!" inverts the true/false
            message.channel.send('You need to be an admin to use this command.'); // This tells the user in chat that they need the role.
            return; // this returns the code, so the rest doesn't run.
        }
    message.channel.send('Bot has been running for '+ process.uptime() + ' seconds!');
}
//Countdown
if(message.content.toLowerCase().startsWith(prefix + 'countdown')){
		var tt=( 1554091200000- Date.now())
		var ttsraw = tt/1000
		var ttmraw = ttsraw/60
		var tthraw = ttmraw/60
		var ttdraw = tthraw/24
		var tts = Math.trunc(ttsraw)
		var ttm = Math.trunc(ttmraw)
		var tth = Math.trunc(tthraw)
		var ttd = Math.trunc(ttdraw)
		var ttsfinal = tts - (ttm*60) + 's '    
		var ttmfinal = ttm - (tth*60) + 'm '
		var tthfinal = tth - (ttd*24) + 'h '
		
        message.reply("There is " + ttd + 'd ' + tthfinal + ttmfinal + ttsfinal + " left until Revan Studios Launches.") 
    }
});
client.login(token)
