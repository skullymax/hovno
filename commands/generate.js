function doMagic8BallVoodoo() {
    var rand = ['http://shrinkearn.com/8YT8',
    'http://shrinkearn.com/dRF4',
    'http://shrinkearn.com/CZPV',
    'http://shrinkearn.com/Sts',
    'http://shrinkearn.com/16iV',
    'http://shrinkearn.com/Tyx',
    'http://shrinkearn.com/iMX',
    'http://shrinkearn.com/4JS',
    'http://shrinkearn.com/zCQ',
    'http://shrinkearn.com/rIfA',
    'http://shrinkearn.com/8HD'];

    return rand[Math.floor(Math.random()*rand.length)];
}

module.exports = {
     main: function(bot, msg) {
		var start = Date.now();
		var stop, diff;
    msg.channel.send("**Generating...**").then(function(newMsg) {
			var stop = Date.now();
			var diff = (stop - start);
	    msg.author.send("Join to official discord https://discord.gg/VAwQKQG");
			msg.author.send(doMagic8BallVoodoo());
		});
    },
    help: 'Generate our alts free'
};
