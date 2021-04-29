const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularSuma);

function calcularSuma(){ 
    let numero = 0;
    let suma = 0;
    let contador = 1;
    let resultado = "";
    
    while(suma < 100){
      let numero = prompt(`Ingrese el valor del numero`);

      if(isNaN(numero) == true){
        alert("Ingrese un numero");
      }else if(numero == null){
        break;
      }else{
        numero = Number(numero);
        suma = suma + numero;
        
        if(suma <= 100){
          resultado += `<br>Suma parcial ${contador}: <b>${suma}</b>`;
          contador++;
        }
      }
    }
    
    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = resultado;
}