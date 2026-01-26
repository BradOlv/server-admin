
'use strict';
import mongoose, { mongo } from "mongoose";

const fieldSchema = new mongoose.Schema({
    fieldName: {
        type: String,
        required: true,
        trim: true,
        maxLength: [100, "No puede exceder el nombre de 100 caracteres"]

    },
    fieldType: {
        type: String,
        required: [true, "El tipo de campo es obligatorio"],
        enum: {
            values: ["NATURAL", "SINTETICA", "CONCRETO"],
            message: "Tipo de superficie no válida",

        },
    },

    capacity: {
        type: String,
        required: [true, "La capacidad es requerida"],
        enum: {
            values: ['FUTBOL_5', 'FUTBOL_7','FUTBOL_11'],
            message: 'Capacidad no válida',
        },

    },

    pricePerHour: {
        type: Number,
        required: [ true, "El precio por hora es requerido"],
        min: [0, "El precio debe ser mayor o igual a 0"]
    },
    description: {
        type: String, 
        trim: true,
        maxLength: [500, "La descripcion no puede exceder de los 500 caracteres"], 
    },
    photo: {
        type: String,
        default: 'fields/kinal_sports_nyvxo5',
    },
    isActive: {
        type: Boolean,
        default: true,
    }
});

//exportamos el modelo con el nombre field
export default  mongoose.model('Field', fieldSchema);



