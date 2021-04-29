const btnCalcularArea = document.getElementById("btnCalcularArea");

btnCalcularArea.addEventListener("click", calcularArea);

function calcularArea(){
    const ladoA = Number(document.getElementById("inpLadoA").value);
    const ladoB = Number(document.getElementById("inpLadoB").value);
    const ladoC = Number(document.getElementById("inpLadoC").value);

    let s = (ladoA + ladoB + ladoC) / 2;

    let resultado = Math.sqrt(s*(s - ladoA)*(s - ladoB)*(s - ladoC));

    const containerResultado = document.getElementById("resultado");

    containerResultado.innerText = `El area del triangulo es: ${resultado}`;

}