const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularAhorro);

function calcularAhorro(){
    const ahorroInicial = 3;
    let ahorro = 0;
    let resultado = "";

    for(let i = 1; i<=365; i++){
        ahorro = ((ahorroInicial ** i)/100).toFixed(2);
        resultado += `<br>El ahorro del dia <b>${i}</b> del año es de <b>$${ahorro}</b>`;
    }
    
    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = `<div class="alert alert-primary" role="alert">
    ${resultado}
    <br>
    <br>El ahorro total al finalizar el año sera de <b>$${ahorro}</b>
    </div>`;
}