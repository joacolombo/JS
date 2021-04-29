const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularPromedio);

function calcularPromedio(){
    let total = 0;
    let sueldoHora = 12;
    let sueldoTotal = 0;

    for(let i=1; i<=6; i){
        let horas = Number(prompt(`Ingrese las horas trabajadas del dia ${i} de la semana`));

        if(isNaN(horas) == true){
            alert("Es necesario que ingrese solo numeros");
        }else{
            total = total + horas;
            i++
        }
    }

    sueldoTotal = total * sueldoHora;

    const resultContainer  = document.getElementById("resultContainer");

    resultContainer.innerText = `El empleado trabajo es de ${total} horas en la semana, le corresponde un sueldo de $${sueldoTotal}`;
}