const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularOrden);

function calcularOrden(){
    const inpNum1 = Number(document.getElementById("inpNum1").value);
    const inpNum2 = Number(document.getElementById("inpNum2").value);
    const inpNum3 = Number(document.getElementById("inpNum3").value);

    let x = 0;
    let y = 0;
    let z = 0;
    
    if(inpNum1 == inpNum2 || inpNum1 == inpNum3 || inpNum2 == inpNum3){
        alert(`Es necesario ingresar 3 numeros distintos`);
        return;
    }

    if(Number.isInteger(inpNum1) && Number.isInteger(inpNum2) && Number.isInteger(inpNum3)){
        if((inpNum1 >= inpNum2) && (inpNum1 >= inpNum3)){
            if(inpNum2 >= inpNum3){
                x = inpNum1;
                y = inpNum2;
                z = inpNum3;
            }else{
                x = inpNum1;
                y = inpNum3;
                z = inpNum2; 
            }
        }else if((inpNum2 >= inpNum1) && (inpNum2 >= inpNum3)){
            if(inpNum1 >= inpNum3){
                x = inpNum2;
                y = inpNum1;
                z = inpNum3;
            }else{
                x = inpNum2;
                y = inpNum3;
                z = inpNum1; 
            }
        }else if((inpNum3 >= inpNum1) && (inpNum3 >= inpNum2)){
            if(inpNum1 >= inpNum2){
                x = inpNum3;
                y = inpNum1;
                z = inpNum2;
            }else{
                x = inpNum3;
                y = inpNum2;
                z = inpNum1; 
            }
        }
    }else{
        alert(`Es necesario ingresar 3 numeros enteros`);
        return;
    }
  
    const containerResult = document.getElementById("containerResult");

    containerResult.innerHTML = `Orden descendente: ${x}, ${y}, ${z}`;
}

