var prompt = require('prompt');

prompt.start();

prompt.get(['nombre'], function(error, resultado){
    console.log('Hola ' +resultado.nombre);
   
});

