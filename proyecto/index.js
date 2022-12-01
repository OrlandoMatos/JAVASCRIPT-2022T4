const express = require('express');
const app = express();
const path = require("path");


// app.use(express.static('assets'))
app.use("/assets", express.static(path.resolve(__dirname, "assets")));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
  })

  app.get('/tarea1', function (req, res) {
    res.sendFile(__dirname + '/vista/index.html')
  })

  app.get('/tarea2', function (req, res) {
    res.sendFile(__dirname + '/vista/index2.html')
  })

  app.get('/tarea3', function (req, res) {
    res.sendFile(__dirname + '/vista/tarea1.html')
  })

  app.get('/tarea4', function (req, res) {
    res.sendFile(__dirname + '/vista/tarea2.html')
  })

  
  app.listen(3000)
  console.log('Esta corriendo');