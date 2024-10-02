import mongoose from "mongoose";

const artistaSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true}
})

const artista = mongoose.model('artistas', artistaSchema)

export default artista