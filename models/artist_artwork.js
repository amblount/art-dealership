var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var artistArtworkSchema = new Schema ({
  artistId: {type: Schema.Types.ObjectId, ref: 'Artist'},
  artworkId: {type: Schema.Types.ObjectId, ref: 'Artwork'}
});

var ArtistArtwork = mongoose.model('ArtistArtwork', artistArtworkSchema);
module.exports = ArtistArtwork;
