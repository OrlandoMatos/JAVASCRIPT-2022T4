var prompt = require('prompt');

prompt.start();

prompt.get(['numero'], function(error, resultado){
    let numero = +resultado.numero;
    let primo= true;
    
    for(let i= 2; i < numero; i++){
        
        if(numero%i==0){
            primo=false;
        }
       
        
    };

    if(primo==true){
        console.log(`el numero ${numero} es primo`);
    }else{
        console.log(`el numero ${numero} no es primo`);
    }
});
    
    // let numero = 0;
    // for(let i =0; i < 9; i++){
    //     console.log(i);
    // };
    

    // console.log('resultado '+mismonumero);