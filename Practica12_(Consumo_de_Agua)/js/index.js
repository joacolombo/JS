const btnCalcularCosto = document.getElementById("btnCalcularCosto");

btnCalcularCosto.addEventListener("click", calcularCosto);

function calcularCosto (){
    const largo = Number(document.getElementById("inpLargo").value);
    const ancho = Number(document.getElementById("inpAncho").value);
    const profundidad = Number(document.getElementById("inpProfundidad").value);

    const costo = 50;

    let resultado = costo * (largo * ancho * profundidad);

    const containerResultado = document.getElementById("resultado");

    containerResultado.innerText = `El costo para llenar la piscina es de: $ ${resultado}`;
}