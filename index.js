const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bookRoutes = require('./routes/bookRoutes')

app.use('/', bookRoutes)

app.listen(PORT, () => console.log(`Running on ${PORT}`))