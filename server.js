const express = require('express')
const app = express()

app.get('/', (req, res) => {
  
  let salida = {
    nombre: 'daniel',
    edad: 24,
    url: req.url
  }

  // JSON
  res.send(salida)
})

app.listen(3000)