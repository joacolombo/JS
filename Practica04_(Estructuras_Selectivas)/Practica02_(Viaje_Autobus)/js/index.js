const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularCosto);

function calcularCosto(){
    let tipoBus = document.getElementById("sltTipoBus").value;
    let inpPasajeros = Number(document.getElementById("inpPasajeros").value);
    let  resultado = "";
    let costoTotal = 0;
    let costoPasajero = 0;

    if(inpPasajeros == "" || inpPasajeros == 0){
        alert(`Es necesario ingresar el numero de pasajeros`);
        return;
    }

    if(inpPasajeros >= 20){
        if(tipoBus  == "tipoA"){
            costoTotal = inpPasajeros * 1.5;
            costoPasajero = 1.5;
        }else if(tipoBus == "tipoB"){
            costoTotal = inpPasajeros * 2.0;
            costoPasajero = 2.0;
        }else if(tipoBus == "tipoC"){
            costoTotal = inpPasajeros * 2.5;
            costoPasajero = 2.5;
        }else{
            costoTotal = inpPasajeros * 3.0;
            costoPasajero = 3.0;
        }
    }else{
        if(tipoBus  == "tipoA"){
            costoTotal = (20 * 1.5);
            costoPasajero = (20 * 1.5) / inpPasajeros;
        }else if(tipoBus == "tipoB"){
            costoTotal = inpPasajeros * 2.0;
            costoPasajero = (20 * 2.0) / inpPasajeros;
        }else if(tipoBus == "tipoC"){
            costoTotal = (20 * 2.0);
            costoPasajero = (20 * 2.5) / inpPasajeros;
        }else{
            costoTotal = (20 * 3.0);
            costoPasajero = (20 * 3.0) / inpPasajeros;
        }
    }
    
    resultado = `El costo total del viaje es de: $${costoTotal} siendo el costo por pasajero de: $${costoPasajero}`;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML=`
    <div class=" alert alert-primary mt-3">${resultado}</div>
    `;
}