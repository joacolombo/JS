function main() {
    let numberList = [0, 2, 4, 1, 9, 4, 5, 7, 3, 4];
    let longitud = numberList.length;
    quickSort(numberList, o, longitud - 1);
}

/**
 * 
 * @param {*} arr -> array a ser acomodado
 * @param {*} low -> index inicial
 * @param {*} high -> index final
 */

function quickSort(arr, low, high) {
    if(low < high){
        partition(arr, low, high);
    }
}

/**
 * Esta funcion toma el ultimo elemento como pivote, coloca el pivote en la posicion correcta de ordenacion
 * A la izquierda los chicos, a la derecha los grandes
 * @param {*} arr 
 * @param {*} low 
 * @param {*} high 
 */

function partition(arr, low, high) {
    let pivot = arr[high];
    let index = low - 1;

    for(let j = low; j <= high - 1; j++) {
        if(arr[j] < pivot){
            index++;
            let tmp=arr[index];
            arr[index] = arr[j];
            arr[j] = tmp;
        }
    }

    index++;
    let tmp = arr[index];
    arr[index] = arr[high];
    arr[high] = tmp;
}

main();