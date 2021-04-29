const btnInitApp = document.getElementById("btnInitApp");

btnInitApp.addEventListener("click", calcular);

function calcular(){
    let factorial = 1;
    let factorialTxt = "";
        
        let numero = prompt(`Ingrese un numero entero positivo`);
        if(isNaN(numero) == true || numero%1 != 0 || numero < 0){
            alert("Es necesario que ingrese un numero entero positivo");
            return;
        }else if(numero == null){
            return;
        }else{
            numero = Number(numero);
            for(let i=1; i<=numero; i++){
                factorial = factorial * i;

                factorialTxt += `${i}`;
                
                if(i != numero){
                    factorialTxt += ` x `;
                }
            }          
        }
    
    
    const resultContainer = document.getElementById("resultContainer");
    
    resultContainer.innerHTML = `<div class="alert alert-primary mt-3" role="alert">
    ${numero}! = ${factorialTxt} = ${factorial}
    </div>`;
}