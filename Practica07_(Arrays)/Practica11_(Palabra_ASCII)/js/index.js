const btnApp = document.getElementById("btnApp");

btnApp.addEventListener("click", almacenarArray);

let palabra = [];
let palabraASCII = [];

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
            
        }
        mostrarArray();
}

function mostrarArray(){
    console.log("MOSTRAR");

    resultContainer.innerHTML = palabraReves;
}