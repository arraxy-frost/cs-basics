export class Dequeue<T> {
    private items: Array<T>


    constructor(initData?: Array<T>) {
        this.items = initData ?? []
    }

    enqueueFront(element: T): number {
        return this.items.unshift(element)
    }

    enqueueBack(element: T): number {
        return this.items.push(element)
    }

    dequeueFront(): T | undefined {
        return this.items.shift()
    }

    dequeueBack(): T | undefined {
        return this.items.pop()
    }

    peekBack(): T | undefined {
        return this.items[this.items.length - 1]
    }

    peekFront(): T | undefined {
        return this.items[0]
    }

    isEmpty(): boolean {
        return this.items.length === 0
    }

    size(): number {
        return this.items.length
    }
}