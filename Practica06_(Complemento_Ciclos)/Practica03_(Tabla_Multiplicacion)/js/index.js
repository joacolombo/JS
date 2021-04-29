const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularTabla);

function calcularTabla() {
  let continuar = true;
  let multiplicacion = 0;
  let resultado = "";

  let numero = prompt(`Ingrese un numero entero entre  1 y 10`);
  if (isNaN(numero) == true || numero < 0 || numero  > 10 || numero % 1 != 0) {
    alert("Ingrese un numero entero entre 1 y 10");
    return;
  } else if (numero == null) {
    return;
  }else{
    for(let i=1; i<=10; i++){
      numero = Number(numero);
      multiplicacion = numero * i;
      resultado += `<br>${numero} x ${i} = ${multiplicacion}`;
    }
  } 
     
  let resultContainer = document.getElementById("resultContainer");

  resultContainer.innerHTML = `${resultado}`;
}