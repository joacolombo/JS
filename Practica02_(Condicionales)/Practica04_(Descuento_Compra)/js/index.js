const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularCosto);

function calcularCosto(){
    const costoCompra = Number(document.getElementById("inpCompra").value);
    
    let costoDescuento = 0;

    if(costoCompra>=1000){
        costoDescuento = costoCompra * 0.8;
    }else{
        costoDescuento = costoCompra;
    }

    const resultado = document.getElementById("resultado");

    resultado.innerText = `El costo total de la compra es $ ${costoDescuento}`;

}