export function generateRandomArray(size: number, maxValue: number = 100, offset: number = 0): Array<number> {
    const result: Array<number> = []

    for (let i: number = 0; i < size; i++) {
        result.push(Math.ceil(Math.random() * maxValue) + offset)
    }

    return result
}