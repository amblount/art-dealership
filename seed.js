// link to models
var db = require("./models");
var faker = require("faker");

var artistList = [
  {firstName: "Pablo", lastName: "Picasso", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {firstname: "Gloria", lastName: "Vanderbilt", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {firstname: "Augusta", lastName: "Savage", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {firstname: "Juan", lastName: "Gris", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {firstname: "Lorenzo", lastName: "Ghiberti", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {firstname: "El", lastName: "Lissitzky", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {firstname: "Betye", lastName: "Saar", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []},
  {firstname: "Theodore", lastName: "Rousseau", dateOfBirth: Date('1970-01-01'), cityOfBirth: "Oakland", artworks: []}
]

var artistFinalObjectList = []
db.Artist.remove({}, function(err, albums){
  if (err) { return console.log('ERROR', err); }
});

db.Artwork.remove({}, function(err, albums){
  if (err) { return console.log('ERROR', err); }
});

db.ArtistArtwork.remove({}, function(err, albums){
  if (err) { return console.log('ERROR', err); }
});
  // db.Album.create(albumList, function(err, albums){
  //
  //   console.log("all albums:", albums);
  //   console.log("created", albums.length, "albums");
  //   process.exit();
  // });



artistList.forEach(function(artist_data){
  var artist = new db.Artist(artist_data);
  artistFinalObjectList.push(artist)
  // console.log(artist);
})

var art = [];
var artArtist = [];

artistFinalObjectList.forEach(function(artistObject){
  for(i = 0; i < 5; i++){
    var pieceOfArt = new db.Artwork({
      title: faker.Lorem.words()[0],
      description: faker.Lorem.sentence(),
      imageUrl: faker.Image.abstractImage()
    })
    pieceOfArt.save(function(err, data){
        if(err){
          console.log(err + "in save function" )
        }
        // console.log("+++++++++++++++++", data);
        artistObject.artworks.push(data)
        console.log(  artistObject.artworks)
    });
    art.push(pieceOfArt);
    var aa = new db.ArtistArtwork({
                  artistId: artistObject._id,
                  artworkId: pieceOfArt._id
                }).save(function(err, data){
                    if(err){
                      console.log(err + " in save function for db.ArtistArtwork")
                    }
                    // console.log(data);
                    artArtist.push(aa)
                  });
  artistObject.save(function(err, data){
                  if(err){
                    console.log(err + " in save function artistObject")
                  }
                  // console.log(data)
                });
  }
});
// console.log(artArtist)

// console.log(artistFinalObjectList);


// artistList.forEach(function(artist){
//
//   for(i = 0; i < 5; i++){
//     db.Artwork.({
//       title: faker.Lorem.words()[0],
//       description: faker.Lorem.sentence(),
//       imageUrl: faker.Image.abstractImage()
//     })
//   }
//   console.log(art);

//   var person = db.Artist.create({
//     firstname: artist.firstname,
//     lastName: artist.lastName,
//     dateOfBirth: artist.dateOfBirth,
//     cityOfBirth: faker.Address.city()
//     artworks: art
//   });
//   console.log("person ", person)
//
//   art.forEach(function(piece){
//     db.ArtistArtwork.create({
//       artistId: person._id,
//       artworkId: piece._id
//     })
//   console.log("piece of art", piece)
//   })
//
// console.log("created: ", artist)
//
// });
// console.log(db.Artist.find({}));
// console.log(db.Artwork.find({}));
// console.log(db.ArtistArtwork.find({}));
//populate artworks
  // iterate through artist list and insert a new Artwork(s)

// save artist list
