class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    enque(data) {
        // Check if the queue is full
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue is full");
            return;
        }

        // If the queue is empty, set both front and rear to 0
        if (this.front === -1) {
            this.front = 0;
        }

        // Increment rear circularly and add data
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = data;
    }

    deque() {
        // Check if the queue is empty
        if (this.front === -1) {
            console.log("Queue is empty");
            return null;
        }

        const data = this.queue[this.front];
        this.queue[this.front] = null;

        // If the queue has only one element, reset front and rear
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            // Increment front circularly
            this.front = (this.front + 1) % this.size;
        }

        return data;
    }

    peek() {
        if (this.front === -1) {
            console.log("Queue is empty");
            return null;
        }
        return this.queue[this.front];
    }

    isEmpty() {
        return this.front === -1;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let output = [];
        let i = this.front;

        do {
            output.push(this.queue[i]);
            i = (i + 1) % this.size;
        } while (i !== (this.rear + 1) % this.size);

        console.log(output.join(" -> "));
    }
}

const cQueue = new CircularQueue(5);

cQueue.enque(10);
cQueue.enque(20);
cQueue.enque(30);
cQueue.enque(40);
cQueue.print(); // Output: 10 -> 20 -> 30 -> 40
cQueue.deque();
cQueue.print(); // Output: 20 -> 30 -> 40
cQueue.enque(50);
cQueue.enque(60);
cQueue.enque(70) // Queue becomes full
cQueue.print(); // Output: 20 -> 30 -> 40 -> 50 -> 60
console.log(cQueue.peek()); // Output: 20
cQueue.deque();
cQueue.deque();
cQueue.print(); // Output: 40 -> 50 -> 60
