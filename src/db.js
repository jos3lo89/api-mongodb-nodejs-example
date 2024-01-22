import mongoose from 'mongoose';
import { DB_HOST } from './config.js';

export const conexionDB = async () => {
    try {
        await mongoose.connect(DB_HOST, {});

        console.log("Conexion correcta");
    } catch (error) {
        console.error("Error de conexion:", error.message);
    }
};
