const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", imprimirNumeros);

function imprimirNumeros(){ 
    let resultadoAcumulado = "";
    let j = 0;
    for(let i=0; i<=100; i++){
        j = 100 - i;
        resultadoAcumulado+= `<li class = "list-group-item">Numero ${j}</li>`;
    }
    
    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = resultadoAcumulado;
}