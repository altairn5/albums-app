var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SongSchema = ({
	name: String,
	trackNumber: Number
});

var Song = mongoose.model('Song', SongSchema);

module.exports = Song;