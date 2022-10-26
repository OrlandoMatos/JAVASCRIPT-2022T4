var prompt = require('prompt');
prompt.start();

prompt.get(['frase'], function(error, resultado){
    let frase = resultado.frase;
    let conteosDeVocales = 0;
    let a = 0; e =0; i=0; o = 0; u=0;

    for(let i=0; i<frase.length; i++){
        if (frase[i] === 'a'){
            a++;
        }
        else if(frase[i]=== 'e'){
            e++;
        }
        else if(frase[i]=== 'i'){
            i++;
        }
        else if(frase[i]=== 'o'){
            o++;
        }
        else if(frase[i]=== 'u'){
            u++;
        }
    }

    console.log(`En la frase ${frase} tiene las siguientes vocales`);

    console.log(`La vocal a aparece: ${a} veces`);
    console.log(`La vocal a aparece: ${e} veces`);
    console.log(`La vocal i aparece: ${i} veces`);
    console.log(`La vocal o aparece: ${o} veces`);
    console.log(`La vocal u aparece: ${u} veces`);
});