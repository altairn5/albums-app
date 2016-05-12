/************
 * DATABASE *
 ************/

/* hard-coded data */

var db = require('../models');

/*Album Controllers*/

function index(req, res){

  db.Album.find({}, function(err, allAlbums){
    
    if(err){
      console.log("the error is = ", err);
    }
    res.json(allAlbums);

  });
}

function create(req, res){

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









