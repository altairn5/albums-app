
$(document).ready(function(){
	console.log("paged has loaded!");
	$.ajax({
		method: "GET",
		url: "/api/albums",
		success: function(albums){
			console.log("albums coming back = ", albums);
			albums.forEach(function(album){

				// renderHBS(albums);
			});
		}

	});

});

// Function takes a single album and renders it to the paged
