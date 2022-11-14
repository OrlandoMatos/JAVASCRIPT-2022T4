const express = require('express')
const app = express()


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
    
})

app.use(express.static('assets/css'));
app.use(express.static('assets/img'))

// app.get('/style.css', function(req, res){
//     res.sendFile(__dirname + '/assets/css/style.css');
// })

// app.get('/html.jpg', function(req, res){
//     res.sendFile(__dirname + '/assets/img/html.jpg')
// })




app.listen(3000);
console.log('Servidor corriendo en el puerto 3000');
