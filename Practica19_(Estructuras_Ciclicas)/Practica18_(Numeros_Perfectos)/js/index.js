const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    let numero = Number(prompt(`Ingrese un numero entero positivo`));
    let suma = 0;
    let resultado = "";

    if(isNaN(numero)==true || numero%1!=0 || numero<0) {
        alert("Es necesario que ingrese un numero entero positivo");
    }else{
        for(let i=1; i<numero; i++){
            if(numero%i == 0){
                suma = suma + i;
            }
        }
        if(numero == suma){
            resultado =`El numero ${numero} es un numero perfecto`;
        }else{
            resultado =`El numero ${numero} no es un numero perfecto`;
        }
    
        
        if(numero == 0){
            resultado =`El numero ${numero} no es un numero perfecto`;
        }
    }
    
    
    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = `<div class="alert alert-primary mt-3" role="alert">${resultado}</div>`;
}