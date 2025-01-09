

//find the kth laregst

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    // Function to find the Kth largest element using reverse in-order traversal
    findKthLargest(k) {
        let count = 0;
        let result = null;

        // Helper function for reverse in-order traversal
        function reverseInOrderTraversal(node) {
            if (node === null || count >= k) return;

            // Traverse the right subtree first (larger values)
            reverseInOrderTraversal(node.right);

            // If Kth largest is found, store the result
            if (++count === k) {
                result = node.value;
                return;
            }

            // Traverse the left subtree
            reverseInOrderTraversal(node.left);
        }

        // Start traversal from the root
        reverseInOrderTraversal(this.root);
        return result;
    }
}

// Usage Example:
const bst = new BST();
bst.insert(5);
bst.insert(10);
bst.insert(6);
bst.insert(2);
bst.insert(4);
bst.insert(1);

// Find the Kth largest element
const k = 2; // For 3rd largest element
console.log(`${k}th Largest in BST:`, bst.findKthLargest(k)); // Output: 6
