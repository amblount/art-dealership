var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var ArtworkShema = require('./artwork.js').ArtworkSchema



// this creates an artist
var ArtistSchema = new Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  cityOfBirth: String
  // artworks: [{type: Schema.Types.ObjectId, ref: 'Artwork' }]
});

var Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist
