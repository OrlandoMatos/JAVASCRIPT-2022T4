var prompt = require('prompt');

prompt.start(); 

prompt.get(['frase'], function(error, resultado){
    let frase = resultado.frase;
    let letraA = 0;
    //orlando
    for(let i=0; i < frase.length; i++ ){
        if( frase[i] === 'a'){
            letraA++;
        }
    }

    console.log(`la letra a aparece ${letraA} veces`);
});

// let nombre = 'Orlando';
//     if(nombre[3] === 'a'){
//         console.log('Esto es A');
//     }
//     else{
//         console.log('no es a');
//     }