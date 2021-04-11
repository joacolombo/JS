const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularViaje);

function calcularViaje(){
    let viaje = Number(document.getElementById("inpKm").value);
    let  destino = "";
    let total = viaje  * 2;

    if(viaje < 0){
        alert(`Es necesario ingresar el numero de km que desea realizar para viajar`);
        return;
    }else if(viaje >= 0 && viaje < 750){
        destino = "quedarse en casa";
    }else if(viaje >= 750 && viaje < 800){
        destino = "visitar Mexico DF";
    }else if(viaje >= 800 && viaje < 1200){
        destino = "visitar Puerto Vallarta";
    }else{
        destino = "visitar Cancun";
    }
    
    resultado = `Usted esta dispuesto a recorrer (ida y vuelta) ${total} km, se recomienda ${destino}`;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML=`
    <div class=" alert alert-primary mt-3">${resultado}</div>
    `;
}