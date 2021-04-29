const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularSalario);

function calcularSalario(){
    let salario = (1500).toFixed(2);
    let resultado = `<br>El salario <b>inicial</b> es de <b>$${salario}</b><br>`;

    for(let i = 1; i<=6; i++){
        salario = (salario * 1.10).toFixed(2);
        resultado += `<br>El salario del año <b>${i}</b> es de <b>$${salario}</b>`;
    }
    
    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = `<div class="alert alert-primary" role="alert">
    <br>${resultado}
    <br>
    <br>El salario luego de <b>6</b> años sera de <b>$${salario}</b>
    </div>`;
}