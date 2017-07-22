var fs = require('fs');
// we require our object of keys to use with our other 
// Constructors we create
var Movie = require('./OMBD')
var Keys = require('./keys');
// OurTwitter is the entire Object that we created in twitter file
var OurTwitter = require('./app/twitter');
var OurSpotify = require('./app/spotify');
// now we have to actuall "Construct an instance of our new object"
// i.e. new OurTwitter()
// Each constructor in this assignment is expecting a "keys" object to get passed to it
// so the npm module that needs keys will get what it needs passed down to it.
var twitter = new OurTwitter(Keys.twitterKeys);
// We also need to create a new instance of the spotify object so again we "instansiate" a
// new object i.e. new OurSpotify()
var spotify = new OurSpotify(Keys.spotifyKeys);

// our command given to us from the terminal
var command = process.argv[2];
var input = process.argv.slice[3];


switch(command) {
	case "my-tweets": twitter.getMyTweets(input);
	break;
	case "spotify-this-song": spotify.findThisSong(input);
	break;
	case "movie-this": Movie.movieRequest(input);
	break;
	case "do-what-it-says":
	break;
	default: 
	return;

}