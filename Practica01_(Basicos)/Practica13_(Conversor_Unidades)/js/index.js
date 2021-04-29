const btnConversor = document.getElementById("btnConversor");

btnConversor.addEventListener("click", conversor);

function conversor (){
    const metros = Number(document.getElementById("inpMetros").value);

    const coeficiente = 39.37;

    let resultado = coeficiente * metros;

    const containerResultado = document.getElementById("resultado");

    containerResultado.innerText = `${resultado} pulgadas`
}