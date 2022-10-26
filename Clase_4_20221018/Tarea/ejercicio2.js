var prompt =require('prompt');
prompt.start();

prompt.get(['frase'], function(error, resultado){
    let frase= resultado.frase;
    let vocalesA;
    let vocalesE;
    let vocalesI;
    let vocalesO;
    let vocalesU;
    //orlando
    for(let i =0; i < frase.length; i++){
        if(frase[i] === 'a'){
           console.log(`${frase[i]} : Esto es una Vocal`);
            vocalesA = 'a';
        }
        else if(frase[i] === 'e'){
            console.log(`${frase[i]} : Esto es una Vocal`);
            vocalesE = 'e';
            
        }

        else if(frase[i] === 'i'){
            console.log(`${frase[i]} : Esto es una Vocal`);
            vocalesI = 'i';
        }

        else if (frase[i] === 'o'){
            console.log(`${frase[i]} : Esto es una Vocal`);
            vocalesO = 'o';
        }

        else if(frase[i] === 'u'){
            console.log(`${frase[i]} : Esto es una Vocal`);
            vocalesU = 'u';
        }
        else{
            console.log(`${frase[i]} : Esto no es una Vocal`);
        }

    }
   
});