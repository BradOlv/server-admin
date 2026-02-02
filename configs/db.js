'use strict';
import mongoose from "mongoose";
export const dbConnection = async () => {
    try {
        
mongoose.connection.on('error', () => {
    console.log('MongoDB | no se pudo conectar a MongoDB');
    mongoose.disconnect();
});

mongoose.connection.on('connecting', () => {
    console.log('MongoDB | intentando conectar a MongoDB');
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB | conectado a MongoDB');
});

mongoose.connection.on('open', () => {
    console.log('MongoDB | conectado a la base de datos kinalSports');
});

mongoose.connection.on('reconnected', () => {
    console.log('MongoDB | reconectado a MongoDB');
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB | desconectado de MongoDB');
});

await mongoose.connect('mongodb://127.0.0.1:27017/kinalsports', {
    serverSelectionTimeoutMS: 5000,
    maxPoolSize: 10,

});
    }catch (error) {
console.log(`Error al conectar la db: ${error}`);
process.exit(1);
    }
};

// Manejadores de señales de proceso (Process signal handlers)
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGUSR2', () => gracefulShutdown('SIGUSR2'));

// For nodemon restarts
const gracefulShutdown = async (signal) => {
    console.log(`\nCerrando MongoDB por señal: ${signal}`);
    await mongoose.connection.close();
    process.exit(0);
};