const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", evaluarEdad);

function evaluarEdad(){
    const inpEdad1 = Number(document.getElementById("inpEdad1").value);
    const inpEdad2 = Number(document.getElementById("inpEdad2").value);
    const inpNombre1 = document.getElementById("inpNombre1").value;
    const inpNombre2 = document.getElementById("inpNombre2").value;
    

    const resultado = document.getElementById("resultado");
    
    if(inpEdad1==inpEdad2){
        resultado.innerHTML = `Ambos poseen la misma edad de ${inpEdad1} años`;
    }else{
        if(inpEdad1>inpEdad2){
            resultado.innerHTML = `El de mayor edad es ${inpNombre1} con ${inpEdad1} años`;
        }else{
            resultado.innerHTML = `El de mayor edad es ${inpNombre2} con ${inpEdad2} años`;
        }
    }
}