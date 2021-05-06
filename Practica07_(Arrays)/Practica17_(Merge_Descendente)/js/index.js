const inpLongitud = document.getElementById("inpLongitud");
const bntMerge = document.getElementById("bntMerge");
const resultContainer = document.getElementById("resultContainer");

inpLongitud.addEventListener("keyup", longitudArray);
bntMerge.addEventListener("click", generarArray);

let longitud = 0;
let arrayA = [];
let arrayB = [];
let arrayC = [];

function random(min, max){
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function longitudArray(event){
    if(event.key != "Enter"){
        return;
    }

    if(inpLongitud.value == ""){
        alert("Ingresar una longitud");
        return;
    }

    if(isNaN(inpLongitud.value)){
        alert("Ingresar un valor numerico");
        return;
    }

    longitud = Number(inpLongitud.value);
    inpLongitud.disabled = true;
}

function generarArray(){
    for(let i=0; i<longitud; i++){
        arrayA[i] = random(0,100);
        arrayB[i] = random(0,100);
    }

    for(let i=0; i<arrayA.length; i++){
        arrayC[i] = arrayA[i];
    }

    for(let i=0; i<arrayB.length; i++){
        arrayC.push(arrayB[i]);
    }

    arrayC.sort((a,b)=>b-a);

    resultContainer.innerHTML = `
    El arreglo A: [${arrayA}]
    <br> 
    El arreglo B: [${arrayB}]
    <br>
    El arreglo C: [${arrayC}]
    <br>`;
}