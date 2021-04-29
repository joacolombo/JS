const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcular);

function calcular(){
    let continuar = true;
    
    let suma = 0;
    let contador = 0;
    let promedio = 0;

    let sumaPositivo = 0;
    let contadorPositivo = 0;
    let promedioPositivo = 0;

    while (continuar == true){
        
        let numero = prompt(`Ingrese el ${contador+1}º numero entero`);
        if(isNaN(numero) == true || numero%1 != 0){
            alert("Es necesario que ingrese un numero entero");
        }else if(numero == null){
            continuar = false;
            break;
        }else{
            numero = Number(numero);
            
            if(numero > 0){
                suma = suma + numero;
                contador++;

                sumaPositivo = sumaPositivo + numero;
                contadorPositivo++;
            }else{
                suma = suma + numero;
                contador++;
            }           
        }
    }
    
    promedio = (suma / contador).toFixed(2);
    promedioPositivo = (sumaPositivo / contadorPositivo).toFixed(2);
    
    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = `<div class="alert alert-primary" role="alert">
    <br>Numeros  leidos mayores que  0:  <b>${contadorPositivo}</b>
    <br>Promedio de los numeros positivos: <b>${promedioPositivo}</b> 
    <br>Promedio de todos los numeros: <b>${promedio}</b> 
    </div>`;
}