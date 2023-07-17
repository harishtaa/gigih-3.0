const { getSong, getAllSongs } = require('../models/songModel')

function playSong(id){
    const song = getSong(id);
    if(song.songId === id){
        song.playcount+=1
        return song
    }else{
        throw new Error("Song not found!");
    }
}

function mostPlayed(){
    const songs = getAllSongs()
    return songs.sort((a, b) => b.playcount - a.playcount);
}

module.exports = {
    playSong,
    mostPlayed
}
