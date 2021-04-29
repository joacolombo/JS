const btnImprimir = document.getElementById("btnImprimir");

btnImprimir.addEventListener("click", evaluarCalificacion);

function evaluarCalificacion(){
    const inpCalificacion = Number(document.getElementById("inpCalificacion").value);
    

    const resultado = document.getElementById("resultado");

    if(inpCalificacion>=6){
        //Inicio de bloque TRUE
        resultado.innerHTML = `Aprobado`;
    }else{
        //Inicio de bloque FALSE
        resultado.innerHTML = `Reprobado`;
    }
}