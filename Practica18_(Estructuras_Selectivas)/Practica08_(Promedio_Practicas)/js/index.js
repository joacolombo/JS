const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularPromedio);

function calcularPromedio(){
    const inpNota1 = Number(document.getElementById("inpNota1").value);
    const inpNota2 = Number(document.getElementById("inpNota2").value);
    const inpNota3 = Number(document.getElementById("inpNota3").value);
    const inpNota4 = Number(document.getElementById("inpNota4").value);
    
    let promedio = 0;

    if(inpNota1<=inpNota2 && inpNota1<=inpNota3 && inpNota1<=inpNota4){
        promedio = (inpNota2 + inpNota3 + inpNota4) / 3;
    } else if(inpNota2<=inpNota1 && inpNota2<=inpNota3 && inpNota2<=inpNota4){
        promedio = (inpNota1 + inpNota3 + inpNota4) / 3;
    } else if(inpNota3<=inpNota1 && inpNota3<=inpNota2 && inpNota3<=inpNota4){
        promedio = (inpNota1 + inpNota2 + inpNota4) / 3;
    }else{
        promedio = (inpNota1 + inpNota2 + inpNota3) / 3;
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerText = `El promedio es igual a ${promedio}`;
}