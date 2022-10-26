// const array1 = [1,2,3,5,6,9,50,100];
// const array2 = [1,5,3,6,2,10,100,110];
// let comparacion = 0;
// let comp =0;
//     while(comp <= array2.length){
//     for(let i = 0; i<=array1.length; i++){
//         if (array1[i] !== array2[comp]){
//             console.log('no son iguales');
           
//         }
//         else{
//             console.log('son iguales');
            
//         }
//     }
//     comp++;
// }
// const array2 = [1,5,3,6,2];
// let comparacionArray = 0;
//     while (comparacionArray < array2.length){
//          if(array2[comparacionArray] == array1[comparacionArray]){
//          console.log(`Los numeros similares son ${array2[comparacionArray]}`);
//          }
//  comparacionArray++;
// };
// while(comparacion <= array1.length){
//     while(comp !== array1[comparacion]){
//         if(array1[comparacion] == comparacion){
//             console.log('son iguales');
//         };
//         comp++;
//     }
    
//     comparacion++;
// }
var prompt = require('prompt');
prompt.start();

prompt.get(['numero1', 'numero2'], function(error, resultado){
    let numero1 = resultado.numero1;
    let numero2 = resultado.numero2;
   
    let comparacionDeEjecucion = parseInt(numero1);
    let comparacionDeEjecucion1 = parseInt(numero2);
    // console.log(comparacionDeEjecucion);
    // console.log(comparacionDeEjecucion1);

      if(comparacionDeEjecucion < comparacionDeEjecucion1){
        let divisor = 1;
        let divisor2 = 1;
        const array1 = [];
        const array2 = [];
        
                console.log();
                console.log('Los divisores del '+numero1 );
                    
                while(divisor < numero1){
                    let resultado1 = numero1 % divisor;
    
                    if (resultado1 == 0 ){
                     console.log('Los numeros divisores son ' + divisor);
                     array1.push(divisor);
                     }
               
                    divisor++;
                    };
    
                    console.log();
                    console.log('los divisores del '+numero2 );
           
                while(divisor2 < numero2){
                       let resultado2 = numero2 % divisor2;
    
                        if (resultado2 == 0 ){
                               console.log('Los numeros divisores son ' + divisor2);
                               array2.push(divisor2);
                            }
               
                        divisor2++;
                    };
       
    //            // esta es la comparacion de los divisores son comunes de los dos numeros;
    //                 //    console.log(array1);
    //                 //    console.log(array2);
    //         //            const array1 = [];
    //         //            const array2 = [];
    //         //            let comparacionArray = 0;
    //         //                while (comparacionArray < array2.length){
    //         //                     if(array2[comparacionArray] == array1[comparacionArray]){
    //         //                     console.log(`Los numeros similares son ${array2[comparacionArray]}`);
    //         //                 }
    //         //             comparacionArray++;
    //         //         };
            
                     console.log();
                     console.log('Los Numeros Similares son:' );
             let comp =0;
                while(comp < array2.length){
                 for(let i = 0; i<=array2.length; i++){
                    if (array1[i] !== array2[comp]){
                         
                          
                        }
                     else{
             
                        console.log('Los numeros divisores comunes son: '+array1[i]);                   
                    
                     }
             }
                 comp++;
            }
        
      }
      else{
        console.log('El primer numero tiene que ser menor que el segundo numero');
      }        
            
      
});