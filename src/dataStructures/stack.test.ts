import {Stack} from "./stack";

describe('Stack test', () => {
    let stack: Stack<number>;

    // Initialize stack before each test
    beforeEach(() => {
        stack = new Stack<number>();
    });

    test('should be empty after initialization', () => {
        expect(stack.isEmpty()).toBe(true); // Stack is empty
        expect(stack.size()).toBe(0);      // Size is 0
    });

    test('should add elements using push', () => {
        stack.push(10);
        stack.push(20);

        expect(stack.isEmpty()).toBe(false); // Stack is not empty after adding elements
        expect(stack.size()).toBe(2);        // Stack contains two elements
        expect(stack.peek()).toBe(20);       // Top element is 20
    });

    test('should remove elements using pop', () => {
        stack.push(10);
        stack.push(20);

        const popped = stack.pop();         // Remove top element
        expect(popped).toBe(20);            // Removed element is 20
        expect(stack.size()).toBe(1);       // One element remains

        stack.pop();
        expect(stack.isEmpty()).toBe(true); // Stack is now empty
    });

    test('should return undefined when popping from an empty stack', () => {
        expect(stack.pop()).toBeUndefined(); // Returns undefined if stack is empty
    });

    test('should return the top element using peek', () => {
        stack.push(10);
        stack.push(20);

        expect(stack.peek()).toBe(20);      // Top element is 20

        stack.pop();
        expect(stack.peek()).toBe(10);      // Now top element is 10
    });

    test('should clear the stack using clear', () => {
        stack.push(10);
        stack.push(20);

        stack.clear();
        expect(stack.isEmpty()).toBe(true); // Stack is empty after clearing
        expect(stack.size()).toBe(0);       // Size is 0
    });
})