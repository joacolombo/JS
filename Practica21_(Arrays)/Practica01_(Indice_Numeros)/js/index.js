const inpNumeros = document.getElementById("inpNumeros");
const btnNumerosAlmacenados = document.getElementById("btnNumerosAlmacenados");

let numerosAlmacenados = [];
let indice = 0;

inpNumeros.addEventListener("keyup", almacenarValores);
btnNumerosAlmacenados.addEventListener("click", mostrarValores);

function almacenarValores(event) {
    if(event.key != "Enter"){
        return;
    }
    
    if(inpNumeros.value == ""){
        alert("Es necesario ingresar el valor.");
        return;
    }

    if(isNaN(inpNumeros.value)){
        alert("Favor de ingresar un valor numerico.");
        return;
    }

    if(indice <= 4){
        numerosAlmacenados[indice] = Number(inpNumeros.value);
        indice++;
        inpNumeros.value = "";
        console.log(numerosAlmacenados);
    }else{
        alert("Alcanzo el limite de guardado.");
        inpNumeros.value = "";
    }
}

function mostrarValores(){
    const lstValoresAlmacenados = document.getElementById("lstValoresAlmacenados");

    let mensajeResultado = "";

    for (let indice=0; indice<numerosAlmacenados.length; indice++){
        mensajeResultado += `<li class="list-group-item">El numero que se encuentra en el indice ${indice} es ${numerosAlmacenados[indice]}</li>`;
    } 

    lstValoresAlmacenados.innerHTML = mensajeResultado;

    numerosAlmacenados = [];
    indice = 0;
}