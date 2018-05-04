const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

function doMagic8BallVoodoo() {
    var rand = ['davaguco:internet73',
    'adamboerema@gmail.com:acb7311988',
    'raziel.secur@gmail.com:z1x2q3c4',
    'amikaysbokays@aol.com:meow2000',
    'satch3l@gmail.com:sevamix',
    'brandonp.pwns@yahoo.com:phung11',
    'colovos.kevin@gmail.com:as506345',
    'jackedwardshey@hotmail.co.uk:horseey12',
    'halliemrizek@gmail.com:kaulitz2',
    'charlielewisnz@gmail.com:11churchill',
    'juldeleon19@gmail.com:angel555',
    'loco.qwer@gmail.com:Kalejdoskop1',
    'mnieckula@yahoo.com:graalfox87',
    'krishmuttu9@gmail.com:Krishnam9',
    'austincruz8@gmail.com:jarjarac8'];

    return rand[Math.floor(Math.random()*rand.length)];
}

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  if(command === "kick") {
    if(!message.member.roles.some(r=>["kick"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this! **MAKE SURE YOU HAVE ROLE 'KICK'**");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }

  if(command === "ban") {
    if(!message.member.roles.some(r=>["ban"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this! **MAKE SURE YOU HAVE ROLE 'BAN'**");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }

  if(command === "generate") {
    message.channel.send("**Generating...**");
      message.author.send(doMagic8BallVoodoo());
      message.author.send("Join to official discord https://discord.gg/VAwQKQG");

  }

  if(command === "help") {
    message.channel.send("Check commands here: http://eyzalts.us/alts/bot/");

  }

  if(command === "invite") {
    message.channel.send("https://discordapp.com/oauth2/authorize?client_id=434814153107177484&scope=bot&permissions=66137103");

  }

  if(command === "join") {
    message.channel.send("https://discord.gg/VAwQKQG");

  }

  if(command === "clear") {

    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(config.token);
