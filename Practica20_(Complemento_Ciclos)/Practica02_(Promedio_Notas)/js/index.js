const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", Promedio);

function Promedio(){
    let suma = 0;
    let promedio = 0;
    let sumaH = 0;
    let contadorH = 0;
    let promedioH = 0;
    let sumaM = 0;
    let contadorM = 0;
    let promedioM = 0;
    let promedioMayor = "";

    for(let i=1; i<=20; i++){
        let nota = prompt(`Ingrese la nota ${i}`);
        if(isNaN(nota) == true || nota<0 || nota>10){
            alert("Es necesario que ingrese un numero entre 1 y 10");
            i = i - 1;
        }else if(nota == null){
            break;
        }else{
            let sexo = prompt(`Ingrese el sexo de la nota ${i}`);
            nota = Number(nota);
            if(sexo == "hombre"){
                suma = suma + nota;
                sumaH = sumaH + nota;
                contadorH++;
            }else{
                suma = suma + nota;
                sumaM = sumaM + nota;
                contadorM++;
            } 
        }
    }
    promedio = (suma / 20).toFixed(2);
    promedioH = sumaH / contadorH;
    promedioM = sumaM / contadorM;

    if(promedioH>promedioM){
        promedioMayor = `Hombres`;
    }else{
        promedioMayor = `Mujeres`;
    }
    
    promedioH = promedioH.toFixed(2);
    promedioM = promedioM.toFixed(2);

    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = `<div class="alert alert-primary" role="alert">
    <br>Promedio general del grupo:  <b>${promedio}</b>
    <br>Promedio obtenido por hombres: <b>${promedioH}</b>
    <br>Promedio obtenido por mujeres: <b>${promedioM}</b>
    <br>Mayor promedio por genero: <b>${promedioMayor}</b> 
    </div>`; 
}