var prompt =require('prompt');

prompt.start();

prompt.get(['numero1', 'numero2'], function(arr, resultado){
    let numero1 = resultado.numero1;
    let numero2 = resultado.numero2;
    let suma = parseInt(numero1) + parseInt(numero2);
       
    console.log('La suma es '+suma);


});

