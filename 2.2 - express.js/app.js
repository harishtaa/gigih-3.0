const express = require('express')
const app = express()
const port = 3000

songs = [
    {
        title: "Home",
        artist: [{name: "Michael Buble"}],
        url: "https://open.spotify.com/track/3lyLqIn8mybyEFTs8JJaLf?si=df9da4aaa74e462d",
        playcount: 0
    },
    {
        title: "If I Let You Go",
        artist: [{name: "Westlife"}],
        url: "https://open.spotify.com/track/5eZcaAVCwEAmqP4b9cZAZf?si=4eaed9d0854b432c",
        playcount: 0
    },
    {
        title: "In My Life",
        artist: [{name: "The Beatles"}],
        url: "https://open.spotify.com/track/3KfbEIOC7YIv90FIfNSZpo?si=c1871a5ffce2444c",
        playcount: 0
    }
]

app.get('/showList', (req, res) =>{
    res.status(200)
    res.send(songs)
})

app.post('/add/:title/:artist/:url', (req, res) =>{
    res.status(200)
    var data = 
    {
        "title": req.params.title,
        "artist": [{"name":req.params.artist}],
        "url": req.params.url,
    }

    songs.push(data);
    res.send("Data Tersimpan")
})

app.get('/play/:title', (req, res) =>{
    res.status(200)
    songs.forEach(song =>{
        if(song.title === req.params.title){
            res.send(`Now Playing ${req.params.title} by ${song.artist[0].name}`)
            song.playcount+=1
        }else{
            res.send(`${req.params.title} is not found!`)
        }
    })
})

app.get('/mostPlayed', (req, res) =>{
    songs.forEach(song => {
        res.send(song.playcount.sort())
    })
})

app.use('/', (req, res) =>{
    res.status(404)
    res.send('<h1>404</h1>')
  })

app.listen(port, () => {
    console.log(`Runnin on port ${port}`)
})
  