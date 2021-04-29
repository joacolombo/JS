const btnCalcularCheque = document.getElementById("btnCalcularCheque");

btnCalcularCheque.addEventListener("click", calcularCheque);

function calcularCheque (){
    const dias = Number(document.getElementById("inpDias").value);

    const costoHotel = 1700;
    const costoComida = 500;
    const costoVarios = 100;

    let resultadoHotel = costoHotel * dias;
    let resultadoComida = costoComida * dias;
    let resultadoVarios = costoVarios * dias;
    let resultadoTotal = resultadoHotel + resultadoComida + resultadoVarios;

    const containerResultadoHotel = document.getElementById("resultadoHotel");
    const containerResultadoComida = document.getElementById("resultadoComida");
    const containerResultadoVarios = document.getElementById("resultadoVarios");
    const containerResultadoTotal = document.getElementById("resultadoTotal");

    containerResultadoHotel.innerHTML = `
    Gastos de Hotel: $ ${resultadoHotel} 
    <br>
    Gastos de Comida: $ ${resultadoComida}
    <br>
    Gastos Varios: $ ${resultadoVarios}
    <br>
    Valor del cheque: $ ${resultadoTotal}
    `;
}