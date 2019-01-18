



//ITERATIVE VERSION (Just uncomment to run!)

// function bubbleSort(array) {
//     console.log(array);
//     let counter;
//     let searchArea = array.length - 1;
//     if (array.length !== 0 && array.length !== 1) {
//         for (let i = 0; i < array.length; i++) {
//             counter = 0;
//             for (let j = 0; j < searchArea; j++) {
//                 if (array[j] > array[j + 1]) {
//                     counter++
//                     const temp = array[j];
//                     array[j] = array[j + 1];
//                     array[j + 1] = temp;
//                 }
//             }
//             console.log(array);
//             searchArea--;
//             if (counter === 0) {
//                 break;
//             }
//         }
//     }
//     return array;
// }


bubbleSort([5, 6, 1, 8, 4, 3, 9, 2]);
