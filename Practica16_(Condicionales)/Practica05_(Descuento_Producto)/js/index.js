const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularCosto);

function calcularCosto(){
    const inpArticulo = Number(document.getElementById("inpArticulo").value);
    const inpPrecio = Number(document.getElementById("inpPrecio").value);
    const inpClave = document.getElementById("inpClave").value;
    
    let precioFinal = 0;

    const resultado = document.getElementById("resultado");

    if(inpClave=="01"){
        precioFinal = inpPrecio * 0.9;
        resultado.innerHTML = `
        Articulo: ${inpArticulo}
            <br>  
            Clave: ${inpClave}
            <br>
            Precio original: $${inpPrecio} 
            <br>
            Precio con descuento: $${precioFinal}`;
    }else{
        if(inpClave=="02"){
            precioFinal = inpPrecio * 0.8;
        resultado.innerHTML = `
        Articulo: ${inpArticulo}
            <br>  
            Clave: ${inpClave}
            <br>
            Precio original: $${inpPrecio} 
            <br>
            Precio con descuento: $${precioFinal}`;
        }else{
            precioFinal = inpPrecio
            resultado.innerHTML = `
            Articulo: ${inpArticulo}
            <br>  
            Clave: ${inpClave}
            <br>
            Precio original: $${inpPrecio} 
            <br>
            Precio con descuento: $${precioFinal}`;
        }   
    }
}