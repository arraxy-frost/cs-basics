export class Stack<T> {

    private items: T[]

    constructor() {
        this.items = []
    }

    push(element: T): T {
        this.items.push(element)
        return element
    }

    pop(): T {
        return this.items.pop()
    }

    peek(): T {
        if (this.items.length == 0) {
            return undefined
        }

        return this.items[this.items.length - 1]
    }

    size(): number {
        return this.items.length
    }

    isEmpty(): boolean {
        return this.items.length == 0
    }

    clear(): number {
        this.items = []
        return this.items.length
    }
}