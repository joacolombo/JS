const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularCosto);

function calcularCosto(){
    const inpHoras = Number(document.getElementById("inpHoras").value);

    let resultado = 0;

    if(Number.isInteger(inpHoras)){
        if(inpHoras <= 2){
            resultado = inpHoras*5;
        }else if(inpHoras >=3 && inpHoras <6){
            resultado = 2*5 + (inpHoras - 2)*4;
        }else if(inpHoras >=6 && inpHoras <11){
            resultado = 2*5 + 3*4 + (inpHoras - 5)*3;
        }else {
            resultado = 2*5 + 3*4 + 5*3 + (inpHoras - 10)*2;
        } 
    }else{
        alert(`Es necesario ingresar un numero entero de horas`);
        return;
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerText = `El costo  final del estacionamiento es de: $ ${resultado}`;
}