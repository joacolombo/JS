const inpLongitud = document.getElementById("inpLongitud");
const inpValores = document.getElementById("inpValores");
const btnCalcular = document.getElementById("btnCalcular");
const resultContainer = document.getElementById("resultContainer");

inpValores.disabled = true;
btnCalcular.disabled = true;

inpLongitud.addEventListener("keyup", determinarLongitud);
inpValores.addEventListener("keyup", almacenarValores);
btnCalcular.addEventListener("click", mostrarValores);

let longitud = 0;
let indice = 0;
let numerosAlmacenados = [];
let media = 0;
let mediana = 0;
let moda = 0;
let varianza = 0;
let desvioEstandar = 0;

function calcularMedia(array){
    let suma = 0;
    for(let i=0; i<array.length; i++){
        suma += array[i];
    }
    media = (suma / array.length);
}

function calcularMediana(array){
    if((array.length % 2) == 0){
        let mitad = array.length / 2;
        mediana = (array[mitad] + array[mitad + 1]) / 2;
    }else{
        let mitad = Math.round(array.length / 2);
        mediana = array[mitad];
    }
}

function calcularModa(array){
    let contador = 0;
    let modaActual = 0;
    let valorModa = 0;
    let repeticiones = 0;

    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[i] == array[j]){
                contador++;
            }
        }

        if(contador >= modaActual){
            repeticiones = contador;
            modaActual = contador;
            valorModa = array[i];
        }
        contador = 0;
    }

    if(modaActual < 2){
        moda = 0;
    }else{
        moda = valorModa;
    }
}

function calcularVarianza(array){
    let diferencia = Math.round(media);

    for(let i=0; i<array.length; i++){
        varianza = varianza + Math.pow((array[i] - diferencia), 2);
    }

    varianza = varianza / array.length;
    desvioEstandar = Math.sqrt(varianza);
}

function determinarLongitud(event){
    console.log("DETERMINAR");

    if(event.key != "Enter"){
        return;
    }

    if(inpLongitud.value == ""){
        alert("Ingrese una longitud");
        return;
    }

    if(isNaN(inpLongitud.value)){
        alert("Ingrese un valor numerico");
        return;
    }

    longitud = Number(inpLongitud.value);
    inpLongitud.disabled = true;
    inpValores.disabled = false;
    btnCalcular.disabled = false;
}

function almacenarValores(event){
    console.log("ALMACENAR");

    if(event.key != "Enter"){
        return;
    }

    if(indice == longitud){
        alert("Se llego al limite de almacenamiento");
        inpValores.disabled = true;
        inpValores.value = "";
        return;
    }

    if(inpValores.value == ""){
        alert("Ingrese un valor para almacenar");
        inpValores.value = "";
        return;
    }

    if(isNaN(inpValores.value)){
        alert("Ingrese un valor numerico");
        inpValores.value = "";
        return;
    }

    numerosAlmacenados[indice] = Number(inpValores.value);
    indice++;
    inpValores.value = "";
}

function mostrarValores(){
    console.log("MOSTRAR");

    numerosAlmacenados.sort((a,b)=>a-b);

    calcularMediana(numerosAlmacenados);
    calcularMedia(numerosAlmacenados);
    calcularModa(numerosAlmacenados);
    calcularVarianza(numerosAlmacenados);

    resultContainer.innerHTML = `<span>
    Resultados para [${numerosAlmacenados}]
    <br><br>
    Media: ${media.toPrecision(2)}
    <br>
    Mediana: ${mediana.toPrecision(2)} 
    <br>
    Moda: ${moda.toPrecision(2)}
    <br>
    Varianza: ${varianza.toPrecision(2)}
    <br>
    Desvio Estandar: ${desvioEstandar.toPrecision(2)}
    </span>`;
}
