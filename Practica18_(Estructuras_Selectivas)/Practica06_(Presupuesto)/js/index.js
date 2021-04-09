const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularPresupuesto);

function calcularPresupuesto(){
    const inpPresupuesto = Number(document.getElementById("inpPresupuesto").value);
    const inpPrecioA = Number(document.getElementById("inpPrecioA").value);
    const inpPrecioB = Number(document.getElementById("inpPrecioB").value);
    const inpPrecioC = Number(document.getElementById("inpPrecioC").value);
    const inpPrecioD = Number(document.getElementById("inpPrecioD").value);
    
    let suma = inpPrecioA + inpPrecioB + inpPrecioC + inpPrecioD;

    if(suma > inpPresupuesto){
        resultado = "El precio está fuera de presupuesto";
    }else{
        resultado = "El precio está dentro del presupuesto";
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerText = resultado;
}