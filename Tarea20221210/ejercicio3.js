var prompt = require('prompt');

prompt.start();

prompt.get(['Introduce el nombrenombre'], function(error, resultado){
    console.log('Hola ' +resultado.nombre);
   
});

