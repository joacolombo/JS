const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularDistancia);

function calcularDistancia(){
    let i = 70;
    let j = 150;

    while(i != j){
        i = i + 1;
        j = j - 1;
    }

    const resultContainer  = document.getElementById("resultContainer");

    resultContainer.innerText = `Se encuentran en el km ${i}`;
}