const express = require('express')
const app = express()
const port = 3000

// "/dashboard" -> return "Ini dashboard"
// "/home" -> return "Ini home"
// "/tweets/:tweetId  -> return "Ini tweetId"
// "/tweets/:tweetId?bahasa=Indonesia" -> return "ini tweetId dalam bahasa Indonesia"

app.get('/dashboard', (req, res) =>{
    res.status(200)
    res.send("Ini Dashboard")
})

app.get('/home', (req, res) =>{
    res.status(200)
    res.send("Ini Home")
})

app.get('/tweets/:tweetid', (req, res) =>{
    res.send(`Ini ${req.params.tweetid}`)
})

app.post('/tweets/:tweetId', (req, res) =>{
    res.status(200)
    res.send(`Ini ${req.params.tweetId} dalam bahasa ${req.query.bahasa}`)
})

app.use('/', (req, res) =>{
    res.status(404)
    res.send('<h1>404</h1>')
  })

app.listen(port, () => {
    console.log(`Runnin on port ${port}`)
})
  