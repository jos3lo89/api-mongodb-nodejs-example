import mongoose from 'mongoose';

const alumnoModelo = new mongoose.Schema(
    {
        nombre: {
            type: String,
        },
        apellido: {
            type: String
        },
        edad: {
            type: Number
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const modeloAlumno = mongoose.model("alumno", alumnoModelo);

export default modeloAlumno;
