import { Router } from 'express'
import { getAlumno, creandoAlumno, alumnoID, eliminarAlumno, editarAlumno } from '../controllers/alumno.controller.js'
const router = Router()


router.get("/alumnos", getAlumno)

router.get("/alumnos/:id", alumnoID)

router.post("/alumnos", creandoAlumno)

router.put("/alumnos/:id", editarAlumno)

router.delete("/alumnos/:id", eliminarAlumno)

export default router