const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bookRoutes = require('./routes/bookRoutes')

app.use('/covers', express.static(__dirname + '/covers'))

app.use('/books', bookRoutes)

app.listen(PORT, () => console.log(`Running on ${PORT}`))