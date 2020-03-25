let songs = []
let artists = []
let lengths = []
let images = []
let links = []

function showSong(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>");
    });
}


function showLength(){
    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>");
    });
}

function showArtist(){
    artists.forEach(function(artist) {
        $("#artists").append("<p>" + artist + "</p>");
    });
}

function showImage() {
    images.forEach(function(image) {
        $("#images").append("<p>" + "<img src=" + image + ">" + "</p>");
    });
}

function showLink() {
    links.forEach(function(link) {
        $("#links").append("<p>" + "<a href=" + link + ">" + "Listen" + "</a>" + "</p>");
    })
}

function songInfo(item1, item2) {
let item = $(item2).val();
(item1).push(item);

}

function emptyInfo () {
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#images").empty();
    $("#links").empty();

}

$("#add").click(function(){   
        emptyInfo();
        showSong();
        showArtist();
        showLength();
        showImage();
        showLink();
        songInfo(songs, "#song");
        songInfo(artists, "#artist");
        songInfo(lengths, "#length");
        songInfo(images, "#image");
        songInfo(links, "#link");
    }
)
