const songs = [
    {
        songId: 1,
        title: "Home",
        artist: "Michael Buble",
        url: "https://open.spotify.com/track/3lyLqIn8mybyEFTs8JJaLf?si=df9da4aaa74e462d",
        playcount: 0
    },
    {
        songId: 2,
        title: "If I Let You Go",
        artist: "Westlife",
        url: "https://open.spotify.com/track/5eZcaAVCwEAmqP4b9cZAZf?si=4eaed9d0854b432c",
        playcount: 0
    },
    {
        songId: 3,
        title: "In My Life",
        artist: "The Beatles",
        url: "https://open.spotify.com/track/3KfbEIOC7YIv90FIfNSZpo?si=c1871a5ffce2444c",
        playcount: 0
    }
]

function getAllSongs(){
    return songs;
}

function getSong(songId){
    return songs.find((s)=> s.songId === songId  )
}

function addSong(title, artist, url){
    let newSong = {
        id : songs.length+1,
        title: title,
        artist: artist,
        url: url,
        playcount: 0,
    }
    songs.push(newSong)
    return newSong;
}


module.exports = {
    getAllSongs,
    getSong,
    addSong
}