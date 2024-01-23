import modeloAlumno from '../schemas/alumno.js';


export const getAlumno = async (req, res) => {
    try {
        const alumnos = await modeloAlumno.find();
        res.status(200).json(alumnos);
    } catch (error) {
        res.status(404).json({
            mensaje: "No hay alumnos",
        });
    }
};


export const creandoAlumno = async (req, res) => {
    try {
        const cuerpo = req.body;
        const respuesta = await modeloAlumno.create(cuerpo);
        res.status(201).json(respuesta);
    } catch (error) {
        res.status(400).json({
            mensaje: "No se pudo crear el alumno",
        });
    }
};


export const alumnoID = async (req, res) => {
    try {
        const getId = req.params.id
        const alumno = await modeloAlumno.findById(getId)
        res.status(200).json(alumno)
    } catch (error) {
        return res.status(404).json({
            mensaje: "no se encontra al alumno"
        })
    }
}

export const eliminarAlumno = async (req, res) => {
    try {
        const getId = req.params.id;
        const respuesta = await modeloAlumno.findByIdAndDelete(getId);
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(404).json({
            mensaje: "No se pudo eliminar el alumno",
        });
    }
};

export const editarAlumno = async (req, res) => {
    try {
        const getId = req.params.id;
        const cuerpo = req.body;
        const alumnoE = await modeloAlumno.findByIdAndUpdate({ _id: getId }, cuerpo);
        console.log(alumnoE)
        res.status(200).json(alumnoE);
    } catch (error) {
        res.status(404).json({
            mensaje: "No se pudo editar el alumno",
        });
    }
};
