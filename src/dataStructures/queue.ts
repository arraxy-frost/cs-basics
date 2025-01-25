export class Queue<T> {
    private items: Array<T>


    constructor(initData?: Array<T>) {
        this.items = initData ?? []
    }

    enqueue(element: T): number {
        return this.items.push(element)
    }

    dequeue(): T | undefined {
        return this.items.shift()
    }

    peek(): T | undefined {
        return this.items[0]
    }

    isEmpty(): boolean {
        return this.items.length == 0
    }

    size(): number {
        return this.items.length
    }
}