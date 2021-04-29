//Suma
let btnSumar = document.getElementById("btnSumar"); 

btnSumar.addEventListener("click", sumarDosNumeros);

function sumarDosNumeros(){
    let numero1 = Number (document.getElementById("numero1").value); 
    let numero2 = Number (document.getElementById("numero2").value);

    let resultado = numero1 + numero2;

    let containerResultado = document.getElementById("containerResultado");

    containerResultado.innerText = resultado;
}

//Resta
let btnRestar = document.getElementById("btnRestar"); 

btnRestar.addEventListener("click", restarDosNumeros);

function restarDosNumeros(){
    let numero1 = Number (document.getElementById("numero1").value); 
    let numero2 = Number (document.getElementById("numero2").value);

    let resultado = numero1 - numero2;

    let containerResultado = document.getElementById("containerResultado");

    containerResultado.innerText = resultado;
}

//Multiplicacion
let btnMultiplicar = document.getElementById("btnMultiplicar"); 

btnMultiplicar.addEventListener("click", multiplicarDosNumeros);

function multiplicarDosNumeros(){
    let numero1 = Number (document.getElementById("numero1").value); 
    let numero2 = Number (document.getElementById("numero2").value);

    let resultado = numero1 * numero2;

    let containerResultado = document.getElementById("containerResultado");

    containerResultado.innerText = resultado;
}

//Division
let btnDividir = document.getElementById("btnDividir"); 

btnDividir.addEventListener("click", dividirDosNumeros);

function dividirDosNumeros(){
    let numero1 = Number (document.getElementById("numero1").value); 
    let numero2 = Number (document.getElementById("numero2").value);

    let resultado = numero1 / numero2;

    let containerResultado = document.getElementById("containerResultado");

    containerResultado.innerText = resultado;
}


