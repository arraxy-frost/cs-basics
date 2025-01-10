import {generateRandomArray} from "./common/generateRandomArray";
import {bubbleSort} from "./sorting/bubbleSort";
import {cocktailSort} from "./sorting/cocktailSort";

// const input: Array<number> = [
//     21, 93, 77, 99, 17,
//     15,  5, 53, 51, 84
// ]
const input: Array<number> = generateRandomArray(9000, 100000)

console.log('Input array:')
console.log(input, '\n')

console.log(cocktailSort(input))
console.log(bubbleSort(input))
