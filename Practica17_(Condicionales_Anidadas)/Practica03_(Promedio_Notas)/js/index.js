const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularPromedio);

function calcularPromedio(){
    const inpNota1 = Number(document.getElementById("inpNota1").value);
    const inpNota2 = Number(document.getElementById("inpNota2").value);
    const inpNota3 = Number(document.getElementById("inpNota3").value);
    
    let promedio = (inpNota1 + inpNota2 + inpNota3) / 3;

    if(promedio >= 9){
        resultado = "Aprobado";
    } else if(promedio >= 6 && promedio <9){
        resultado = "Regular";
    } else {
        resultado = "Reprobado";
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerText = resultado;
}