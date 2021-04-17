const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", evaluarNumero);

function evaluarNumero(){ 
    let continuar = true;
    let numeroMayor = 0;
    let numeroMenor = 0;

    //Number(HolaMundo)=NaN (Not a Number)
    while(continuar == true){
        let numero = prompt(`Ingrese el numero a evaluar`);

        if(isNaN(numero) == true){
            alert("Es necesario que ingrese solo numeros");
        }else if(numero == null){
            continuar = false;
        }else{
            numero = Number(numero);
            if (numero >= 500){
                numeroMayor++;
            }else{
                numeroMenor++;
            }
        }
    }

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>Ingreso ${numeroMayor} numeros mayores a 500 e Ingreso ${numeroMenor} numeros menores a 500</span>`;
}