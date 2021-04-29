const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularAhorro);

function calcularAhorro(){
    let ahorroAcumulado = 0;
    let resultadoAcumuladorMensajes = "";

    for(let x=1; x<=12; x++){
        let ahorroMensual = Number(prompt(`Ingrese el ahorro del mes ${x}`));

        ahorroAcumulado = ahorroAcumulado + ahorroMensual;

        resultadoAcumuladorMensajes += `<li class="list-group-item">El ahorro acumulado en el mes ${x} es: $ ${ahorroAcumulado}</li>`;
    }
   
    const lista = document.getElementById("acumulacionMensual");
   
    lista.innerHTML = resultadoAcumuladorMensajes;
   
    const resultContainer  = document.getElementById("resultContainer");

    resultContainer.innerHTML = `El ahorro que se acumulo en el año es de: $ ${ahorroAcumulado}`;
}