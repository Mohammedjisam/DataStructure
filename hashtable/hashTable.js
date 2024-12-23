class HashTable {
    constructor(size = 10) {
        this.table = new Array(size); 
    }

    _hash(key) {
        let hash = 0
        for (let char of key) {
            hash += char.charCodeAt(0); 
        }
        return hash % this.table.length
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = []; 
        }

        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value; 
                return;
            }
        }

        this.table[index].push([key, value])
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (let pair of bucket) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1); 
                    return;
                }
            }
        }
    }

    // Print the HashTable
    print() {
        this.table.forEach((bucket, index) => {
            if (bucket) {
                console.log(`Index ${index}:`, bucket);
            }
        });
    }
}

function findMostRepeatingChar(str) {
    const hashTable = new HashTable(26); // Assuming only lowercase letters for simplicity

    // Populate the hash table with character frequencies
    for (let char of str) {        
        const count = hashTable.get(char) || 0
        console.log(char,count)
        hashTable.set(char, count + 1);
    }

    // Find the character with the highest frequency
    let maxChar = null;
    let maxCount = 0;

    hashTable.table.forEach((bucket) => {
        if (bucket) {
            for (let [char, count] of bucket) {
                if (count > maxCount) {
                    maxChar = char;
                    maxCount = count;
                }
            }
        }
    })
    
    return maxCount
}

// Test the function
const str = "bbba";
const mostRepeatingChar = findMostRepeatingChar(str);
console.log(`The most repeating character is: '${mostRepeatingChar}'`);