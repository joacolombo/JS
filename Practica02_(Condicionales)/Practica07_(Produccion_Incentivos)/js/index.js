const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", evaluarProduccion);

function evaluarProduccion(){
    const inpLunes = Number(document.getElementById("inpLunes").value);
    const inpMartes = Number(document.getElementById("inpMartes").value);
    const inpMiercoles = Number(document.getElementById("inpMiercoles").value);
    const inpJueves = Number(document.getElementById("inpJueves").value);
    const inpViernes = Number(document.getElementById("inpViernes").value);
    const inpSabado = Number(document.getElementById("inpSabado").value);
    
    let promedio = (inpLunes + inpMartes + inpMiercoles + inpJueves + inpViernes + inpSabado) / 5;

    const resultado = document.getElementById("resultado");

    if(promedio>=100){
        resultado.innerHTML = `Promedio de produccion diaria es de: ${promedio}. El operario recibira incentivo`;
    }else{
        resultado.innerHTML = `Promedio de produccion diaria es de: ${promedio}. El operario no recibira incentivo`;
    }
}