const express = require('express')
const app = express()

// middlewares, un callback que se ejcuta siempre, 
// para cualquier url que el usuario pida

// dominio publico, para acceder a archivos se pone la extension,
// sino buscara un servicio
app.use(express.static(__dirname + '/public'))

// app.get('/', (req, res) => {
  
//   let salida = {
//     nombre: 'daniel',
//     edad: 24,
//     url: req.url
//   }

//   // JSON, send detecta el objeto
//   res.send(salida)
// })

app.listen(3000)