const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    let numero = Number(prompt(`Ingrese un numero entero positivo`));
    let a = 1;
    let b = 1;
    let suma = 0;

    if(isNaN(numero) == true){
        alert("Es necesario que ingrese un numero entero positivo");
    }else{
        while(numero >= suma){
            a = b;
            b = suma
            suma = a + b; 
        }
    }
    
    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = `<div class="alert alert-primary" role="alert">El numero ${b} de la serie de Fibonacci es igual o menor al numero ingresado ${numero}</div>`;
}