const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularConjetura);

function calcularConjetura(){
    let resultadoAcumulado = "";
    let numero = prompt(`Ingrese un numero entero positivo`);
    
    resultadoAcumulado += `<li class="list-group-item">${numero}</li>`;

    while(numero > 1){
        if(isNaN(numero) == true){
            alert("Es necesario que ingrese un numero entero positivo");
        }else if(numero == null){
            continuar = false;
        }else{
            numero = Number(numero);
            if (numero%2 == 0){
                numero = numero / 2;
                resultadoAcumulado += `<li class="list-group-item">${numero}</li>`;
            }else{
                numero = numero * 3 + 1;
                resultadoAcumulado += `<li class="list-group-item">${numero}</li>`;
            }
        }
    }
    
    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = resultadoAcumulado;
}