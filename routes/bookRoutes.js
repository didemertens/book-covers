const bookRoutes = require('express').Router()
const bookCovers = require('../bookCovers.json')

bookRoutes.get('/test', (req, res) => {
  res.json(bookCovers)
})

module.exports = bookRoutes