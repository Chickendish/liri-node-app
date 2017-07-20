var fs = require('fs');
var Keys = require('./keys');
var OurTwitter = require('./app/twitter');
var twitter = new OurTwitter(Keys.twitterKeys)
console.log(twitter);
var Spotify = require('node-spotify-api');
var command = process.argv[2];


switch(command) {
	case "my-tweets": console.log("Command all day", command);
	break;
	case "spotify-this-song":
	break;
	case "movie-this": console.log("Goddamnit!", command);
	break;
	case "do-what-it-says":
	break;
	default: 
	return;

}