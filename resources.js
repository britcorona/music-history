var songs = [];
var element = document.getElementById("box2");

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


for ( i = 0; i < songs.length; i++) {
	songs[i]=songs[i].replace(/>/g, '-');
	songs[i]=songs[i].replace('*', '');
	songs[i]=songs[i].replace('(', '');
	songs[i]=songs[i].replace('@', '');
	songs[i]=songs[i].replace('!', '') ;
	songs[i]=songs[i].replace('- by', '|');
	songs[i]=songs[i].replace('on the album', '|');
	element.innerHTML += '<p id="song-name">' + songs[i] + '</p>';
}


// {Song name} by {Artist} on the album {Album}



