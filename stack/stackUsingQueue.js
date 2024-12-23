class StackUsingQueue {
    constructor() {
        this.q1 = []; // Main queue
        this.q2 = []; // Auxiliary queue
    }

    // Push element onto the stack
    push(x) {
        // Move all elements from q1 to q2
        while (this.q1.length !== 0) {
            this.q2.push(this.q1.shift());
        }

        // Add the new element to q1
        this.q1.push(x);

        // Move all elements back from q2 to q1
        while (this.q2.length !== 0) {
            this.q1.push(this.q2.shift());
        }
    }

    // Remove the top element from the stack
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty, cannot pop.");
            return undefined;
        }
        return this.q1.shift();
    }

    // Get the top element of the stack
    top() {
        if (this.isEmpty()) {
            console.log("Stack is empty, no top element.");
            return undefined;
        }
        return this.q1[0];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.q1.length === 0;
    }

    // Print the stack
    printStack() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
        } else {
            console.log("Current Stack:", this.q1);
        }
    }
}

// Example usage
const stack = new StackUsingQueue();

stack.push(20);
stack.push(30);
stack.push(40);
stack.printStack(); // Output: Current Stack: [40, 30, 20]

stack.pop();
stack.printStack(); // Output: Current Stack: [30, 20]
console.log("Top Element:", stack.top()); // Output: Top Element: 30
