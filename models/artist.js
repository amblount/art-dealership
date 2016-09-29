var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArtworkShema = require('./artwork.js').ArtworkSchema



// this creates an artist
var ArtistSchema = new Schema({
  FirstName: String,
  LastName: String,
  dateOfBirth: Date,
  cityOfBirth: String,
  artworks: [ ArtworkSchema ]
});

var Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist
