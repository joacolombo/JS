const btnCalcularDistancia = document.getElementById("btnCalcularDistancia");

btnCalcularDistancia.addEventListener("click", calcularDistancia);

function calcularDistancia(){
    const punto1x = Number(document.getElementById("inpX1").value);
    const punto1y = Number(document.getElementById("inpY1").value);
    const punto2x = Number(document.getElementById("inpX2").value);
    const punto2y = Number(document.getElementById("inpY2").value);

    let resultado = Math.sqrt((punto2x - punto1x)**2 +(punto2y - punto1y)**2);

    const containerResultado = document.getElementById("resultado");

    containerResultado.innerText = `La distancia entre puntos es: ${resultado}`;
}