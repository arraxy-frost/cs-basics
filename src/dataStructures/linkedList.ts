// interface ILinkedNode<T> {
//     data: T;
//     next: LinkedNode<T> | null;
// }
//
// interface ILinkedList<T> {
//     append(data: T): void;          // Add into end
//     prepend(data: T): void;         // Add into beginning
//     delete(data: T): boolean;
//     find(data: T): ILinkedNode<T> | null;
//     print(): void;
//     size(): number;
//     clear(): void;
// }
// export class LinkedList<T> implements ILinkedList<T> {
//     private readonly nodeItems: Array<LinkedNode<T>>
//
//     constructor() {
//         this.nodeItems = []
//     }
//
//     append(data: T): number {
//         const el = new LinkedNode(data)
//
//         if (this.nodeItems.length > 0) {
//             this.nodeItems[this.nodeItems.length - 1].next = el
//         }
//
//         return this.nodeItems.push(el)
//     }
//
//     prepend(data: T): void {
//         const el: LinkedNode<T> = new LinkedNode<T>(data)
//         el.next = this.nodeItems[0]
//         this.nodeItems.unshift(el)
//     }
//
//     clear(): void {
//         this.nodeItems.splice(0, this.nodeItems.length)
//     }
//
//     delete(data: T): boolean {
//         for (let i: number = 0; i < this.nodeItems.length; i++) {
//             if (this.nodeItems[i].data === data) {
//                 this.nodeItems.splice(i, 1)
//
//                 if (i > 0) {
//                     this.nodeItems[i-1].next = this.nodeItems[i]
//                 }
//
//                 return true
//             }
//         }
//         return false;
//     }
//
//     find(data: T): ILinkedNode<T> | null {
//         for (let i: number = 0; i < this.nodeItems.length; i++) {
//             if (this.nodeItems[i].data === data) {
//                 return this.nodeItems[i]
//             }
//         }
//         return null;
//     }
//
//     print(): void {
//         for (const node of this.nodeItems) {
//             console.log(node.data, ':', node.next?.data)
//         }
//     }
//
//     size(): number {
//         return this.nodeItems.length;
//     }
// }

// Еще в процессе реализации классического подохода через объекты.
// Нужно реализовать через интерфейс и добавить тестовый сценарий
class LinkedNode<T> {
    data: T;
    next: T | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

// class LinkedList<T> {
//
//     private head: LinkedNode<T> | null = null;
//     private length: number = 0;
//
//     append(data: T): void {
//         const el = new LinkedNode(data)
//
//         if (!this.head) {
//             this.head = el;
//         }
//         else {
//             let current = this.head;
//
//             while (current.next) {
//                 current = current.next
//             }
//             current.next = el;
//         }
//
//         this.length++;
//     }
//
//     prepend(data: T): void {
//         const el = new LinkedNode(data)
//         el.next = this.head
//         this.head = el;
//         this.length++;
//     }
//
//     delete(data: T): boolean {
//         if (!this.head) return false
//
//         if (this.head.data === data) {
//             this.head = this.head.next;
//             this.length--;
//             return true;
//         }
//
//         let current = this.head;
//
//         while (current.next) {
//             if (current.next.data === data) {
//                 current.next = current.next.next;
//                 this.length--;
//                 return true;
//             }
//         }
//
//         return true;
//     }
//
//     find(data: T): Node<T> | null {
//         let current = this.head;
//         while (current) {
//             if (current.data === data) return current;
//             current = current.next;
//         }
//         return null;
//     }
//
//     print(): void {
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
//
//     size(): number {
//         return this.length
//     }
//
//     clear(): void {
//         this.head = null;
//         this.length = 0;
//     }
//
// }



