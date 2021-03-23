const btnCalcularHip = document.getElementById("btnCalcularHip");

btnCalcularHip.addEventListener("click", calcularHip);

function calcularHip (){
    const base = Number(document.getElementById("inpBase").value);
    const altura = Number(document.getElementById("inpAltura").value);

    let resultado = Math.sqrt(base**2 + altura**2);

    const containerResultado = document.getElementById("resultado");

    containerResultado.innerText = `La Hipotenusa es igual a ${resultado}`;
}