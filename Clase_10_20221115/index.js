const express = require('express')
const app = express();
const path = require("path")


// app.use(express.static('assets'))
app.use("/assets", express.static(path.resolve(__dirname, "assets")));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Tarea/tarea1.html')
  })
//   app.get('/style.css', function (req, res) {
//     res.sendFile(__dirname + '/assets/css/Style.css')
//   })
   
    
  app.get('/tarea2', function (req, res) {
    res.sendFile(__dirname + '/Tarea2/tarea2.html')
  })

//   app.get('/style2.css', function (req, res) {
//     res.sendFile(__dirname + '/assets/css/style2.css')
//   })
 
   

  app.listen(3000)
  console.log('Esta corriendo');