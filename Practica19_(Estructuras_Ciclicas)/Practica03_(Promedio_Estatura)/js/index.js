const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularPromedio);

function calcularPromedio(){
    let acumuladorEstatura = 0;
    let contadorEstatura = 0;
    let promedio = 0;
    let continuar = true;

    while(continuar == true){
        let calificacion = prompt(`Ingrese la estatura numero ${contadorEstatura + 1}`);

        if(calificacion == null){
            continuar = false;
        }else{
            acumuladorEstatura = acumuladorEstatura + Number(calificacion);

            contadorEstatura++
        }
    }

    promedio = acumuladorEstatura / contadorEstatura;

    const resultContainer  = document.getElementById("resultContainer");

    resultContainer.innerText = `El promedio de estatura es de ${promedio} metros`;
}