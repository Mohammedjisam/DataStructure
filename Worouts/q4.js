// implement a tree with multiple children

// Node class for a general tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = []; // Array to hold child nodes
    }

    // Add a child to the node
    addChild(child) {
        this.children.push(child);
    }
}

// Tree class
class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue); // Initialize tree with root node
    }

    // Depth-First Traversal to display elements
    display(node = this.root, level = 0) {
        // Indentation for tree structure
        console.log("  ".repeat(level) + node.value);

        // Recursively display each child
        for (let child of node.children) {
            this.display(child, level + 1);
        }
    }
}

// Example usage

// Create the tree
const tree = new Tree("Root");

// Add children to root
const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");

tree.root.addChild(child1);
tree.root.addChild(child2);

// Add children to Child 1
child1.addChild(new TreeNode("Child 1.1"));
child1.addChild(new TreeNode("Child 1.2"));

// Add children to Child 2
child2.addChild(new TreeNode("Child 2.1"));
child2.addChild(new TreeNode("Child 2.2"));
child2.addChild(new TreeNode("Child 2.3"));

// Display the tree
tree.display();
