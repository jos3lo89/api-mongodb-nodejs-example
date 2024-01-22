import express from 'express'
import { conexionDB } from './db.js'
import router from './routes/alumno.routes.js'
import cors from  'cors'

const app = express()
app.use(express.json())

app.use(cors())


app.use(router)


app.use((req, res, next) => {
    res.status(404).json({
        mensaje: "Pagina no permitida"
    })
})

app.listen(3000, () => {
    console.log("servidor en el puerto 3000")
})

conexionDB()