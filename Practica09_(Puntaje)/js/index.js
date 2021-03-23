const btnCalcularPuntaje = document.getElementById("btnCalcularPuntaje");

btnCalcularPuntaje.addEventListener("click", calcularPuntaje);

function calcularPuntaje(){
    const correctas = Number(document.getElementById("inpCorrectas").value);
    const incorrectas = Number(document.getElementById("inpIncorrectas").value);
    const blanco = Number(document.getElementById("inpBlanco").value);

    let resultado = (correctas * 4 - incorrectas)

    const containerResultado = document.getElementById("resultado");

    containerResultado.innerText = `El puntaje final es de ${resultado} puntos.`;

}