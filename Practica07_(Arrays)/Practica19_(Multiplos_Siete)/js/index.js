const btnApp = document.getElementById("btnApp");
const resultContainer = document.getElementById("resultContainer");

btnApp.addEventListener("click", almacenarValores);

let longitud = 30;
let arrayA = [];
let arrayB = [];

function random(min, max){
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function almacenarValores(){
    for(let i=0; i<longitud; i++){
        arrayA[i] = random(1, 100);
    }

    for(let i=0; i<arrayA.length; i++){
        if ((arrayA[i] % 7) == 0) {
            arrayB.push(arrayA[i]);
        }
    }
    
    mostrarValores();
}

function mostrarValores(){
    resultContainer.innerHTML = `
    <b>Array Original:</b>
    <br>
    [${arrayA}]
    <br><br>
    <b>Array con Multiplos de 7:</b>
    <br>
    [${arrayB}]`;
}