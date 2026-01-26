
const corsOptions = {
    //Permite que cualquier origen acceda a la API
    origin: true,
    //Permite que la API envie y reciba cookies
    credentials: true,
    //establece los métodos permitidos en la API
    methods: "GET, POST, PUT, DELETE",
    //Define los headers que el cliente puede enviar
    allowedHeaders: "Content-Type, Authorization"
}

export { corsOptions }
