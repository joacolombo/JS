const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularMayor);

function calcularMayor(){
    const inpNum1 = Number(document.getElementById("inpNum1").value);
    const inpNum2 = Number(document.getElementById("inpNum2").value);
    const inpNum3 = Number(document.getElementById("inpNum3").value);
    
    const resultado = document.getElementById("resultado");

    if((inpNum1 !== inpNum2) && (inpNum1 !== inpNum3) && (inpNum2 !== inpNum3)){
        if((inpNum1 > inpNum2) && (inpNum1 > inpNum3)){
            resultado.innerHTML = `El numero mayor es ${inpNum1}`;
        }else{
            if((inpNum2 > inpNum1) && (inpNum2 > inpNum3)){
                resultado.innerHTML = `El numero mayor es ${inpNum2}`;
            }else{
                resultado.innerHTML = `El numero mayor es ${inpNum3}`;
            }
        }
    }else{
        resultado.innerHTML = `Los tres numeros no son distintos`;
    }
}