// logest prefix using trie

class TrieNode {
    constructor() {
        this.children = {};
        this.wordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.wordEnd = true;
    }

    findLongestPrefix() {
        let current = this.root;
        let prefix = "";

        while (current) {
            const keys = Object.keys(current.children);

            // Stop if:
            // 1. There is more than one child (branching point).
            // 2. Current node is the end of a word.
            if (keys.length !== 1 || current.wordEnd) {
                break;
            }

            // Continue traversing down.
            const nextChar = keys[0];
            prefix += nextChar;
            current = current.children[nextChar];
        }

        return prefix;
    }
}

// Usage Example:
let trie = new Trie();
trie.insert("cartoon");
trie.insert("cart");
trie.insert("carry");
trie.insert("car");

console.log("Longest Common Prefix:", trie.findLongestPrefix()); // Output: "car"
