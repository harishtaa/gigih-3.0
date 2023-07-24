import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import SongRouter from './routes/song.js'

dotenv.config();

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/song', SongRouter )

app.listen(3000, () => {
    console.log(`Server started at ${3000}`)
    console.log(process.env.PORT)
})


mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection;

db.on('error', (err) => {
    console.error("Failed to connect",err)
})

db.once('connected', () => {
    console.info("database connected")
})