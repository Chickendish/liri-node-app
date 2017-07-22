var request = require('request');

var movieRequest = function{
	var queryURL = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=40e9cece";

	request(queryURL, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log(JSON.parse(body));
  }
});
}

module.exports = movieRequest;