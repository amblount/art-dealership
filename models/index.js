var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/art_dealership");
// open connection to db
module.exports = {
  Artist: require('./artist'),
  Artwork: require('./artwork'),
  ArtistArtwork: require('./artist_artwork')
};
// require all models
// export all models
// console.log(Object.keys(require('./artist')))
// console.log()
