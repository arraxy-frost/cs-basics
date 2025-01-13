import {generateRandomArray} from "./common/generateRandomArray";
import {bubbleSort} from "./sorting/impl/bubbleSort";
import {cocktailSort} from "./sorting/impl/cocktailSort";


const input: number[] = generateRandomArray(500, 1000)

console.log('Input array:\n', input)
console.log(cocktailSort(input))
console.log(bubbleSort(input))
