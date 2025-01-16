import {ISortingFunction} from "../ISortingFunction";

export const mergeSort: ISortingFunction = (input: number[]): number[] =>
{
    if (input.length < 2) return input

    // const output: number[] = [...input]
    const divider: number = Math.floor(input.length / 2)
    const left: number[] = input.slice(0, divider)
    const right: number[] = input.slice(divider)

    const sortedLeft: number[] = mergeSort(left)
    const sortedRight: number[] = mergeSort(right)

    return merge(sortedLeft, sortedRight)
}

const merge = (left: number[], right: number[]): number[] =>
{
    const result: number[] = []

    let leftIndex: number = 0;
    let rightIndex: number = 0;

    while (leftIndex < left.length || rightIndex < right.length) {
        if (leftIndex >= left.length || right[rightIndex] < left[leftIndex]) {
            result.push(right[rightIndex])
            rightIndex++
        }
        else {
            result.push(left[leftIndex])
            leftIndex++
        }
    }

    return result
}