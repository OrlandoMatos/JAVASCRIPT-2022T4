var prompt =require('prompt');

prompt.start();

prompt.get(['numero'], function(error, result){
    let numero = +result.numero;
    const divisor = 2;
    let resultado = (numero % divisor);


if (resultado === 1){
       console.log('El numero '+numero+ ' no es divisible entre 2');
}
else{
        console.log('El numero '+numero+ ' es divisible entre 2');
}
});


