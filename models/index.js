 var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/albums-app');
  // mongoose.connect(process.env.MONGOLAB_URI||'mongodb://localhost/albums-app');

var Album = require('./album');
var Song = require('./song');

module.exports.Album = Album;
module.exports.Song = Song;