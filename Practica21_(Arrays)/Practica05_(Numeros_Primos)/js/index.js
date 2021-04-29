
const inpLongitud = document.getElementById("inpLongitud")
const btnMostrarValores = document.getElementById("btnMostrarValores");
const resultContainer = document.getElementById("resultContainer");

inpLongitud.addEventListener("keydown", almacenarNumerosPrimos);
btnMostrarValores.addEventListener("click", mostrarValores);

btnMostrarValores.disabled = true;

let longitud = 0;
let numerosPrimos = [];
let primoMayor = 0;
let indexMayor = 0;

function almacenarNumerosPrimos(event){
    console.log("PASO 1 ALMACENAR");
    
    if(event.key != "Enter"){
        return;
    }else if(isNaN(inpLongitud.value) == true){
        alert("Es necesario que ingrese un valor numerico");
        return;
    }else if(Number(inpLongitud.value) <= 0){
        alert("Ingrese una longitud valida");
        return;
    }else if(inpLongitud.value == ""){
        alert("Es necesario que ingrese un valor");
        return;
    }else{
        longitud = Number(inpLongitud.value);
    }

    for(let index = 0; index<longitud; index++){
        let numero = random(2, 100);
        let isPrimo = validarNumeroPrimo(numero);

        if(isPrimo==true){
            numerosPrimos[index] = numero;
            
            if(numero > primoMayor){
                primoMayor = numero;
                indexMayor = index;
            }
        }else{
            index--;
        }
    }

    inpLongitud.disabled = true;
    btnMostrarValores.disabled = false;
}

function random(min, max){
    console.log("PASO 2 GENERAR");

    let numero = Math.floor((Math.random() * (max - min + 1)) + min);
    return numero;
}

function validarNumeroPrimo(numero){
    console.log("PASO 3 VALIDAR");

    for(let divisor=2; divisor<numero; divisor++){
        if(numero%divisor == 0){
            //false lo retorno cuando se encuentra algun divisor
            return false;
        }
    }
    //true lo retorno hasta que se termina el ciclo
    return true;
}

function mostrarValores(){
    console.log("PASO 4 MOSTRAR");

    let resultado = "";

    for(let index = 0; index < longitud; index++){
        resultado += `<li class="list-group-item"> Array [${index}] = ${numerosPrimos[index]} </li>`;
    }

    resultado += `<li class="list-group-item">El numero mayor dentro del arreglo es el ${primoMayor} en el indice ${indexMayor}</li>`;

    resultContainer.innerHTML = resultado;
    
    inpLongitud.disabled = false;
    btnMostrarValores.disabled = true;
    primoMayor  = 0;
    indexMayor = 0;
}