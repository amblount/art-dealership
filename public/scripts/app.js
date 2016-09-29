$(document).ready(function(){
  var config = {
    apiKey: "AIzaSyBtEAFXWQfGi-NycAWsHNGl3WH7B-3dLCk",
    authDomain: "art-collector.firebaseapp.com",
    databaseURL: "https://art-collector.firebaseio.com",
    storageBucket: "art-collector.appspot.com",
    messagingSenderId: "548649296350"
  };
  firebase.initializeApp(config);

  // create reference
  var databaseRef = firebase.databse().ref("artists");

  // load data
  databaseRef.limitToLast(10)on('child_added', function(snapshot) {
    var data = snapshot.val();
    var line = "<li>" + data.name + ": " + data.text + "</li>"
    $('#messages').append(line);
  })


  // submit messages
})
