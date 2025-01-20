import {ISortingFunction} from "../ISortingFunction";

export const bubbleSort: ISortingFunction = input => {

    if (input.length < 2) {
        return input
    }

    const result: Array<number> = [...input]

    let store: number = 0
    let isShifted: boolean = false

    do {
        isShifted = false

        for (let i: number = 1; i < input.length; i++) {
            // Can be done other way with moder js features. Will try it later.
            if (result[i] < result[i - 1]) {
                store = result[i - 1]
                result[i - 1] = result[i]
                result[i] = store
                isShifted = true
            }
        }
    }
    while (isShifted)

    return result
}