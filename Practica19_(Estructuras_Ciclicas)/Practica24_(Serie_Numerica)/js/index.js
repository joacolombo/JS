const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){ 
    let numero = 5;
    let contador = 0;
    let suma = 5;
    let resultado = `${numero}`;
    
    while(numero < 1800){
      if(contador%2 == 0){
        numero = numero + 2;
        resultado += `<br>${numero}`;
        contador++;  
      }else{
        numero = numero + 3;
        resultado += `<br>${numero}`;
        contador++;
      }
      suma = suma + numero;
    }
    
    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = resultado;
}