let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularCosto);

function calcularCosto(){
    let costoMaterial = Number(document.getElementById("costoMaterial").value);
    let altoPared = Number(document.getElementById("altoPared").value);
    let anchoPared = Number(document.getElementById("anchoPared").value);

    let resultado = (altoPared * anchoPared) * costoMaterial;

    let containerResultado = document.getElementById ("resultado");

    containerResultado.innerHTML= `
    <em>El resultado es:</em> ${resultado}
    `;
}