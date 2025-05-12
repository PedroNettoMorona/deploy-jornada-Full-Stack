// API -> Application Programming Interface
// POST, GET, PUT, DELETE
// CRUD -> CREATE, READ, UPDATE, DELETE
// MiddleWare

import express from 'express'
import cors from 'cors'
import { db } from './connect.js'
import path from 'path'

const __dirname = path.resolve()

const app = express()
const PORT = 3001

app.use(cors())

app.get('/api/', (request, response) => {
    response.send("Olá, Mundo!")
})

app.get('/api/artists', async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray())
})

app.get('/api/songs', async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray())
})

app.use(express.static(path.join(__dirname, "../Front-End/dist")))

app.get('*page', async (request, response) => {
    response.sendFile(path.join(__dirname, "../Front-End/dist/index.html"))
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

