const btnMostrarValores = document.getElementById("btnMostrarValores");
const resultContainer = document.getElementById("resultContainer");

btnMostrarValores.addEventListener("click", almacenarValores);

let array = [];
let arrayImpar = []; 

function random(min, max){
    console.log("GENERAR"); 
    let numeroAleatorioGenerado = Math.floor((Math.random() * (max - min + 1)) + min);
    console.log(numeroAleatorioGenerado);
    return numeroAleatorioGenerado;
}

function almacenarValores(){ 
    console.log("ALMACENAR"); 
    
    for(let index=0; index<30; index++){
        array[index] = random(100,300);
        console.log(array);
    }
    validarImpar();
}

function validarImpar(){
    console.log("VALIDAR");
    
    let indexImpar = 0;
    
    for(let index=0; index<array.length; index++){
        if(array[index]%2 != 0){
            arrayImpar[indexImpar] = array[index];
            indexImpar++;
        }
    }
    mostrarValores();
}

function mostrarValores(){
    console.log("MOSTRAR"); 
    let resultado = "";

    resultado += `<li class="list-group-item font-weight-bold mt-3">Arreglo Completo</li>`;

    for(let index=0; index<array.length; index++){
        resultado += `<li class="list-group-item"> Array[${index}] = ${array[index]} </li>`;
    }

    resultado += `<li class="list-group-item font-weight-bold mt-3">Arreglo Impar</li>`;

    for(let index=0; index<arrayImpar.length; index++){
        resultado += `<li class="list-group-item"> Array[${index}] = ${arrayImpar[index]} </li>`;
    }

    resultContainer.innerHTML = resultado;
}