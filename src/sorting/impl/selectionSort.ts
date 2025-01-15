import {ISortingFunction} from "../ISortingFunction";

export const selectionSort: ISortingFunction = input => {
    if (input.length < 2) return input

    let output: number[] = [...input]

    for (let i: number = 0; i < output.length; i++) {
        let currentValue: number = output[i]
        let minIndex: number = i

        for (let j: number = i; j < output.length; j++) {
            if (output[j] < output[minIndex]) {
                minIndex = j
            }
        }

        output[i] = output[minIndex]
        output[minIndex] = currentValue
    }

    return output
}