const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularImpuesto);

function calcularImpuesto(){ 
  let continuar = true;
  let i = 1;

  impVehiculo = 0;
  impC1 = 0;
  impC2 = 0;
  impC3 = 0;
  impTotal = 0;

  let vehiculoTxt = "";
  let c1Txt = "";
  let c2Txt = "";
  let c3Txt = "";
  let totalTxt = "";
  
  while(continuar == true){
    let valor = prompt(`Ingrese el valor del vehiculo ${i}`);
    if(isNaN(valor)==true){
      alert("Ingrese un numero positivo");
      i = i-1;
    }else if(valor == null){
      continuar = false;
      return;
    }

    let clave = prompt(`Ingrese la clave del vehiculo (1 a 3)`);
    if(isNaN(clave)==true || clave%1!=0 || clave<1 || clave>3){
      alert("Ingrese un numero entero entre 1 y 3");
    }else if(clave == null){
      continuar = false;
      break;
    }
    
    valor = Number(valor);
    
    if(clave == 1){
      impVehiculo = (valor * 0.10).toFixed(2);
      vehiculoTxt += `<br>El vehiculo <b>${i}</b> de valor <b>${valor}</b> y clave </b> y clave <b>${clave}</b> paga un impuesto de $<b>${impVehiculo}</b>`;

      impC1 = impC1 + impVehiculo;

    }else if(clave == 2){
      impVehiculo = (valor * 0.07).toFixed(2);
      vehiculoTxt += `<br>El vehiculo <b>${i}</b> de valor <b>${valor}</b> y clave </b> y clave <b>${clave}</b> paga un impuesto de $<b>${impVehiculo}</b>`;

      impC2 = impC2 + impVehiculo;
      
    }else if(clave == 3){
      impVehiculo = (valor * 0.05).toFixed(2);
      vehiculoTxt += `<br>El vehiculo <b>${i}</b> de valor <b>${valor}</b> y clave </b> y clave <b>${clave}</b> paga un impuesto de $<b>${impVehiculo}</b>`;

      impC3 = impC3 + impVehiculo;
      
    }
    i++;
  }

  c1Txt = `<br>La categoria <b>1</b> paga impuestos por un valor de <b>$${impC1}</b>`;
  c2Txt = `<br>La categoria <b>2</b> paga impuestos por un valor de <b>$${impC2}</b>`;
  c3Txt = `<br>La categoria <b>3</b> paga impuestos por un valor de <b>$${impC3}</b>`;

  impTotal = impC1 + impC2 + impC3;

  totalTxt = `<br>Por <b>todos</b> los vehiculos paga impuestos por un valor de <b>$${impC3}</b>`;
    
  let resultContainer = document.getElementById("resultContainer");

  resultContainer.innerHTML = `
  <br><b>Impuestos por vehiculo:</b>
  <br>${vehiculoTxt}
  <br>
  <br><b>Impuestos por categoria:</b>
  <br>${c1Txt}
  <br>${c2Txt}
  <br>${c3Txt}
  <br>
  <br><b>Impuestos totales:</b>
  <br>${totalTxt}`;  
}