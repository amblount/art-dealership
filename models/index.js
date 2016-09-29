var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/art_dealership");
// open connection to db
module.exports = {
  Artist: require('./artist').Artist,
  Artwork: require('/artwork').Artwork,
  ArtistArtwork: require('./artist_artwork').ArtistArtwork
}
// require all models
// export all models
