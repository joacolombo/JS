const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularRegalo);

function calcularRegalo(){
    let dinero = Number(document.getElementById("inpDinero").value);

    let  presente = "";

    if(dinero <= 0){
        alert(`Es necesario ingresar el monto que desea gastar`);
        return;
    }else if(dinero <= 10){
        presente = "una tarjeta";
    }else if(dinero > 10 && dinero <= 100){
        presente = "unos chocolates";
    }else if(dinero > 100 && dinero <= 250){
        presente = "unas flores";
    }else{
        presente = "un anillo";
    }
    
    resultado = `Con el monto de $${dinero} usted puede regalarle ${presente}`;

    let containerResult = document.getElementById("containerResult");

    containerResult.innerHTML=`
    <div class=" alert alert-primary mt-3">${resultado}</div>
    `;
}