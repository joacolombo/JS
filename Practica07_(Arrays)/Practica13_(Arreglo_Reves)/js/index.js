const btnMostrarValores = document.getElementById("btnMostrarValores");
const resultContainer = document.getElementById("resultContainer");

btnMostrarValores.addEventListener("click", invertirArray);

let arrayInicial = [0,1,2,3,4,5,6,7,8,9];
let arrayReverse = [];
let longitud = arrayInicial.length - 1;

function invertirArray(){
    console.log("PASO 1 ALMACENAR");

    for(let index=0; index<arrayInicial.length; index++){
        arrayReverse[longitud] = arrayInicial[index];
        longitud--;
    }
    mostrarValores();
}

function mostrarValores(){
    console.log("PASO 2 MOSTRAR");
    
    resultContainer.innerHTML = `Arreglo al reves: [${arrayReverse}]`;
}