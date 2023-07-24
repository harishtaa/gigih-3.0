import express from 'express';
import SongModel from '../models/Song.js';
const songRouter = express.Router();

// songRouter.get('/', (req,res) =>{
//     res.status(200)
//     res.send("halooo")
// })

songRouter.post('/', async (req, res) =>{
    const {title, artist, album} = req.body
    try{
        const song = await new SongModel({
            title,
            artist,
            album
        }).save()
        res.status(201).json(song)
    }catch(e){
        res.status(400).json({"errorMessagge": "Invalid State"})
    }
})

songRouter.get('/', async (req, res) => {
    try{
        const results = await SongModel.find()
        res.json(results)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

songRouter.get('/:id', async (req, res) => {
    try{
        const result = await SongModel.findById(req.params.id)
        res.json(result)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})

songRouter.put('/:id', async (req,res) => {
    const id = req.params.id;
    const body = req.body;
    try{
        const song = await SongModel.findByIdAndUpdate(
            id,body,{ new: true }
        );
        res.send(song)
    }catch(e){
        res.status(400).json({message: e.message})
    }
})

songRouter.delete ('/:id', async (req, res) =>{
    const { id }= req.params;
    const body = req.body;
    try{
        const song = await SongModel.findByIdAndDelete(
            id,body,{ new: true }
        )
        res.send(song)
    }catch(e){
        res.status(400).json({message: e.message})
    }
})
export default songRouter