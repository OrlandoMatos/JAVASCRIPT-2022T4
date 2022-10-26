const prompt = require("prompt");

prompt.start();

prompt.get(['frase'], function(error, resultado){
    let frase = resultado.frase;
    let numeroDeVocales = 0;

    for(let i= 0; i<frase.length; i++){
        if (frase[i] === 'a'){
            numeroDeVocales++;
        }
        else if (frase[i] === 'e'){
            numeroDeVocales++;
        }
        else if (frase[i] === 'i'){
            numeroDeVocales++;
        }
        else if (frase[i] === 'o'){
            numeroDeVocales++;
        }
        else if (frase[i] === 'u'){
            numeroDeVocales++;
        }
        

    }

    console.log(`La palabra ${frase} tiene ${numeroDeVocales} vocales`);
});