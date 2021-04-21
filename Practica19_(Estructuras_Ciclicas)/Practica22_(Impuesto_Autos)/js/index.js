const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularImpuesto);

function calcularImpuesto() {
  let continuar = true;
  let i = 1;

  let impVehiculo = 0;
  let impC1 = 0;
  let impC2 = 0;
  let impC3 = 0;
  let impTotal = 0;

  let vehiculoTxt = "";
  let c1Txt = "";
  let c2Txt = "";
  let c3Txt = "";
  let totalTxt = "";

  while (continuar == true) {
    let valor = prompt(`Ingrese el valor del vehiculo ${i}`);
    if (isNaN(valor) == true || valor < 0) {
      alert("Ingrese un numero positivo");
      return;
    } else if (valor == null) {
      continuar = false;
      break;
    }

    let clave = prompt(`Ingrese la clave del vehiculo (1 a 3)`);
    if (isNaN(clave) == true || clave % 1 != 0 || clave < 1 || clave > 3) {
      alert("Ingrese un numero entero entre 1 y 3");
      return;
    } else if (clave == null) {
      continuar = false;
      break;
    }else{
      valor = Number(valor);

      if (clave == 1) {
        impVehiculo = Number((valor * 0.10).toFixed(2));
        impC1 = Number((impC1 + impVehiculo).toFixed(2));
  
        vehiculoTxt += `<br>El vehiculo <b>${i}</b> de valor <b>$${valor}</b> y clave <b>${clave}</b> paga un impuesto de $<b>${impVehiculo}</b>`;
  
      } else if (clave == 2) {
        impVehiculo = Number((valor * 0.07).toFixed(2));
        impC2 = Number((impC2 + impVehiculo).toFixed(2));
        
        vehiculoTxt += `<br>El vehiculo <b>${i}</b> de valor <b>$${valor}</b> y clave <b>${clave}</b> paga un impuesto de $<b>${impVehiculo}</b>`;
  
      } else if (clave == 3) {
        impVehiculo = Number((valor * 0.05).toFixed(2));
        impC3 = Number((impC3 + impVehiculo).toFixed(2));
        
        vehiculoTxt += `<br>El vehiculo <b>${i}</b> de valor <b>$${valor}</b> y clave <b>${clave}</b> paga un impuesto de $<b>${impVehiculo}</b>`;
  
      }
      i++;
    }
  }

  c1Txt = `<br>La categoria <b>1</b> paga impuestos por un valor de <b>$${impC1}</b>`;
  c2Txt = `<br>La categoria <b>2</b> paga impuestos por un valor de <b>$${impC2}</b>`;
  c3Txt = `<br>La categoria <b>3</b> paga impuestos por un valor de <b>$${impC3}</b>`;

  impTotal = impC1 + impC2 + impC3;

  totalTxt = `<br>Por <b>todos</b> los vehiculos paga impuestos por un valor de <b>$${impTotal}</b>`;

  let resultContainer = document.getElementById("resultContainer");

  resultContainer.innerHTML = `
  <br><b>Impuestos por vehiculo:</b>
  ${vehiculoTxt}
  <br>
  <br><b>Impuestos por categoria:</b>
  ${c1Txt}
  ${c2Txt}
  ${c3Txt}
  <br>
  <br><b>Impuestos totales:</b>
  ${totalTxt}`;
}