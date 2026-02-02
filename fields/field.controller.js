
// importamos las dependencias

import Field from "./field.model.js";

//Controles
// Post controller
export const createField = async (req, res) => {
    try {
        const fieldData = req.body;

        if (req.file) {
            const extension = req.file.path.split('.').pop();
            const fileName = req.file.filename;

            const relativePath = fileName.substring(
                fileName.indexOf('fields/')
            );
            fieldData.photo = `${relativePath}.${extension}`;
        } else {
            fieldData.photo = 'fields/kinal_sport_nyvxo5';
        }

        const field = new Field(fieldData);
        await field.save();

        res.status(201).json({
            success: true,
            message: 'campo creado exitosamente',
            data: field
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error al crear el campo',
            error: error.message
        })
    }
}
// Get controller - Para obtener todos los campos
export const getFields = async (req, res) => {
    try {
        const fields = await Field.find();
        res.status(200).json({
            success: true,
            total: fields.length,
            fields
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener los campos',
            error: error.message
        });
    }
};
// Get controller - Para obtener un campo por ID
export const getFieldById = async (req, res) => {
    try {
        const { id } = req.params;
        const field = await Field.findById(id);

        if (!field) {
            return res.status(404).json({
                success: false,
                message: 'Campo no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            field
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener el campo',
            error: error.message
        });
    }
};
        // Recuerda agregar aquí tu res.status(500)...
    
