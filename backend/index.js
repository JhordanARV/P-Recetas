const express = require('express')
const app = express()
const cors = require('cors')
const { PORT } = require('./config')

// Rutas
const recipeRoutes = require('./components/recipe/routes')
const userRoutes = require('./components/user/routes')

// Middleware para permitir recibir solicitudes HTTP desde cualquier dominio
app.use(cors())
app.use(express.json())

// Instalación de rutas en el router principal
app.use('/api/recipe', recipeRoutes)
//app.use('/user', userRoutes)

app.use((req, res, next) => {
    res.status(404).send('404 Not found')
})

app.listen(PORT, () => {
  console.log(`Server APP listening at localhost: ${PORT}`)
})