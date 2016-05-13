var albumForm;


$(document).ready(function(){
	console.log('paged has loaded!');

	/*Get All Albums*/
	getAllAlbums();

	/*Post a New Album*/
	$('.form-horizontal').on('submit', function(event){
    
    	event.preventDefault();
		albumForm = $(this).serialize();
		postAnewAlbum(albumForm);
		

	});
});



/*Get all Albums Function*/

function getAllAlbums(){

	$.get('/api/albums').success(function(albums){
		albums.forEach(function(album){
		renderHBS(album);
		});
	});
/*End getAllAlbums*/
}


/*Post New Albums Function*/

function postAnewAlbum(newAlbumForm){

	console.log(" Hit post route");

	$.post('/api/albums', newAlbumForm, function(album){
			
		  renderHBS(album);		
	});

/*End postAnewAlbum*/
}





/*Render Existing Albums Using Handlebars*/


/*Function takes a single album and renders it to the paged*/
function renderHBS(data){
	console.log('Rendering data for = ', JSON.stringify(data));
	var albumHTML = $('#hbs-template').html();
	var hbscompiledTemplate = Handlebars.compile(albumHTML);
	var html = hbscompiledTemplate(data);
	$('#albums').prepend(html);
}
