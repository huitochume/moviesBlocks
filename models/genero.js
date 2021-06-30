import mongoose, { Schema } from "mongoose";

const generoSchema = new Schema({
    nombre: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    },
    descripcion: {
        type: String,
        maxlength: 255
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

const Genero = mongoose.model('genre', generoSchema)

export default Genero