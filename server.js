const express = require('express')
const app = express()

var hbs = require('hbs');
 
// middlewares, un callback que se ejcuta siempre, 
// para cualquier url que el usuario pida

// dominio publico, para acceder a archivos se pone la extension,
// sino buscara un servicio
app.use(express.static(__dirname + '/public'))

// HBS engine

hbs.registerPartials(__dirname + '/views/partials'); // como componentes
app.set('view engine', 'hbs')

// Helpers
require('./hbs/helpers')

app.get('/', (req, res) => {
  
//   let salida = {
//     nombre: 'daniel',
//     edad: 24,
//     url: req.url
//   }

//   // JSON, send detecta el objeto
//   res.send(salida)

    res.render('home', {
        nombre: 'daNiel',
        // anio: new Date().getFullYear() // si no existe la variable en los componentes busca en los helpers
    })
})

app.get('/about', (req, res) => {
  
    //   let salida = {
    //     nombre: 'daniel',
    //     edad: 24,
    //     url: req.url
    //   }
    
    //   // JSON, send detecta el objeto
    //   res.send(salida)
    
        res.render('about', {
            // anio: new Date().getFullYear()
        })
    })
    

app.listen(3000)