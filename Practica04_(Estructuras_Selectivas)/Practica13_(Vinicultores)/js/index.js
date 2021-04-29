const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularEmbarque);

function calcularEmbarque(){
    let tipoUva = document.getElementById("sltTipoUva").value;
    let tamanoUva = document.getElementById("sltTamanoUva").value;
    let precioKg = Number(document.getElementById("inpPrecio").value);
    let cantidad = Number(document.getElementById("inpCantidad").value);

    let precio = 0;
    let total = 0;

    if(precioKg == "" || precioKg == 0 || cantidad == "" || cantidad == 0){
        alert(`Es necesario ingresar el precio inicial y cantidad de kg de uva`);
        return;
    }

    if(tipoUva  == "tipoA"){
        if(tamanoUva == "tamano1"){
            precio = precioKg + 0.2;
            total = precio * cantidad;
        }else{
            precio = precioKg + 0.3;
            total = precio * cantidad;
        }
    }else{
        if(tamanoUva == "tamano1"){
            precio = precioKg - 0.3;
            total = precio * cantidad;
        }else{
            precio = precioKg - 0.5;
            total = precio * cantidad;
        }
    }

    resultado = `El productor recibira por el embarque un total de $${total}`;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML=`
    <div class=" alert alert-success mt-3">${resultado}</div>
    `;
}