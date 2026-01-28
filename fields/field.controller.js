
// importamos las dependencias

import Field from "./field.model.js";

//Controles
export const getFields = async (req, res) => {
    try {

        const { page = 1, limit = 10, isActive } = req.query;

        const filter = {isActive};

        // opciones de paginación
        const options = {
            //convertimos a números
            page: parseInt(page),
            //convertimos a números
            limit: parseInt(limit),
            sort: {createdAt: -1 }
        }

        //realizar la consulta al schema field
        const fields = await Field.find(filter)
            .limit(limit)
            .skip(( page - 1) * limit)
            .sort(options.sort);

         // conteo de documentos de la consulta
        const total = await Field.countDocuments(filter);

        //respuesta
        res.status(200).json({
            success: true,
            data: fields, 
            pagination: {
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalRecords: total,
                limit: limit, 



            }
        })

    } catch (error) {
        res.status (500).json(
            {
                success: false,
                message: 'error en campos',
                error: error.message
                
            }
        )

    }
}