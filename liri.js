var fs = require('fs');
let Keys = require('./keys');
let OurTwitter = require('./app/twitter');
let twitter = new OurTwitter(Keys.twitterKeys)
console.log(twitter);
let command = process.argv[2];


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