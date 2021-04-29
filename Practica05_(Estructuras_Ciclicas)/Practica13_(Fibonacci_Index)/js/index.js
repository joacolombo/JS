const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularSerie);

function calcularSerie(){
    let index = Number(prompt(`Ingrese el indice de la Serie de Fibonacci`));
    let a = 1;
    let b = 1;
    let suma = 0;

    if(isNaN(index)==true || index==0 || index%1!=0){
        alert("Es necesario que ingrese un numero entero positivo");
        return;
    }else{
        for(let i = 1; i<=index; i++){
            a = b;
            b = suma
            suma = a + b; 
        }
    }
    if(index == 1){
        suma = 0;
    }
    
    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = `<div class="alert alert-primary" role="alert">En el indice ${index} de la serie de Fibonacci se encuentra el numero ${suma}</div>`;
}