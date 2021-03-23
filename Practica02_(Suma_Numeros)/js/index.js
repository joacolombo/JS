//Entradas: Son los datos que necesito que me otorgue el usuario
//Procesos:Son las acciones que se le van a realizar a a las entradas
//Salidas: Son los resultados obtenidos por los procesos realizados

//Suma
let btnSumar = document.getElementById("btnSumar"); //Obtenemos un elemento por medio del id y lo almacenamos en una variable

btnSumar.addEventListener("click", sumarDosNumeros);

function sumarDosNumeros(){
    let numero1 = Number (document.getElementById("numero1").value); //Convierte en un valor numerico el elemento que obtenemos por medio de la propiedad value que por defecto es un string
    let numero2 = Number (document.getElementById("numero2").value);

    let resultado1 = numero1 + numero2;

    let containerSuma = document.getElementById("containerSuma");

    containerSuma.innerText = resultado1;
}

//Resta
let btnRestar = document.getElementById("btnRestar");

btnRestar.addEventListener("click", restarDosNumeros);

function restarDosNumeros(){
    let numero3 = Number (document.getElementById("numero3").value);

    let numero4 = Number (document.getElementById("numero4").value);

    let resultado2 = numero3 - numero4;

    let containerResta = document.getElementById("containerResta");

    containerResta.innerText = resultado2;
}

//Multiplicacion
let btnMultiplicar = document.getElementById("btnMultiplicar");

btnMultiplicar.addEventListener("click", multiplicarDosNumeros);

function multiplicarDosNumeros(){
    let numero5 = Number (document.getElementById("numero5").value); 

    let numero6 = Number (document.getElementById("numero6").value);

    let resultado3 = numero5 * numero6;

    let containerMultiplicacion = document.getElementById("containerMultiplicacion");

    containerMultiplicacion.innerText = resultado3;
}

//Division
let btnDividir = document.getElementById("btnDividir");

btnDividir.addEventListener("click", dividirDosNumeros);

function dividirDosNumeros(){
    let numero7 = Number (document.getElementById("numero7").value); 

    let numero8 = Number (document.getElementById("numero8").value);

    let resultado4 = numero7 / numero8;

    let containerDivision = document.getElementById("containerDivision");

    containerDivision.innerText = resultado4;
}