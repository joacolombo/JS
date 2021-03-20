let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularArea);

function calcularArea(){
    let baseTriangulo = Number(document.getElementById("baseTriangulo").value);
    let alturaTriangulo = Number(document.getElementById("alturaTriangulo").value);

    let resultado = (baseTriangulo * alturaTriangulo) / 2;

    let containerResultado = document.getElementById ("resultado");

    containerResultado.innerHTML= `
    <em>El area del triangulo es:</em> ${resultado}
    `;
}