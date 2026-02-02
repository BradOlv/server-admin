import Torneo from "./torneo.model.js";

// POST: Crear torneo
export const crearTorneo = async (req, res) => {
    try {
        const datosTorneo = req.body;

        if (req.file) {
            datosTorneo.foto = req.file.path;
        } else {
            datosTorneo.foto = 'fields/kinal_sport_nyvxo5';
        }

        const torneo = new Torneo(datosTorneo);
        await torneo.save();

        res.status(201).json({
            success: true,
            message: 'torneo creado exitosamente',
            data: torneo
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error al crear el torneo',
            error: error.message
        });
    }
};

// GET: Obtener todos los torneos
export const obtenerTorneos = async (req, res) => {
    try {
        const torneos = await Torneo.find({ estado: true });
        res.status(200).json({
            success: true,
            total: torneos.length,
            torneos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener los torneos',
            error: error.message
        });
    }
};