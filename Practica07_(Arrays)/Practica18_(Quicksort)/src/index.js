//Recursividad: una funcion se manda a llamar una determinada cantidad de veces
let index = 0;

function main () {
    let numberList = [14, 4, 10, 9, 1 ,2];

   let listSort = quickSort (numberList);
   console.log(listSort);
}

function quickSort (arr){

    //Validacion del tamaño de los sub-arreglos
    if (arr.length == 0) return [];

    //Pivote: el elemento que se encuentra a la mitad del arreglo
    let mediumIndex = Math.floor(arr.length / 2);
    let pivote = arr[mediumIndex];
    
    //Left: numeros menores al pivote
    //Right: numeros mayores al pivote
    let leftArr = [];
    let rightArr = [];

    //Recorro el arreglo para validar numeros menores y mayores que el pivote
    //Cuando el for evalue la posicion en el cual se encuentra el pivote no tengo que hacer nada
    for (let i=0; i<arr.length; i++) {
        if (i != mediumIndex) {
            if (arr[i] < pivote) {
                leftArr.push(arr[i]);
            }else{
                rightArr.push(arr[i]);
            }
        }
    }

    leftArr = quickSort(leftArr);
    rightArr = quickSort(rightArr);

    console.log(leftArr);
    console.log(rightArr);

    return leftArr.concat(pivote).concat(rightArr);
}

main();