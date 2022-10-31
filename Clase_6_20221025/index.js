const express = require('express')
const app = express()


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
    
})

app.get('/style.css', function(req, res){
    res.sendFile(__dirname + '/style.css');
})

app.get('/html.jpg', function(req, res){
    res.sendFile(__dirname + '/img/html.jpg')
})


app.listen(3000);
console.log('Servidor corriendo en el puerto 3000');