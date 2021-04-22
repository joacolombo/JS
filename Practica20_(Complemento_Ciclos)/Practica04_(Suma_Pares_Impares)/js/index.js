const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", imprimirNumeros);

function imprimirNumeros(){ 
    let sumaPar = 0;
    let sumaImpar = 0;
    
    let sumaParTxT = "";
    let sumaImparTxt = "";

    for(let i=200; i<=400; i++){
        if(i%2 == 0){
            sumaPar = sumaPar + i;
            sumaParTxT += `+ ${i} `; 
        }else{
            sumaImpar = sumaImpar + i;
            sumaImparTxt += `+ ${i}`;
        }
    }
    
    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = `
    <br><b>Suma de numeros pares:</b> ${sumaParTxT} = ${sumaPar}
    <br>
    <br><b>Suma de numeros impares:</b> ${sumaImparTxt} = ${sumaImpar}
    `;
}