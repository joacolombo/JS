const btnInitApp = document.getElementById("btnInitApp");
const resultContainer = document.getElementById("resultContainer");

btnInitApp.addEventListener("click", almacenarValores);

let continuar = true; 
let array = [];
let index = 0;

let media = 0;
let mediana = 0;
let moda = 0;
let varianza = 0;
let desvioEstandar = 0;

function almacenarValores(){
    console.log("ALMACENAR")
    
    while (continuar == true){
        
        let numero = prompt(`Ingrese el ${index+1}º numero entero`);
        if(isNaN(numero) == true ){
            alert("Es necesario que ingrese un numero ");
        }else if(numero == null){
            continuar = false;
            break;
        }else{
            numero = Number(numero);
            array[index] = numero;
            index++;        
        }
    }
    console.log(array);
    calcular();
}

function calcular(){
    console.log("CALCULAR");

    for(let index = 0; index<array.length; index++){
        media += array[index]
    }
    media = media / array.length;



    mostrarValores();
}

function mostrarValores(){
    console.log("MOSTRAR");

    resultContainer.innerHTML = `<div class="alert alert-primary" role="alert">
    <br>
    <b>MEDIA</b>
    br
    </div>`;

    media = 0;
    mediana = 0;
    moda = 0;
    varianza = 0;
    desvioEstandar = 0;
}