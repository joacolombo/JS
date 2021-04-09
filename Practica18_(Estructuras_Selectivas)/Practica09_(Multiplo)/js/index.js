const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularMultiplo);

function calcularMultiplo(){
    const inpNumero1 = Number(document.getElementById("inpNumero1").value);
    const inpNumero2 = Number(document.getElementById("inpNumero2").value);

    if(inpNumero1 % inpNumero2 == 0){
        resultado = `${inpNumero1} es multiplo de ${inpNumero2}`;
    } else if(inpNumero2 % inpNumero1 == 0){
        resultado = `${inpNumero2} es multiplo de ${inpNumero1}`;
    } else {
        resultado = `${inpNumero1} y ${inpNumero2} no son multiplos`;
    }

    const containerResult = document.getElementById("containerResult");

    containerResult.innerText = resultado;
}