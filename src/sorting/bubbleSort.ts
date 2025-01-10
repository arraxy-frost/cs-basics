export function bubbleSort(input: Array<number>): Array<number> {

    console.log('Run bubble sorting \n ...')

    if (input.length < 2) {
        console.log('Input has length lesser than 2')
        return input
    }

    const result: Array<number> = [...input]

    // stat
    let iterationCount: number = 0
    let executionTime: number = performance.now()

    // Algo variables
    let store: number = 0
    let isShifted: boolean = false

    do {
        isShifted = false

        for (let i: number = 1; i < input.length; i++) {
            iterationCount++
            if (result[i] < result[i - 1]) {
                store = result[i - 1]
                result[i - 1] = result[i]
                result[i] = store
                isShifted = true
            }
        }
    }
    while (isShifted)

    console.log('Sorting finished')
    console.log('Iterations:', iterationCount)
    console.log('Time:', performance.now() - executionTime)

    return result
}