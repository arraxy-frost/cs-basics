import {generateRandomArray} from "./common/generateRandomArray";
import {mergeSort} from "./sorting/impl/mergeSort";
import {linearSearch} from "./search/impl/linearSearch";
import {binarySearch} from "./search/impl/binarySearch";


// const input: number[] = [...generateRandomArray(100, 100)]
const input: number[] = [
    41, 85, 62, 70, 64,
    66, 74, 29, 23, 94
]

console.log('Sorted input:', mergeSort(input))
// console.log('Merge sort:', mergeSort(input))

let target: number = 94
console.log(`Binary search ${target}:`, binarySearch(target, mergeSort(input)))