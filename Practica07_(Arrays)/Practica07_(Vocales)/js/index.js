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
    
    let index2 = 0;

    for(let index=0; index<array.length; index++){
        //let letra = array[index].charAt();
        let letra = array[index].slice(0,1);

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