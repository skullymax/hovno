module.exports = {
     main: function(bot, msg) {
		var start = Date.now();
		var stop, diff;
		msg.channel.send("Thanks for using EyzAltsFREE").then(function(newMsg) {
			var stop = Date.now();
			var diff = (stop - start);
			msg.channel.send("https://discord.gg/VAwQKQG");
		});
    },
    help: 'Join to official discord'
};
