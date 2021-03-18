//Entradas: Son los datos que necesito que me otorgue el usuario
//Procesos:Son las acciones que se le van a realizar a a las entradas
//Salidas: Son los resultados obtenidos por los procesos realizados

//Entradas
let btnSumar = document.getElementById("btnSuma");

btnSumar.addEventListener("click", sumarDosNumeros);

function sumarDosNumeros(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    console.log(numero1);
    console.log(numero2);
}
