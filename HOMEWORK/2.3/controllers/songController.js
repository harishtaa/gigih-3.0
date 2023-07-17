const { addSong } = require('../models/songModel')
const { getAllSongs } = require('../models/songModel');
const { getSong } = require('../models/songModel')
const { playSong, mostPlayed } = require('../services/songService');

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/songs', (req, res) => {
    const songs = getAllSongs();
    res.json(songs)
})

app.post('/addsong', (req, res) => {
    try {
        const {title, artist, url} = req.body
        if (!title || !artist || !url){
            throw new Error("Insufficient Parameter")
        }
        addSong(title, artist, url)
        res.status(201).json({message: "Song added successfully"})
    }catch(e){
        res.status(500).json({error: e.message})
    }
})

app.post('/play/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        song = playSong(id)
        res.status(201).json({message: `Playing ${song.title} by ${song.artist}`})
    }catch(e){
        res.status(500).json({error: e.message})
    }
})

app.get('/mostplayed', (req, res) => {
    res.json(mostPlayed())
})

app.listen(port, () => {
    console.log(`Runnin on port ${port}`)
})

module.exports = app