const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularViaje);

function calcularViaje(){
    let dinero = Number(document.getElementById("inpDinero").value);
    
    let  destino = "";
    let costoKm = 10;
    let viaje = (dinero  / 2) / costoKm;

    if(dinero < 0){
        alert(`Es necesario ingresar el dinero que desea gastar en el viaje`);
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
    
    resultado = `Usted esta dispuesto a gastar en su viaje $${dinero}, se recomienda ${destino}`;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML=`
    <div class=" alert alert-primary mt-3">${resultado}</div>
    `;
}