var Spotify = require('node-spotify-api');

var ourSpotify = function (keys){
	var spotify = new Spotify(keys);
	this.findThisSong = function(input){
		spotify.search({ type: 'track', query: input, limit: 5}, function(err, data) {
  			if (err) {
          // redirect towards random file before loggging error
          //fs.readFile("random.txt", "utf-8", )
    		return console.log('Error occurred: ' + err);
  			} 
        var music = data.tracks.items;

  			music.forEach(function(el){
  				console.log("\nAlbum name: " + music.[i].album.name);
  			})
 
	})
}
};

module.exports = ourSpotify;