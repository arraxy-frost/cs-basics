export function bubbleSort(input: Array<number>): Array<number> {
    console.log('Run bubble sorting ...')

    if (input.length < 2) {
        console.log('[Bubble sorting]', 'Input has length lesser than 2')
        return input
    }

    const result: Array<number> = [...input]

    let store: number = 0
    let isShifted: boolean = false

    do {
        isShifted = false

        for (let i: number = 1; i < input.length; i++) {
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