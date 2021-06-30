import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema({
    genero: {
        type: Schema.ObjectId, ref: 'genre'
    },
    codigo: {
        type: String,
        unique: true,
        required: true
    },
    nombre: {
        type: String,
        maxlength: 50,
        required: true
    },
    sinopsis: {
        type: String,
        maxlength: 255
    },
    duracion: {
        type: Number,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    estado: {
        type: Number,
        default: 1,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

}, {
    versionKey: false
})

const Movie = mongoose.model('movies',movieSchema);
export default Movie;