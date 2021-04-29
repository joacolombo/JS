const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", compararEdades);

function compararEdades(){
    const inpEdad1 = Number(document.getElementById("inpEdad1").value);
    const inpEdad2 = Number(document.getElementById("inpEdad2").value);
    
    let diferencia = 0;

    const resultado = document.getElementById("resultado");

    if(inpEdad1==inpEdad2){
        resultado.innerHTML = `Ambos poseen la misma edad de ${inpEdad1} años`;
    }else{
        if(inpEdad1>inpEdad2){
            diferencia = inpEdad1 - inpEdad2;

            resultado.innerHTML = `La edad del mayor es de ${inpEdad1} años y tiene una diferencia de ${diferencia} años con su hermano menor`;
        }else{
            diferencia = inpEdad2 - inpEdad1;

            resultado.innerHTML = `La edad del mayor es de ${inpEdad2} años y tiene una diferencia de ${diferencia} años con su hermano menor`;
        }
    }
}