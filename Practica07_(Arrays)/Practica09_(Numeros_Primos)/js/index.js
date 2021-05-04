const btnMostrarValores = document.getElementById("btnMostrarValores");
const resultContainer = document.getElementById("resultContainer");

btnMostrarValores.addEventListener("click", almacenarNumerosPrimos);

let numerosPrimos = [];

function almacenarNumerosPrimos(){
    console.log("PASO 1 ALMACENAR");

    let index = 0;
    let numero = 1000;

    while(numero>=2){
        let isPrimo = validarNumeroPrimo(numero);

        if(isPrimo == true){
            numerosPrimos[index] = numero;
            index++;
        }
        numero--;
    }

    mostrarValores();
}

function validarNumeroPrimo(numero){
    console.log("PASO 2 VALIDAR");

    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor == 0){
            //false lo retorno cuando se encuentra algun divisor
            return false;
        }
    }
    //true lo retorno hasta que se termina el ciclo
    return true;
}

function mostrarValores(){
    console.log("PASO 3 MOSTRAR");

    let resultado = "";
    
    for(let index = 0; index < numerosPrimos.length; index++){
        resultado += `<li class="list-group-item"> Array [${index}] = ${numerosPrimos[index]} </li>`;
    }
    
    resultContainer.innerHTML = resultado;
}