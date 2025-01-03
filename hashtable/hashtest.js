// class HashTable{
//     constructor(size=10){
//         this.table=new Array(size)
//     }
//     _hash(key){
//         let hash=0
//         for(let char of key){
//               hash+=char.charCodeAt(0)
//         }
//         return hash%this.table.length
//     }
//     set(key,value){
//         const index=this._hash(key);
//         if(!this.table[index]){
//             this.table[index]=[]
//         }
//         for(let pair of this.table[index]){
//             if(pair[0]===key){
//                 pair[1]=value
//                 return
//             }
//         }
//         this.table[index].push([key,value])
//     }
//     get(key){
//         const index=this._hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             for(let pair of bucket){
//                 if(pair[0]===key){
//                     return pair[1]
//                 }
//             }
//         }
//         return undefined
//     }
//     remove(key){
//         const index=this._hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             for(let i=0;i<bucket.length;i++){
//                 if(bucket[i][0]===key){
//                     bucket.splice(i,1)
//                     return
//                 }
//             }
//         }
//     }
//     print(){
//         this.table.forEach((bucket,index)=>{
//             if(bucket){
//                 console.log(`index ${index}:`,bucket)
//             }
//         })
//     }
// }

// // const hashTable=new HashTable()
// // hashTable.set("name","jisam")
// // hashTable.set("age",21)
// // hashTable.set("place","kottakkal")
// // hashTable.print()
// // console.log(hashTable.get("name"))
// // hashTable.remove("age")
// // hashTable.print()

// function findMostRepeatingChar(str){
//     const hashTable=new HashTable(26);
//     for(let char of str){
//         const count=hashTable.get(char)||0
//         console.log(char,count)
//         hashTable.set(char,count+1)
//     }
//     let maxChar=null
//     let maxCount=0
//     hashTable.table.forEach((bucket)=>{
//         if(bucket){
//             for(let [char,count]of bucket){
//                 if(count>maxCount){
//                     maxChar=char
//                     maxCount=count
//                 }
//             }
//         }
//     })
//     return maxCount
// }

// const str="malayalaam"
// const mostRepeatingChar=findMostRepeatingChar(str)
// console.log(`most repeated char:${mostRepeatingChar}`)

//hashtable

class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
  }

  _hash(key) {
    key = key.toString(); // Convert key to string
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash % this.table.length;
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
    this.table[index].push([key, value]);
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

  print() {
    this.table.forEach((bucket, index) => {
      if (bucket) {
        console.log(`index ${index}`, bucket);
      }
    });
  }
}

const hashTable = new HashTable();
hashTable.set("name", "jisam");
hashTable.set("age", 21);
hashTable.set("place", "koattakkal");
hashTable.print();
console.log(hashTable.get("place"));
hashTable.remove("name");
hashTable.print();

function findMostReapeatingChar(str) {
  const hashTable = new HashTable(26); // Hash table for counting characters
  for (let char of str) {
    const count = hashTable.get(char) || 0; // Default to 0 if not found
    hashTable.set(char, count + 1);
  }

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
  });
  console.log("maxChar:", maxChar, "maxCount:", maxCount); // For debugging
  return maxChar; // Explicitly return the most frequent character
}
const str = "malayaalam";
findMostReapeatingChar(str);

function twoSum(arr, target) {
    const hash = new HashTable(arr.length);
    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
      if (hash.get(complement) !== undefined) {
        return [i, hash.get(complement)];
      }
      hash.set(arr[i], i);
    }
    return null; // Return null if no solution is found
  }
let arr = [1, 2, 3, 4, 5];
let target = 3;
console.log(twoSum(arr, target));
