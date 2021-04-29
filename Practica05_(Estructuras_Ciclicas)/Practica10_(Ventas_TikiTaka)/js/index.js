const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularVentas);

function calcularVentas(){ 
    let continuar = true;
    let i = 0;
    let j = 0;
    let k = 0;

    let contadorI = 0;
    let contadorJ = 0;
    let contadorK = 0;

    while(continuar == true){
        let venta = prompt(`Ingrese las ventas`);

        if(isNaN(venta) == true){
            alert("Es necesario que ingrese solo numeros");
        }else if(venta == null){
            continuar = false;
        }else{
            venta = Number(venta);
            if (venta > 1000){
                contadorI = contadorI + venta;
                i++;
            }else if(venta>500 && venta<=1000){
                contadorJ = contadorJ + venta;
                j++;
            }else{
                contadorK = contadorK + venta;
                k++;
            }
        }
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<div class="alert alert-primary" role="alert">
    ${i} ventas > $1000 por un monto de $ ${contadorI}
    <br> 
    ${j} ventas > $500 y <= $1000 por un monto de $ ${contadorJ}
    <br>
    ${k} ventas <= $500 por un monto de $ ${contadorK}
    </div>`;
}