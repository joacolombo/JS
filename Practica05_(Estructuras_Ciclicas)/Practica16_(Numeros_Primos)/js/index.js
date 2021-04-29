const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularPrimo);

function calcularPrimo(){
    let resultadoAcumulado = "";
    let contador  = 0;
    let numero = Number(prompt(`Ingrese un numero entero positivo`));

    for(let i=2; i<=numero; i++){
        let iteracion = 1;
        let resto = 0;

        while (iteracion <= i){
            if(i%iteracion == 0){
                resto++;
            }
            iteracion++;
        }
    
        if(resto == 2){
            resultadoAcumulado += `<br>${i}`;
            contador++;
        }
    }

    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = `Hay ${contador} numeros primos menores o iguales a ${numero}: ${resultadoAcumulado}`;
}

// if(numero>2 && numero%1==0){
//     for(let i=2; i<=numero; i++){
//         while(esPrimo==true && div<i){
//             if(i%div==0){
//                 esPrimo = false;
//             }else{
//                 div++;
//             }
//             if(esPrimo == true){
//                 resultadoAcumulado += `${i} es primo`;
//             }
//         }
//     }
// }else{
//     alert("Ingrese un numero entero positivo");
//     return;
// }


// if(numero>=2 && numero%1==0){
//     for(let i=2; i<=numero; i++){
//         let j = 2;
//         let esPrimo = true;
//         while(esPrimo==true && i>j){
//             if(i%j != 0){
//                 j++; 
//             }else{
//                 esPrimo = false;
//             }
//             if(esPrimo==true){
//                 resultadoAcumulado += `<br>${i} es primo`;
//             }
//         }
//     }
// }else if(numero == 2){
//     resultadoAcumulado = `El numero ${numero} es el unico numero primo`
// }else{
//     alert("Ingrese un numero entero positivo");
//     return;
// }