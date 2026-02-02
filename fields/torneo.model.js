import { Schema, model } from "mongoose";

const torneoSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre del torneo es obligatorio"],
        unique: true
    },
    categoria: {
        type: String,
        required: [true, "La categoría es obligatoria"]
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

export default model('Torneo', torneoSchema);