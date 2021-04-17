const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcularPromedio);

function calcularPromedio(){
    let total = 0;
    let aux

    for(let i=1; i<=20; i++){
        aux = (2 ** (i-1)) * 10;
        total = total + aux;
    }

    const resultContainer  = document.getElementById("resultContainer");

    resultContainer.innerText = `El producto tiene un costo total de $${total}`;
}