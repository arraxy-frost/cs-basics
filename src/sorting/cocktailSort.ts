export function cocktailSort(input: Array<number>): Array<number> {

    console.log('Run cocktail sorting \n ...')

    if (input.length < 2) {
        console.log('[Cocktail sorting]', 'Input has length lesser than 2')
        return input
    }

    const result: Array<number> = [...input]

    // stat
    let iterationCount: number = 0
    let executionTime: number = performance.now()

    //
    let storedValue: number
    let rightShiftIndex: number = input.length - 1
    let leftShiftIndex: number = 0
    let isSorted: boolean = false

    do {
        // From left to right
        for (let i: number = leftShiftIndex; i < input.length; i++) {
            iterationCount++
            if (result[i] > result[i + 1]) {
                storedValue = result[i]
                result[i] = result[i + 1]
                result[i + 1] = storedValue
                rightShiftIndex = i
            }
        }

        isSorted = true

        // From right to left
        for (let i: number = rightShiftIndex; i > 0; i--) {
            iterationCount++
            if (result[i - 1] > result[i]) {
                storedValue = result[i]
                result[i] = result[i - 1]
                result[i - 1] = storedValue
                leftShiftIndex = i
                isSorted = false
            }
        }
    }
    while (!isSorted)

    console.log('Sorting finished')
    console.log('Iterations:', iterationCount)
    console.log('Time:', performance.now() - executionTime)

    return result
}