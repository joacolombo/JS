const inpValores = document.getElementById("inpValores");
const bntMerge = document.getElementById("bntMerge");
const resultContainer = document.getElementById("resultContainer");

inpValores.addEventListener("keyup", almacenarValores);
bntMerge.addEventListener("click", mostrarValores);

let longitud = 10;
let indice = 0;
let arrayA = [];
let arrayB = [];
let arrayC = [];

function almacenarValores(event){
    if(event.key != "Enter"){
        return;
    }
    if(indice == longitud){
        alert("Se llegó al limite de almacenamiento");
        inpValores.disabled = true;
        inpValores.value = "";
        return;
    }
    if(inpValores.value == ""){
        alert("Debes ingresar un dato para almacenar");
        inpValores.value = "";
        return;
    }
    if(isNaN(inpValores.value)){
        alert("La longitud debe ser un valor númerico");
        inpValores.value = "";
        return;
    }

    if(indice < 5){
        arrayA[indice] = Number(inpValores.value);
    }else{
        arrayB.push(Number(inpValores.value));
    }

    indice++;
    inpValores.value = "";
}

function mostrarValores(){
    for(let i=0; i<arrayA.length; i++){
        arrayC.push(arrayA[i]);
    }

    for(let i=0; i<arrayB.length; i++){
        arrayC.push(arrayB[i]);
    }

    resultContainer.innerHTML = `
    Array A: [${arrayA}]
    <br>
    Array B: [${arrayB}]
    <br>
    Array C: [${arrayC}]`;
}