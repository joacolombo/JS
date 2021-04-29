const btnCalcularDistancia = document.getElementById("btnCalcularDistancia");

btnCalcularDistancia.addEventListener("click", calcularDistancia);

function calcularDistancia(){
    const velocidad = Number(document.getElementById("inpVelocidad").value);
    const tiempo = Number(document.getElementById("inpTiempo").value);

    let resultado = velocidad * tiempo;

    const containerResultado = document.getElementById("resultado");

    containerResultado.innerText = `La distancia recorrida por el vehiculo es de ${resultado} metros.`;
}