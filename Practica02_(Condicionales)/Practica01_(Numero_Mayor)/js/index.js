const btnEvlNum = document.getElementById("btnEvlNum");

btnEvlNum.addEventListener("click", evaluarNumeros);

function evaluarNumeros(){
    const inpNumero1 = Number(document.getElementById("inpNumero1").value);
    const inpNumero2 = Number(document.getElementById("inpNumero2").value);

    const resultado = document.getElementById("resultado");

    if(inpNumero1>inpNumero2){
        //Inicio de bloque TRUE
        resultado.innerHTML = `El numero mayor es ${inpNumero1}`;
    }else{
        //Inicio de bloque FALSE
        resultado.innerHTML = `El numero mayor es ${inpNumero2}`;
    }
}