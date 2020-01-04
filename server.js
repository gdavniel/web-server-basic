const express = require('express')
const app = express()

app.get('/', function (req, res) {
  
  let salida = {
    nombre: 'daniel',
    edad: 24,
    url: req.url
  }

  res.send(salida)
})

app.listen(3000)