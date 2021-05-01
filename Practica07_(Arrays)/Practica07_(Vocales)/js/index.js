const btnApp = document.getElementById("btnApp");


btnApp.addEventListener("click", almacenarArray);

let array = [];
let arrayVocales = [];
let index = 0;

function almacenarArray(){
    console.group("ALMACENAR");

    let continuar = true;

    while (continuar == true){
        let palabra = prompt("Ingrese una palabra");
        
        if(isNaN(palabra) == false && palabra != null){
            alert("Ingrese una palabra");
        }else if(/\s/.test(palabra)){
            alert("Ingrese una sola palabra");
        }else if(palabra == null){
            continuar = false;
        }else{
            array[index] = palabra;
            console.log(array[index]);
            index++;
        }
    }
    validarArray();
}

function validarArray(){
    console.log("VALIDAR");
    console.log(array[2].charAt());
    let index2 = 0;

    for(let index=0; index<array.length; index++){
        let letra = array[index].charAt();

        if(letra == "a"){
            arrayVocales[index2] = array[index];
            index2++;
        }else if(letra == "e"){
            arrayVocales[index2] = array[index];
            index2++;
        }else if(letra == "i"){
            arrayVocales[index2] = array[index];
            index2++;
        }else if(letra == "o"){
            arrayVocales[index2] = array[index];
            index2++;
        }else if(letra == "u"){
            arrayVocales[index2] = array[index];
            index2++;
        }
    }
    mostrarArray();
}

function mostrarArray(){
    console.log("MOSTRAR");

    let resultado = "";

    for(let index=0; index<arrayVocales.length; index++){ 
        resultado += `<li class="list-group-item"> Array[${index}] = ${arrayVocales[index]} </li>`;
    }

    resultContainer.innerHTML = resultado;
}

/*
function random(min, max){
    console.log("ALMACENO"); 
    let numeroAleatorioGenerado = Math.floor((Math.random() * (max - min + 1)) + min);
    console.log(numeroAleatorioGenerado);
    return numeroAleatorioGenerado;
}

function determinarLongitud(event){
    console.log("PASO 1");
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
    btnMostrarValores.disabled = false;
    almacenarValores();
}

function almacenarValores(){ 
    console.log("PASO 2"); 
    for(let index=0; index<longitud; index++){
        array[index] = random(0,9);
        console.log(array);
    }
}

function mostrarValores(){
    console.log("PASO 3"); 
    let resultado = "";
    let suma = 0;

    for(let index=0; index<longitud; index++){
        suma += array[index];
        resultado += `<li class="list-group-item"> Array[${index}] = ${array[index]} </li>`;
    }

    resultado +=`<li class="list-group-item"> La suma de los valores es ${suma} </li>`;

    resultContainer.innerHTML = resultado;
}
*/
