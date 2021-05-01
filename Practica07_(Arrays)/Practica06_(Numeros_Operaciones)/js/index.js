const inpLongitud = document.getElementById("inpLongitud");
const btnSuma = document.getElementById("btnSuma");
const btnResta = document.getElementById("btnResta");
const btnMultiplicacion = document.getElementById("btnMultiplicacion");
const resultContainer = document.getElementById("resultContainer");

btnSuma.disabled = true;
btnResta.disabled = true;
btnMultiplicacion.disabled = true;

inpLongitud.addEventListener("keydown", determinarLongitud);
btnSuma.addEventListener("click", mostrarSuma);
btnResta.addEventListener("click", mostrarResta);
btnMultiplicacion.addEventListener("click", mostrarMultiplicacion);

let longitudList = 0;
let arrayA = [];
let arrayB = [];
let arrayC = [];
let resultado = "";

function random(min, max){
    console.log("GENERAR"); 
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
    btnSuma.disabled = false;
    btnResta.disabled = false;
    btnMultiplicacion.disabled = false; 
    almacenarValores();
}

function almacenarValores(){ 
    console.log("ALMACENAR"); 
    for(let index=0; index<longitud; index++){
        arrayA[index] = random(-100,100);
        arrayB[index] = random(-100,100);
        console.log(arrayA);
        console.log(arrayB);
    }
}

function mostrarSuma(){
    for(index=0; index<longitud; index++){
        arrayC[index] = arrayA[index] + arrayB[index]
    }
    resultado += `<li class="list-group-item font-weight-bold">C = A + B</li>`;
   console.log(arrayC);
   mostrarValores();
}

function mostrarResta(){
    for(index=0; index<longitud; index++){
        arrayC[index] = arrayB[index] - arrayA[index]
    }
    resultado += `<li class="list-group-item font-weight-bold">C = B - A</li>`;
    console.log(arrayC);
    mostrarValores();
}

function mostrarMultiplicacion(){
    for(index=0; index<longitud; index++){
        arrayC[index] = arrayB[index] * arrayA[index]
    }
    resultado += `<li class="list-group-item font-weight-bold">C = B x A</li>`;
    console.log(arrayC);
    mostrarValores();
}

function mostrarValores(){
    console.log("MOSTRAR");
    
    resultado += `<li class="list-group-item">Array A = ${arrayA}</li>`;
    resultado += `<li class="list-group-item">Array B = ${arrayB}</li>`;
    resultado += `<li class="list-group-item">Array C = ${arrayC}</li>`;

    resultContainer.innerHTML = resultado;
    resultado = "";
}
