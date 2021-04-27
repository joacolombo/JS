const inpNumeros = document.getElementById("inpNumeros");
const btnNumerosAlmacenados = document.getElementById("btnNumerosAlmacenados");
let numerosAlmacenados = [];
let indice = 0;

inpNumeros.addEventListener("keyup", almacenarValores);
btnNumerosAlmacenados.addEventListener("click", calcularMedia);

function almacenarValores(event) {
    //Validacion de solo actuar cuando se presione "Enter"
    if(event.key != "Enter"){
        return;
    }
    
    //Validacion de vacio
    if(inpNumeros.value == ""){
        alert("Es necesario ingresar el valor");
        return;
    }

    //Validacion de numero
    if(isNaN(inpNumeros.value)){
        alert("Favor de ingresar un valor numerico");
        return;
    }

    if(indice <= 9){
        numerosAlmacenados[indice] = Number(inpNumeros.value);
        indice++;
        inpNumeros.value = "";
    }else{
        alert("Alcanzo el limite de guardado.");
        inpNumeros.value = "";
    }
}

function calcularMedia(){
    const resultContainer = document.getElementById("resultContainer");
    let total = 0;
    let promedio = 0;

    for (let indice=0; indice<numerosAlmacenados.length; indice++){
        total = total + numerosAlmacenados[indice];
    }
    
    promedio = total / indice;

    resultContainer.innerHTML = `La media de los 10 valores es ${promedio}`;

    numerosAlmacenados = [];
    indice = 0;
}