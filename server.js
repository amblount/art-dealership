// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
// var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
//
// // serve static files from public folder
// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.send("Hello")
  // res.sendFile(__dirname + '/views/index.html');
});
//
// app.get('/artists', function homepage (req, res) {
//   res.sendFile(__dirname + '/views/partials/artists.html');
// });
//
// app.get('/users', function homepage (req, res) {
//   res.sendFile(__dirname + '/views/partials/users.html');
// });
//
// app.get('/artists/:artistid/artworks', function homepage (req, res) {
//   res.sendFile(__dirname + '/views/partials/artworks.html');
// });
//
//
// /*
//  * routes
//  */
//
// // READ
// app.get('/artists', function api_index (req, res){
//   res.json(artists)
// });
//
// // show
// app.get('/artists/:artistid', function albumsIndex(req, res) {
//   db.Artist.find({}, function(err, artist) {
//     res.json(artist);
//   });
// });
//
// // create
// app.post('/artists', function artistCreate(req, res) {
//   console.log('body', req.body);
//
//   db.Artist.create(req.body, function(err, artist) {
//     if (err) { console.log('error', err); }
//     console.log(artist);
//     res.json(artist);
//   });
//
// });
//
// // need delete method
//
// // create artwork
// app.post('/artist/:artistid/artworks', function createArtwork(req, res) {
//   console.log('body', req.body);
//
//   // create artwork
//   db.Artwork.create(req.body, function(err, artwork) {
//     if (err) { console.log('error', err); }
//     console.log(artwork);
//     // find artist
//     db.Artist.findOne(req.params.artist, function(err, artwork) {
//       if (err) { console.log('error', err); }
//       // include logic here for referenced artwork to add it to join table
//     })
//     res.json(artwork;
//   })
// })
//

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
