const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularCapicua);

function calcularCapicua(){
    const inpNumero = Number(document.getElementById("inpNumero").value);
    
    primerEntero = Math.trunc(inpNumero / 10);
    segundoEntero = Math.trunc(primerEntero / 10);
    tercerEntero = Math.trunc(segundoEntero / 10);

    primerDecimal = inpNumero % 10;
    segundoDecimal = primerEntero % 10;
    tercerDecimal = segundoEntero % 10;

    numero = primerDecimal * 100 + segundoDecimal * 10 + tercerDecimal * 1;

    if(inpNumero > 99 && inpNumero < 1000){
        if(inpNumero  == numero){
            resultado = `El numero es capicua`;
        }else{
            resultado = `El numero no es capicua`;
        }
    }else{
        alert(`Ingrese un numero de 3 cifras`);
        return;
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerHTML = `<div class=" alert alert-primary mt-3">${resultado}</div>`;
}