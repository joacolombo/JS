const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", evaluarEdad);

function evaluarEdad() {
  const inpEdad1 = Number(document.getElementById("inpEdad1").value);
  const inpEdad2 = Number(document.getElementById("inpEdad2").value);

  const resultado = document.getElementById("resultado");

  let diferencia = 0;

  if (inpEdad1 == inpEdad2) {
    resultado.innerHTML = `Ambos poseen la misma edad de ${inpEdad1} años`;
  } else {
    if (inpEdad1 > inpEdad2) {
      diferencia = inpEdad1 - inpEdad2;
      resultado.innerHTML = `El de mayor edad es el de ${inpEdad1} años con una diferencia de ${diferencia} años con el menor`;
    } else {
      diferencia = inpEdad2 - inpEdad1;
      resultado.innerHTML = `El de mayor edad es el de ${inpEdad2} años con una diferencia de ${diferencia} años con el menor`;
    }
  }
}
