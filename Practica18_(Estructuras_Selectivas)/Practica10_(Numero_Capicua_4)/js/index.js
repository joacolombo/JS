const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularPresupuesto);

function calcularPresupuesto(){
    const inpNumero = Number(document.getElementById("inpNumero").value);    

    if(inpNumero > 99 && inpNumero < 1000){
        if(inpNumero  == ){
            resultado = `El numero es capicua`;
        }else{
            resultado = `El numero no es capicua`;
        }
    }else{
        alert(`Ingrese un numero de 3 cifras`);
        return;
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerText = resultado;
}