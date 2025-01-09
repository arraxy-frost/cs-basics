import {generateRandomArray} from "./common/generateRandomArray";
import {bubbleSort} from "./sorting/bubbleSort";

console.log('Generating random array ...\n')

const randomArray: Array<number> = generateRandomArray(100, 1000)

console.log('The list has been generated:')
console.log(randomArray, '\n')

console.log(bubbleSort(randomArray))

// import readline from 'node:readline'
//
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
//
// rl.question("Choose operation: ", (operationName: string) => {
//     console.log(operationName)
//     rl.close()
// })

