const inpLongitud = document.getElementById("inpLongitud");
const btnMostrarValores = document.getElementById("btnMostrarValores");
const resultContainer = document.getElementById("resultContainer");

btnMostrarValores.disabled = true;

inpLongitud.addEventListener("keydown", determinarLongitud);
btnMostrarValores.addEventListener("click", mostrarValores);

let longitudList = 0;
let array = [];
let arrayPar = []; 

function random(min, max){
    console.log("ALMACENO"); 
    let numeroAleatorioGenerado = Math.floor((Math.random() * (max - min + 1)) + min);
    console.log(numeroAleatorioGenerado);
    return numeroAleatorioGenerado;
}

function determinarLongitud(event){
    console.log("LONGITUD");
    if(event.key != "Enter"){
        return;
    }else if(isNaN(inpLongitud.value) == true){
        alert('Favor de ingresar un número entero')
        return;
    }else if(Number.isInteger(Number(inpLongitud.value)) == false){
        alert('Favor de ingresar un número entero')
        return;
    }else{
        longitud = Number(inpLongitud.value);
    }

    inpLongitud.disabled = true;
    btnMostrarValores.disabled = false;
    almacenarValores();
}

function almacenarValores(){ 
    console.log("ALMACENAR"); 
    
    for(let index=0; index<longitud; index++){
        array[index] = random(0,9);
        console.log(array);
    }
    validarPar();
}

function validarPar(){
    console.log("VALIDAR");
    
    let indexPar = 0;
    
    for(let index=0; index<longitud; index++){
        if(array[index]%2 == 0){
            arrayPar[indexPar] = array[index];
            indexPar++;
        }
    }
}

function mostrarValores(){
    console.log("MOSTRAR"); 
    let resultado = "";

    resultado += `<li class="list-group-item font-weight-bold">Arreglo Completo</li>`;

    for(let index=0; index<array.length; index++){
        resultado += `<li class="list-group-item"> Array[${index}] = ${array[index]} </li>`;
    }

    resultado += `<li class="list-group-item font-weight-bold">Arreglo Par</li>`;

    for(let index=0; index<arrayPar.length; index++){
        resultado += `<li class="list-group-item"> Array[${index}] = ${arrayPar[index]} </li>`;
    }

    resultContainer.innerHTML = resultado;
}