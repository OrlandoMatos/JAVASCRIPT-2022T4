var prompt =require('prompt');

prompt.start();

prompt.get(['numero1', 'numero2','numero3'], function(err, result){

    let numero1 = +result.numero1;
    let numero2 = +result.numero2;
    let numero3 = +result.numero3;

    if(numero1 > numero2 && numero1 > numero3){
    console.log('El numero ' +numero1+ ' es mayor que los numeros '+numero2+ ' y ' +numero3);
    }
    else if(numero2 > numero1 && numero2 > numero3){
    console.log('El numero ' +numero2+ ' es mayor que los numeros '+numero1+ ' y ' +numero3);
    }

    else if(numero3 > numero1 || numero3 > numero2){
    console.log('El numero ' +numero3+ ' es mayor que los numeros '+numero2+ ' y ' +numero1);
    }

    else{
    console.log('Los numero son iguales');
    }
    });
