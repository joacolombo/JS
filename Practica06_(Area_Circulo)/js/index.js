const btnCalcularRadio = document.getElementById("btnCalcularRadio");

btnCalcularRadio.addEventListener("click", calcularRadio);

function calcularRadio (){
    //Las varaibles pueden o no tener asignacion al momento en el que se declaran
    const radio = Number(document.getElementById("inpRadio").value);

    //Las constantes es necesario que se asignen al momento en el que se declara y su valor es inmutable
    const valorPi = Math.PI;

    let resultado = valorPi * (radio * radio);

    const containerResultado = document.getElementById("resultado");

    //Template literals
    containerResultado.innerText = `El area del circulo es: ${resultado}`;
}