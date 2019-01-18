function bubbleSort(array) {
    let bool = true;
    if (array.length !== 0 && array.length !== 1) {
        if(!bool){
            break;
        }
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // swap the two
                    const temp = array[j]
                    array[j]= array[j+1]
                    array[j+1]=temp
                }
                else if( ){

                }
                
            }
        }
    }
    return array;
}

// var b = list[y];
// list[y] = list[x];
// list[x] = b;