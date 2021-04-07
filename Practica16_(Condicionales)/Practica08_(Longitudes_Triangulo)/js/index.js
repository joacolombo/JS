const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularLados);

function calcularLados(){
    const inpLong1 = Number(document.getElementById("inpLong1").value);
    const inpLong2 = Number(document.getElementById("inpLong2").value);
    const inpLong3 = Number(document.getElementById("inpLong3").value);
    
    const resultado = document.getElementById("resultado");

    if(inpLong1 < (inpLong2 + inpLong3)){

        resultado.innerHTML = ``;
    }else{
        if(inpLong2 < (inpLong1 + inpLong3)){

        resultado.innerHTML = ``;
       
        }else{
            if(inpLong3 < (inpLong1 + inpLong2)){

            resultado.innerHTML = `aaaaa`;
           
            }else{
                resultado.innerHTML = `Los tres lados no forman un triangulo`;
            }
        }
    }
}