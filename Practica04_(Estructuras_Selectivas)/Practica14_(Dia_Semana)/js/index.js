const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularDia);

function calcularDia() {
  const inpDia = Number(document.getElementById("inpDia").value);

  if(Number.isInteger(inpDia)){
    if (inpDia>=1 && inpDia<=7) {
      if(inpDia == 1){
        resultado = "Lunes"
      }else if(inpDia == 2){
        resultado = "Martes"
      }else if(inpDia == 3){
        resultado = "Miercoles"
      }else if(inpDia == 4){
        resultado = "Jueves"
      }else if(inpDia == 5){
        resultado = "Viernes"
      }else if(inpDia == 6){
        resultado = "Sabado"
      }else if(inpDia == 7){
        resultado = "Domingo"
      }
    } else {
      alert(`Ingrese un numero entero entre 1 y 7`);
      return;
    }
  }else{
    alert(`Ingrese un numero entero entre 1 y 7`);
      return;
  }



  const containerResult = document.getElementById("containerResult");

  containerResult.innerText = resultado;
}
