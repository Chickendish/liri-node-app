var Twitter = require('twitter');

var twitter = function(spec){
	var client = new Twitter(spec);
	this.getMyTweets = function(){
		var params = {screen_name: 'nodejs'};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
    	console.log(tweets);
  		}
		});

	}
}

module.exports = twitter;