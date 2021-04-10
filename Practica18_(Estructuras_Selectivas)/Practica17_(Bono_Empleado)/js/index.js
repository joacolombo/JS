const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularSueldo);

function calcularSueldo() {
  const inpSueldo = Number(document.getElementById("inpSueldo").value);
  const inpAntiguedad = Number(document.getElementById("inpAntiguedad").value);

  let total = 0;

  if(inpAntiguedad >= 2 && inpAntiguedad <5){
    bonoAntiguedad = 20;
  }else if(inpAntiguedad >= 5){
    bonoAntiguedad = 30;
  }else if(inpAntiguedad < 2){
    bonoAntiguedad = 0;
  }

  if(inpSueldo <= 1000){
    bonoSueldo = 25;
  }else if(inpSueldo > 1000 && inpSueldo <= 3500){
    bonoSueldo = 15;
  }else{
    bonoSueldo = 10;
  }

  if(bonoAntiguedad > bonoSueldo){
    total = inpSueldo * (1 + bonoAntiguedad/100);
    resultado = `
      Sueldo base: $${inpSueldo}
      <br>
      Bono: ${bonoAntiguedad}%
      <br>
      Sueldo total: $${total}
    `;
  }else{
    total = inpSueldo * (1 + bonoSueldo/100);
    resultado = `
      Sueldo base: $${inpSueldo}
      <br>
      Bono: ${bonoSueldo}%
      <br>
      Sueldo total: $${total}
    `;
  }

  const resultContainer = document.getElementById("resultContainer");

  resultContainer.innerHTML=`
  <div class=" alert alert-success mt-3">${resultado}</div>
  `;
}