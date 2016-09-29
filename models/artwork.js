var mongooge = require('mongoose');
var Schema = mongoose.Schema;

var ArtworkSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
  artistId: Number
});

var Artwork = mongoose.model('Artwork', ArtworkSchema);
module.exports = Artwork;
