import {ISearchFunction} from "../ISearchFunction";

export const binarySearch: ISearchFunction = (target: number, input: number[]): number | null => {
    // Edge cases
    if (input.length == 1) return input[0]
    if (input.length == 0) return null


    let leftIndex: number = 0
    let rightIndex: number = input.length - 1
    let midIndex: number = Math.floor((rightIndex - leftIndex) / 2)

    while ((rightIndex - leftIndex) > 0) {
        if (target == input[midIndex]) return midIndex

        if (target < input[midIndex]) {
            rightIndex = midIndex - 1
        }
        else {
            leftIndex = midIndex + 1
        }

        midIndex = leftIndex + (Math.floor((rightIndex - leftIndex) / 2))
    }

    if (input[midIndex] == target) return midIndex

    return null
}