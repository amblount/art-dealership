// link to models
var db = require("./models");
var faker = require("faker");

var artistList = [
  {firstName: "Pablo", lastName: "Picasso", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {name: "Gloria", lastName: "Vanderbilt", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {name: "Augusta", lastName: "Savage", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {name: "Juan", lastName: "Gris", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {name: "Lorenzo", lastName: "Ghiberti", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {name: "El", lastName: "Lissitzky", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {name: "Betye", lastName: "Saar", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {name: "Theodore", lastName: "Rousseau", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []}
]

artistList.forEach(function(artist){
  db.Artwork.create()
})
//populate artworks
  // iterate through artist list and insert a new Artwork(s)

// save artist list
