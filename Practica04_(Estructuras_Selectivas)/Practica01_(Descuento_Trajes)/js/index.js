const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularCosto);

function calcularCosto(){
    const inpPrecio = Number(document.getElementById("inpPrecio").value);

    let resultado = 0;

    if(inpPrecio >= 3600){
        resultado = inpPrecio * 0.84;
    }else{
        resultado = inpPrecio * 0.93;
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerText = `El costo  final es  de: $ ${resultado}`;
}