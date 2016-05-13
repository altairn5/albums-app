
$(document).ready(function(){
	console.log('paged has loaded!');
	$.get('/api/albums').success(function(albums){
		albums.forEach(function(album){
			renderHBS(album);
		});
	});
});

// Function takes a single album and renders it to the paged


function renderHBS(data){
	console.log('Rendering data for = ', JSON.stringify(data));
	var albumHTML = $('#hbs-template').html();
	var hbscompiledTemplate = Handlebars.compile(albumHTML);
	var renderAlbums = hbscompiledTemplate(data);
	$('#albums').prepend(renderAlbums);

}