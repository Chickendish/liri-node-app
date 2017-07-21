// We need the Twitter module aka "package" so we require it here
// since this is the only place we need to use the twitter package
var Twitter = require('twitter');
// we create a "var" assigned to a function
// and our function is expecting an "argument" of a "key" object passed to it 
// when a new "Instance" is created
var twitter = function(key){
	// we create a new "instance" of our Twitter module to use it awesome methods
	// of getting tweets
	var client = new Twitter(key);
	// 'this' is the the reference to the entire function which is 
	// technially an object 
	// EVERYTHING IS AN OBJECT


	// getMyTweets a method of this Object
	this.getMyTweets = function(input){

		var params = {screen_name: input};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
  			tweets.forEach(function(el){
  				console.log(el.text);
  			})
  		}
		});

	}
}

module.exports = twitter;