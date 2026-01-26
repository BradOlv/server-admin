
'use strict';

//importaciones de dependencias
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { corsOptions } from './cors-configuration.js';

// URL base para todas las rutas de la API

const BASE_URL = '/kinalSportAdmin/v1';

//Configuración de los middlewares
const middlewares = (app) => {
 // Parsear datos URL-encoded con límite de 10MB
    app.use(express.urlencoded({extended: false, limit: '10mb'}));
 
    // Parsear JSON con límite de 10MB
    app.use(express.json({ limit: '10mb'}));
  
    // Habilitar CORS con opciones personalizadas
    app.use(cors(corsOptions));
    
    // Logger de solicitudes en modo desarrollo
    app.use(morgan('dev'));

}

// Función para iniciar el servidor
const initServer = async () => {

    // Creación de la instancia de la app
    const app = express();
    const PORT = process.env.PORT || 3001;

    try {
      middlewares(app);

         //PRIMERA RUTA
        app.get(`${BASE_URL}/health`, (req, res) => {
            res.status(200).json(
                {
                    status: "ok",
                    service: "KinalSport Admin",
                    version: "1.0.0"
                } );

        });

        app.listen(PORT, () => {
            console.log( `Servidor corriendo en el puerto ${PORT} `);
            console.log( `Base URL: http://localhost:${PORT}${BASE_URL} `);

        });
       

    } catch (error) {
        console.log( error);
    }

}

export { initServer };
