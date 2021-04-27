const inpLongitud = document.getElementById("inpLongitud");
const inpValores = document.getElementById("inpValores");
const btnMostrarValores = document.getElementById("btnMostrarValores");

inpValores.disabled = true;
btnMostrarValores.disabled = true;

inpLongitud.addEventListener("keyup", determinarLongitud);
inpValores.addEventListener("keyup", almacenarValores);
btnMostrarValores.addEventListener("click", mostrarValores);

let longitudList = 0;
let indice = 0;
let numerosAlmacenados = [];

function determinarLongitud(event){
    if(event.key != "Enter"){
        return;
    }

    longitudList = Number(inpLongitud.value);

    inpLongitud.disabled = true;
    inpValores.disabled = false;
    btnMostrarValores.disabled = false;
}

function almacenarValores(event){
    if(event.key != "Enter"){
        return;
    }

    if(indice>=longitudList){
        alert("Se llego al limite de almacenamiento");
        inpValores.value = "";
        return;
    }

    let valorIngresado = inpValores.value;

    if(valorIngresado==""){
        alert("Favor de ingresar un valor")
        inpValores.value = "";
        return;
    }

    if(isNaN(valorIngresado)){
        alert("Favor de ingresar un valor numerico")
        inpValores.value = "";
        return;
    }

    for(let indice2=0; indice2<=numerosAlmacenados.length; indice2++){
        if(valorIngresado == numerosAlmacenados[indice2]){
            alert("Valor repetido, favor de ingresar otro");
            inpValores.value = "";
            return;
        }
    }
    
    numerosAlmacenados[indice] = Number(valorIngresado);
    indice++;
    inpValores.value = "";  
}

function mostrarValores(){
    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `Numeros almacenados: ${numerosAlmacenados}`;
}