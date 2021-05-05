const btnApp = document.getElementById("btnApp");

btnApp.addEventListener("click", almacenarArray);

let palabra = [];
let palabraASCII = [];
let resultado = "";


function almacenarArray(){
    console.group("ALMACENAR");

    let palabra = prompt("Ingrese una palabra");

    if(isNaN(palabra) == false && palabra != null){
        alert("Ingrese una palabra");
    }else if(/\s/.test(palabra)){
        alert("Ingrese una sola palabra");
    }else if(palabra == null){
        return;
    }else{
        resultado += `<div class="mt-3">
        <br>
        Palabra original: [${palabra}]
        </div>`;

        for(let index=0; index<palabra.length; index++){
            let codigo = palabra[index].charCodeAt();
            let codigo3 = codigo + 3;
            let letra3 = String.fromCharCode(codigo3);
            palabraASCII.push(letra3);
        }
    }
    mostrarArray();  
}

function mostrarArray(){
    console.log("MOSTRAR");

    resultado += `<div class="mt-3">
    <br>
    Palabra resulante: [${palabraASCII}]
    </div>`;

    resultContainer.innerHTML = resultado;

    palabraASCII = [];
}