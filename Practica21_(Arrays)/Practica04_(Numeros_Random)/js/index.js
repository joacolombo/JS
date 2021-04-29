const inpLongitud = document.getElementById("inpLongitud");
const btnMostrarValores = document.getElementById("btnMostrarValores");
const resultContainer = document.getElementById("resultContainer");

btnMostrarValores.disabled = true;

inpLongitud.addEventListener("keydown", determinarLongitud);
btnMostrarValores.addEventListener("click", mostrarValores);

let longitudList = 0;
let array = [];

function random(min, max){
    console.log("ALMACENO"); 
    let numeroAleatorioGenerado = Math.floor((Math.random() * (max - min + 1)) + min);
    console.log(numeroAleatorioGenerado);
    return numeroAleatorioGenerado;
}

function determinarLongitud(event){
    console.log("PASO 1");
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
    console.log("PASO 2"); 
    for(let index=0; index<longitud; index++){
        array[index] = random(0,9);
        console.log(array);
    }
}

function mostrarValores(){
    console.log("PASO 3"); 
    let resultado = "";
    let suma = 0;

    for(let index=0; index<longitud; index++){
        suma += array[index];
        resultado += `<li class="list-group-item"> Array[${index}] = ${array[index]} </li>`;
    }

    resultado +=`<li class="list-group-item"> La suma de los valores es ${suma} </li>`;

    resultContainer.innerHTML = resultado;
}

//Solicitar la longitud del array OK
//Generar funcion de numeros aleatorios entre 0y9
//Generar funcion de almacenamiento de valores
//Generar funcion para mostrar valores