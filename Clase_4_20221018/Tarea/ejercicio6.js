var prompt = require('prompt');
prompt.start();

prompt.get(['numero'], function(error, resultado){
    let numero = resultado.numero;
    let divisible = 2;

    while (divisible <= 7 ){
        
        function comparandoNumeros(){
            let resultado2 = numero % divisible;
            if (resultado2 == 0){
            console.log(`el numero es divisible entre ${divisible}`);
            }
        }
        
        if (divisible == 2){
            comparandoNumeros();
        }
        if (divisible ==3){
            comparandoNumeros();
        }
        if (divisible ==5){
            comparandoNumeros();
        }

        if (divisible ==7){
            comparandoNumeros();

            }
        
                     
        divisible ++; 
         
    }   
});