var prompt = require('prompt')
prompt.start();

prompt.get(['numero'], function (error, resultado){
    let numero = resultado.numero;
    let divisores = 1;

    while(divisores <= numero){
        let resultado2 = numero % divisores;

        if (resultado2 == 0){
            console.log(`Los numero divisores son ${divisores}` );
        }

        divisores++;
    }
    

});