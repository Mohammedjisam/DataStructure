// if the tree is Balenced or not 

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

    // Function to insert a node in the BST
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Function to insert a node recursively
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

    // Function to check if the tree is balanced
    isBalanced(root) {
        if (root === null) {
            return true; // An empty tree is balanced
        }

        // Check the height difference between the left and right subtrees
        const leftHeight = this.getHeight(root.left);
        const rightHeight = this.getHeight(root.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false; // Tree is not balanced
        }

        // Recursively check the left and right subtrees
        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    // Function to get the height of a tree
    getHeight(root) {
        if (root === null) {
            return 0; // Height of an empty tree is 0
        }

        const leftHeight = this.getHeight(root.left);
        const rightHeight = this.getHeight(root.right);

        // Return the maximum height between the left and right subtrees plus 1
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// Usage Example:
const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(2);
bst.insert(4);
bst.insert(7);
bst.insert(9);

console.log("Is the tree balanced?", bst.isBalanced(bst.root)); // Output: true

// Create an unbalanced tree
const unbalancedBst = new BST();
unbalancedBst.insert(1);
unbalancedBst.insert(2);
unbalancedBst.insert(3);
unbalancedBst.insert(4);
unbalancedBst.insert(5);

console.log("Is the unbalanced tree balanced?", unbalancedBst.isBalanced(unbalancedBst.root)); // Output: false
