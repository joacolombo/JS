const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularCosto);

function calcularCosto(){
    let sltZona = document.getElementById("sltZona").value;
    let inpPeso = Number(document.getElementById("inpPeso").value);

    let costo = 0;
    let total = 0;
    let lugar = "";

    if(inpPeso>0 && inpPeso<=5){
        if(sltZona == "zona1"){
            costo = 11000;
            lugar = "America del Norte";
        }else if(sltZona == "zona2"){
            costo = 10000;
            lugar = "America Central";
        }else if(sltZona == "zona3"){
            costo = 12000;
            lugar = "America del Sur";
        }else if(sltZona == "zona4"){
            costo = 24000;
            lugar = "Europa";
        }else if(sltZona == "zona5"){
            costo = 27000;
            lugar = "Asia";
        }
    }else{
        alert(`No se pueden enviar paquetes de mas de 5 kg`);
        return;
    }

    total = (inpPeso * costo).toFixed(2);

    resultado = `El costo para enviar su paquete a ${lugar} es de $${total}`;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML=`
    <div class=" alert alert-primary mt-3">${resultado}</div>
    `;
}