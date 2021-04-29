const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularSeguro);

function calcularSeguro(){
    let sltSeguro = document.getElementById("sltSeguro").value;
    let sltAlcohol = document.getElementById("sltAlcohol").value;
    let sltLentes = document.getElementById("sltLentes").value;
    let sltEnfermedad = document.getElementById("sltEnfermedad").value;
    let inpEdad = Number(document.getElementById("inpEdad").value);

    let seguro = 0;
    let alcohol = 0;
    let lentes = 0;
    let enfermedad = 0;
    let edad = 0;
    let total = 0;

    if(sltSeguro == "planA"){
        seguro = 1200;
    }else{
        seguro = 950;
    }

    if(sltAlcohol == "rtaSi"){
        alcohol = 0.10;
    }else{
        alcohol = 0.00;
    }

    if(sltLentes == "rtaSi"){
        lentes = 0.05;
    }else{
        lentes = 0.00;
    }

    if(sltEnfermedad == "rtaSi"){
        enfermedad = 0.05;
    }else{
        enfermedad = 0.00;
    }

    if(inpEdad >= 40){
        edad = 0.20;
    }else{
        edad = 0.10;
    }

    total = (seguro * (1.00 + alcohol + lentes + enfermedad + edad)).toFixed(2);

    resultado = `El seguro tiene un costo total de $${total}`;

    let resultContainer = document.getElementById("resultContainer");

    resultContainer.innerHTML=`
    <div class=" alert alert-primary mt-3">${resultado}</div>
    `;
}