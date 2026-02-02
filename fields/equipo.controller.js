import Equipo from "./equipo.model.js";

// Post controller
export const crearEquipo = async (req, res) => {
    try {
        const datosEquipo = req.body;

        if (req.file) {
            // Usamos req.file.path que es lo que manda Cloudinary
            datosEquipo.foto = req.file.path;
        } else {
            // Tu imagen por defecto
            datosEquipo.foto = 'fields/kinal_sport_nyvxo5';
        }

        const equipo = new Equipo(datosEquipo);
        await equipo.save();

        res.status(201).json({
            success: true,
            message: 'equipo creado exitosamente',
            data: equipo
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error al crear el equipo',
            error: error.message
        })
    }
}

// Get controller - Para obtener todos los equipos activos
export const obtenerEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.find({ estado: true });
        res.status(200).json({
            success: true,
            total: equipos.length,
            equipos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener los equipos',
            error: error.message
        });
    }
};

// Get por ID
export const obtenerEquipoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const equipo = await Equipo.findById(id);

        if (!equipo) {
            return res.status(404).json({
                success: false,
                message: 'Equipo no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            equipo
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener el equipo',
            error: error.message
        });
    }
};