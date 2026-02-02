import { Schema, model } from "mongoose";

const equipoSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del equipo es obligatorio"],
        unique: true
    },
    descripcion: {
        type: String,
        required: [true, "La descripción es obligatoria"]
    },
    foto: {
        type: String
    },
    estado: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Equipo', equipoSchema);