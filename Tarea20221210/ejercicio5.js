var prompt = require('prompt');

prompt.start();


prompt.get(['numero1', 'numero2'], function(err, result){
    let numero1 = result.numero1;
    let numero2 = result.numero2;
    
       // console.log('Introduce los siguientes numeros:');
    
    if(numero1 > numero2){
        console.log('El numero ' + numero1 + ' es mayor que el numero ' + result.numero2);
    
    }
    else if(numero1 == numero2){
        console.log('Los numeros son iguales');
    }
    else{
        console.log('El numero ' +numero2 + ' es mayor que el numero ' +numero1);
    };


});

