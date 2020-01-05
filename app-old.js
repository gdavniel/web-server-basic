const http = require('http')

// acepta todas las urls y lo mostramos con req.url
http.createServer((req, res) => {

    res.writeHead(200, {'Content-type': 'application/json'})

    let salida = {
        nombre: 'daniel',
        edad: 24,
        url: req.url
    }

    res.write(JSON.stringify(salida))
    res.end() // terminarmos de hacer la respuesta

})
.listen(8080)

console.log('escuchando en el puerto 8080')