var prompt = require('prompt');
prompt.start();

prompt.get(['numero'], function(error, resultado){
    let numero = resultado.numero;
    let divisible2 = 2;
        
    while (divisible2 <= 7){
        let resultado2 = numero % divisible2;
        // let resultado3 = numero % divisible2;
        // let resultado5 = numero % divisible2;
        // let resultado7 = numero % divisible2;
        if (resultado2 == 0){
            console.log(`El numero es divisible entre ${divisible2}`);
            break;
             }
    
        else if(resultado2 == 0){
            console.log(`El numero es divisible entre ${divisible2}`);
            break;
             }
    
        else if(resultado2 == 0){
            console.log(`El numero es divisible entre ${divisible2}`);
            break;
            }
    
        else if(resultado2 == 0){
            console.log(`El numero es divisible entre ${divisible2}`);
            break;
             }
       

        divisible2++;

    }
       
});