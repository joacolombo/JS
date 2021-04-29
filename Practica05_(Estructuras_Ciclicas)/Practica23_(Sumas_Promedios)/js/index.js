const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcular);

function calcular(){
    let continuar = true;
    let i = 0;
    let sumaImpar = 0;
    let sumaPar = 0;
    let contadorPar = 0;
    let promedioPar = 0;

    while (continuar == true && i<=30){
        for(let i=1; i<=30; i++){
            let numero = prompt(`Ingrese el ${i}º numero entero`);
            if(isNaN(numero) == true || numero%1 != 0){
                alert("Es necesario que ingrese un numero entero");
                i = i-1;
            }else if(numero == null){
                continuar = false;
                break;
            }else{
                numero = Number(numero);

                if(numero%2 == 0){
                    sumaPar = sumaPar + numero;
                    contadorPar++;
                }else{
                    sumaImpar = sumaImpar + numero;
                }
            }
        }
    }
    
    promedioPar = sumaPar / contadorPar;
    
    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = `<div class="alert alert-primary" role="alert">
    <br>La <b>suma</b> de numeros <b>impares</b> dio un valor de <b>${sumaImpar}</b> 
    <br>El <b>promedio</b> de numeros <b>pares</b> dio un valor de <b>${promedioPar}</b> 
    </div>`;
}