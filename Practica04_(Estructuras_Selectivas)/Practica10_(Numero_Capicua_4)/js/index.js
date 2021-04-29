const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularCapicua);

function calcularCapicua(){
    const inpNumero = Number(document.getElementById("inpNumero").value);
    
    primerEntero = Math.trunc(inpNumero / 10);
    segundoEntero = Math.trunc(primerEntero / 10);
    tercerEntero = Math.trunc(segundoEntero / 10);
    cuartoEntero  =Math.trunc(tercerEntero / 10);

    primerDecimal = inpNumero % 10;
    segundoDecimal = primerEntero % 10;
    tercerDecimal = segundoEntero % 10;
    cuartoDecimal = tercerEntero % 10;

    numero = primerDecimal * 1000 + segundoDecimal * 100 + tercerDecimal * 10 + cuartoDecimal * 1;

    if(inpNumero > 999 && inpNumero < 10000){
        if(inpNumero  == numero){
            resultado = `El numero es capicua`;
        }else{
            resultado = `El numero no es capicua`;
        }
    }else{
        alert(`Ingrese un numero de 4 cifras`);
        return;
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerHTML = `<div class=" alert alert-primary mt-3">${resultado}</div>`;
}