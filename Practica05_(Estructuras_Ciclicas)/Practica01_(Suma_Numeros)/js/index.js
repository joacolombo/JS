const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularSuma);

function calcularSuma(){
    let resultado = 0;

    //1: inicilizar una variable
    //2: condicionar el ciclo
    //3: incrementar valor x
    //x=x+1 y x++ son la misma
    
    for(let x=1; x<=10; x++){
        let numero = Number(prompt(`Ingrese el numero ${x}`));

        //acomuladores
        resultado = resultado + numero;
    }

    const resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `<span>La suma de los 10 numeros es ${resultado}</span>`;
}