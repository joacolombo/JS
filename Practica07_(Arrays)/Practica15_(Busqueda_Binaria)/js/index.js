const btnBuscar = document.getElementById("btnBuscar");
const inpNumero = document.getElementById("inpNumero");

btnBuscar.addEventListener("click", buscarElementoBusquedaBinaria);

let numberList = [];

llenarArray();

function random(min, max){
    let number = Math.floor(Math.random() * (max - min)) + min;

    return number;
}

function llenarArray(){
    let longitud = random(1,100000);

    for(let i=0; i<longitud; i++){
        let randomNumber = random(1,100000);
        numberList.push(randomNumber)    
    }

    console.log(numberList);

    numberList.sort(function(a,b){
        return a - b;
    });
    
    console.log(numberList);
}

function buscarElementoBusquedaBinaria(){
    let firstElement = 0;
    let lastElement = numberList.length - 1;
    let find = false;
    const numeroBusqueda = Number(inpNumero.nodeValue);

    //Falta validacion de numeroBusqueda

    console.time("inicioCiclo");

    while(firstElement <= lastElement && find == false){
        let middle = Math.floor((firstElement + lastElement) / 2);

        if(numberList[middle] == numeroBusqueda){
            find = true;
            break;
        }else{
            if(numeroBusqueda < numberList[middle]){
                lastElement = middle - 1;
            }else{
                firstElement = middle + 1;
            }
        }
    }

    console.log("🚀 ~ file: index.js ~ line 57 ~ buscarElementoBusquedaBinaria ~ console.log(find)", console.log(find))

    console.timeEnd("inicioCiclo");
}