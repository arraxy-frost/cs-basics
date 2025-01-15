import { ISortingFunction } from "../ISortingFunction";

export const insertionSort: ISortingFunction = input => {

    if (input.length < 2) return input

    const output: number[] = [...input]

    for (let i: number = 1; i < output.length; i++) {
        let currentValue: number = output[i]
        let index: number = i - 1

        while (currentValue < output[index]) {
            output[index + 1] = output[index]
            output[index] = currentValue
            index--
        }
    }

    return output
}