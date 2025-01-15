import {generateRandomArray} from "./common/generateRandomArray";
import {selectionSort} from "./sorting/impl/selectionSort";


const input: number[] = [...generateRandomArray(20, 20)]
// const input: number[] = [
//     41, 85, 62, 70, 64,
//     66, 74, 29, 23, 94
// ]

console.log('Unsorted input:', input)
console.log('Selection sort:', selectionSort(input))
