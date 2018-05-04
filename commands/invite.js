module.exports = {
     main: function(bot, msg) {
		var start = Date.now();
		var stop, diff;
		msg.channel.send("Thanks for using EyzAltsFREE").then(function(newMsg) {
			var stop = Date.now();
			var diff = (stop - start);
			msg.channel.send("https://discordapp.com/oauth2/authorize?client_id=434814153107177484&scope=bot&permissions=66137103");
		});
    },
    help: 'Invite bot to your discord'
};
