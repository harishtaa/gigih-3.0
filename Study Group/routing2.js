const express = require('express')
const app = express()
const port = 3000
const router = express.Router();
// "/user/:userId/likes" -> ini likes dari :userId
// "/user/:userId/retweet" -> ini retweet dari :userId
// "/user/:userId/tweet" -> ini tweet dari :userId 


router.get('/likes', (req, res) => {
    res.send(`Ini likes dari ${req.params.userId}`);
});

router.get('/retweet', (req, res) => {
    res.send(`Ini retweet dari ${req.params.userId}`);
});

router.get('/tweet', (req, res) => {
    res.send(`Ini tweet dari ${req.params.userId}`);
});

app.use('/user/:userId', router);



// app.get('/user/:userId/likes', (req, res) =>{
//     res.send(`Ini likes dari ${req.params.userId}`)
// })

// app.get('/user/:userId/retweet', (req, res) =>{
//     res.send(`Ini retweet dari ${req.params.userId}`)
// })

// app.get('/user/:userId/tweet', (req, res) =>{
//     res.send(`Ini tweet dari ${req.params.userId}`)
// })




app.use('/', (req, res) =>{
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
    console.log(`Runnin on port ${port}`)
})
  