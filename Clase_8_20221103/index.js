const express = require('express')
const app = express();


app.use(express.static('assets'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Tarea/index.html')
  })
  
  app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + '/assets/css/style.css')
  })

  app.get('/formulario', function (req, res) {
    res.sendFile(__dirname + '/vista/index.html')
  })

  

  app.listen(3000)
  console.log('Esta corriendo');