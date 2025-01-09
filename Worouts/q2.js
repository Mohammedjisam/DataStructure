//check if two binary trees are identical


// Definition for a binary tree node
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to check if two trees are identical
function areIdenticalTrees(tree1, tree2) {
    // If both trees are null, they are identical
    if (tree1 === null && tree2 === null) {
        return true;
    }

    // If one tree is null and the other is not, they are not identical
    if (tree1 === null || tree2 === null) {
        return false;
    }

    // Check current nodes and recursively check left and right subtrees
    return (
        tree1.val === tree2.val &&
        areIdenticalTrees(tree1.left, tree2.left) &&
        areIdenticalTrees(tree1.right, tree2.right)
    );
}

// Example usage
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(areIdenticalTrees(tree1, tree2)); // Output: true
console.log(areIdenticalTrees(tree1, tree3)); // Output: false
