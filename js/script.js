let songs = []
let artists = []
let lengths = []
let images = []
let links = []

function showSong(){
    songs.forEach(function(song) {
        $("#songs").append("<div>" + song + "</div>");
    });
}


function showLength(){
    lengths.forEach(function(length) {
        $("#lengths").append("<div>" + length + "</div>");
    });
}

function showArtist(){
    artists.forEach(function(artist) {
        $("#artists").append("<div>" + artist + "</div>");
    });
}

function showImage() {
    images.forEach(function(image) {
        $("#images").append("<div>" + image + "</div>");
    });
}

function showLink() {
    links.forEach(function(link) {
        $("#links").append("<div>" + link + "</div>");
    })
}

function songInfo(item1, item2) {
let item = $(item2).val();
(item1).push(item);

}

$("#add").click(function(){    
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
