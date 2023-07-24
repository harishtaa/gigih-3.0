import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
        
    },
    artist:{
        type:String,
        required:true
    },
    album:{
        type:String,
        required:true
    },
}, {versionKey: false})

const Song = mongoose.model('songs', songSchema)
export default Song;
