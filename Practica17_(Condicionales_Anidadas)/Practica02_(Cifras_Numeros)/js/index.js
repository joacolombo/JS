const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularDigitos);

function calcularDigitos(){
    const inpNum = Number(document.getElementById("inpNum").value);
    
    let resultado = "";

    if (inpNum <= 999){
        resultado = "El numero cuenta con 3 digitos";
        if (inpNum <= 99){
            resultado = "El numero cuenta con 2 digitos";
            if (inpNum <= 9){
                resultado = "El numero cuenta con 1 digito"; 
            }
        }
    } else {
        resultado = "El numero cuenta con mas de 3 digitos"; 
    }


    const containerResult = document.getElementById("containerResult");

    containerResult.innerText = resultado;
}