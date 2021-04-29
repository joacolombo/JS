const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularCalificacion);

function calcularCalificacion(){
    const inpCalificacion = Number(document.getElementById("inpCalificacion").value);

    let resultado = "";

    if(Number.isInteger(inpCalificacion) && inpCalificacion>=0 && inpCalificacion<=10){
        if(inpCalificacion == 10){
            resultado = "A";
        }else if(inpCalificacion == 9){
            resultado = "B";
        }else if(inpCalificacion == 8){
            resultado = "C";
        }else if(inpCalificacion == 7 || inpCalificacion == 6){
            resultado = "D";
        }else{
            resultado = "F";
        } 
    }else{
        alert(`Es necesario ingresar un numero entero entre 0 y 10`);
        return;
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerText = `La calificacion es: ${resultado}`;
}