const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularProduccion);

function calcularProduccion(){ 
    let continuar = true;
    let empresa = 1;
    let prodMax = 0;

    let produccionTxt = "";
    let prodMaxTxt = "";
    let prodJulioTxt = "";
    
    while(continuar == true){
      let total =0;

      for(let i=1; i<=12; i++){
        let produccion = prompt(`Ingrese la produccion del mes ${i} de la empresa ${empresa}`);
        
        if(isNaN(produccion)==true){
          alert("Ingrese un numero positivo");
          i = i-1;
        }else if(produccion == null){
          continuar = false;
          break;
        }else{
          total = total + Number(produccion);

          if(i==7 && produccion>=3000000){
          prodJulioTxt +=`<br>La empresa <b>${empresa}</b> produjo mas de $3,000,000 en el mes de julio`;
          }
        }
      }

      if(total>0 && total==prodMax){
        prodMax = total;
        prodMaxTxt +=`<br>La empresa que mas produjo fue la empresa <b>${empresa}</b> por un total de <b>$ ${prodMax}</b>`; 
      }else if(total>0 && total>prodMax){
        prodMax = total;
        prodMaxTxt =`<br>La empresa que mas produjo fue la empresa <b>${empresa}</b> por un total de <b>$ ${prodMax}</b>`; 
      }

      if(total>0){
        produccionTxt += `<br>La produccion de la empresa <b>${empresa}</b> fue de <b>$${total}</b>`;
      }
      
      empresa++;
    }
      

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML = `
    <br>${produccionTxt}
    <br>${prodMaxTxt}
    <br>${prodJulioTxt}`;
}