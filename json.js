$(document).ready(function() {

	$.ajax({
		url: "songs.json"
	}).done(function(data) {
		var contentEl = $("#box2");

		for (var i = 0; i <data.songs.length; i++) {
		   var songName = data.songs[i].name;
		   var songArtist = data.songs[i].artist;
		   var songAlbum = data.songs[i].album;
		   var songsText = '<h3 class="song-name">' + songName + '</h3>' + '<p class="song-name">' + " " + songArtist + " | " + songAlbum + "</p>";
		   $("#more").before(songsText);
 		}
	})

		$('#box2').click(function() {
		  $(this).slideDown();
		

		$.ajax({
			url: "secondsongs.json"
			}).done(function(data){
				var contentEl = $("#box2");

			for (var i = 0; i <data.songs.length; i++) {
			   var songName = data.songs[i].name;
			   var songArtist = data.songs[i].artist;
			   var songAlbum = data.songs[i].album;
			   var songsText = '<h3 class="song-name">' + songName + '</h3>' + '<p class="song-name">' + " " + songArtist + " | " + songAlbum + "</p>";
			   $("#more").before(songsText);
			}
		})
	});	
});



	

