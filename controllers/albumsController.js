/************
 * DATABASE *
 ************/

/* hard-coded data */

var db = require('../models');

/*Album Controllers*/

/*Get All Albums*/

function index(req, res){

  db.Album.find({}, function(err, allAlbums){
    
    if(err){
      console.log("the error is = ", err);
    }
    res.json(allAlbums);

  });
}


/* Create a New Album */

function create(req, res){

  console.log("Form Body Coming In = ", req.body)

  var newAlbum = {};
  var genre = req.body.genres.split(',').map(function(genre){
              /*Trim Methods Removes String White Spaces*/
              return genre.trim();
  })

  newAlbum = req.body
  newAlbum.genres = genre;


  db.Album.create(newAlbum, function(err, album){

    if(err){ console.log("err is = ", err);}
    console.log("Album created looks like ", album);
    res.json(album);
  });

}

function show(req, res){

}

function destroy(req, res){

}

function update(req, res){

}

module.exports = {
                  index: index,
                  create: create,
                  show: show,
                  destroy: destroy,
                  update: update
                 };









