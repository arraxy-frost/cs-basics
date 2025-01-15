// import {generateRandomArray} from "./common/generateRandomArray";
import {insertionSort} from "./sorting/impl/insertionSort";


// const input: number[] = [...generateRandomArray(10000, 10000)]
const input: number[] = [
    41, 85, 62, 70, 64,
    66, 74, 29, 23, 94
]

console.log('Unsorted input:', input)
console.log('Insertion sort:', insertionSort(input))
