let songs = []

function showSong(){
songs.forEach(function(song) {
$("#songs").append("<p>" + song + "<p>");
    });
}

$("#add").click(function() {
    showSong();
});