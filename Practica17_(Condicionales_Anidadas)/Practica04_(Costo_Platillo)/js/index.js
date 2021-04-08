const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularCosto);

function calcularCosto(){
    const inpComensales = Number(document.getElementById("inpComensales").value);

    if(inpComensales < 200){
        costo = inpComensales * 95; 
        resultado = `<div class="alert alert-danger">El costo del platillo es de $95 por persona siendo el costo total $${costo}</div>`;
    } else if(inpComensales >= 200 && inpComensales <300){
        costo = inpComensales * 85; 
        resultado = `<div class="alert alert-warning">El costo del platillo es de $85 por persona siendo el costo total $${costo}</div>`;
    } else {
        costo = inpComensales * 75; 
        resultado = `<div class="alert alert-success">El costo del platillo es de $75 por persona siendo el costo total $${costo}</div>`;
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerHTML = resultado;
}