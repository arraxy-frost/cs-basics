import {ISearchFunction} from "../ISearchFunction";

export const linearSearch: ISearchFunction = (target: number, input: number[]): number => {

    for (let i: number = 0; i < input.length; i++) {
        if (input[i] == target) {
            return input[i]
        }
    }

    return null
}