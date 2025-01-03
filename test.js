// bubble sort
// function bubbleSort(arr){
//     let swap=0
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//                 swap++;
//             }
//         }
//     }
//     console.log("total swap:",swap)
//     return arr
// }
// const arr=[3,5,6,3,6,2]
// console.log(bubbleSort(arr))


//insertion sort

// function insertionSort(arr){
//     const n=arr.length;
//     for(let i=1;i<n;i++){
//         let key=arr[i];
//         let j=i-1
//         while(j>=0&&arr[j]>key){
//             arr[j+1]=arr[j]
//             j--;
//         }
//         arr[j+1]=key
//     }
//     return arr
// }

// const arr=[6,4,3,2,7,9,1,3,5]
// console.log(insertionSort(arr))


//selection sort
// function selectionSort(arr){
//     let n=arr.length
//     for(let i=0;i<n-1;i++){
//         let minIndex=i;
//         for(let j=i+1;j<n;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j
//             }
//         }
//         if(minIndex!==i){
//             [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
//         }
//     }
//     return arr
// }
// const arr=[6,4,3,2,7,9,1,3,5]
// console.log(selectionSort(arr))





//quick Sort

// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     const pivot=arr[0]
//     const left=[]
//     const right=[]
//     for(let i=1;i<arr.length;i++){
//         if(pivot<arr[i]){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// const arr=[6,4,3,2,7,9,1,3,5]
// console.log(quickSort(arr))




//quick sort

// function quickSort(arr,low=0,high=arr.length-1){
//     if(low<high){
//         let pivot=arr[high]
//         let i=low-1;
//         for(let j=low;j<high;j++){
//             if(arr[j]<=pivot){
//                 i++;
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//         }
//         [arr[i+1],arr[high]]=[arr[high],arr[i+1]]
//         const pivotIndex=i+1
//         quickSort(arr,low,pivotIndex-1)
//         quickSort(arr,pivotIndex+1,high)
        
//     }
//     return arr
// }
// const arr=[6,4,3,2,7,9,1,3,5]
// console.log(quickSort(arr))





//Merge Sort
// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr;
//     }
//     const mid=Math.floor(arr.length/2);
//     let left=mergeSort(arr.slice(0,mid))
//     let right=mergeSort(arr.slice(mid))
//     return merge(left,right)
// }
// function merge(left,right){
//     let newArr=[]
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             newArr.push(left.shift())
//         }else{
//             newArr.push(right.shift())
//         }
//     }
//     return [...newArr,...left,...right]
// }



// const arr=[6,4,3,2,7,9,1,3,5]
// console.log(mergeSort(arr))




//stack

// class Stack{
//     constructor(){
//         this.stack=[]
//     }
//     push(data){
//         return  this.stack.push(data)
//     }
//     size(){
//         return this.stack.length
//     }
//     pop(){
//         if(!this.size()){
//             console.log("stack is empty")
//         }
//         return this.stack.pop()
//     }
//     peek(){
//         if(!this.size()){
//             console.log("stack is empty")
//         }
//         console.log(this.stack[this.size()-1]);
//     }
//     print(){
//         if(!this.size()){
//             console.log("stack is empty")
//         }else{
//             console.log(this.stack)
//         }
//     }
// }



//palidrome

// function palidrome(str){
//     const stack=[]
//     for(let char of str){
//         stack.push(char)
//     }
//     for(let char of str){
//         if(char!==stack.pop()){
//             return false
//         }
//     }
//     return true
// }

// console.log(palidrome("malayalam"))





//remove middle

// function removeMiddle(arr){
//     const stack=new Stack()
//     for(let i=0;i<arr.length;i++){
//         stack.push(arr[i])
//     }
//     const newStack=[]
//     const minIndex=Math.floor(stack.size()/2)
//     for(let i=stack.size()-1;i>=0;i--){
//         const element=stack.pop()
//         if(i!==minIndex){
//             newStack.push(element)
//         }
//     }
//     while(newStack.length>0){
//         stack.push(newStack.pop())
//     }
//     stack.print()
// }

// removeMiddle([1,2,3,4,5,4,6,7])




//reverseStack
// function reverseStack(arr){
//     const tempStack=new Stack()
//     while (arr.length>0){
//         tempStack.push(arr.pop())
//     }
//     return tempStack
// }

// const arr=[1,2,3,4,5,6,7,8]
// console.log(reverseStack(arr))




//reverse string

// function reverseString(str){
//     const splitS=str.split("")
//     const stack=[]
//     for(let i of splitS){
//         stack.push(i)
//     }
//     let finalS="";
//     while(stack.length){
//         const current=stack.pop()
//         if(current){
//             finalS+=current;
//         }
//     }
//     return finalS
// }

// console.log(reverseString("jisam"))





//largest

// function largest(arr){
//     const stack=new Stack()
//     for(let num of arr){
//         stack.push(num)
//     }
//     stack.print()
//     let largest=-Infinity;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             largest=arr[i]
//         }
//     }
//     console.log("latgest:",largest)
// }

// largest([1,2,3,44,5,56,7,87,6])





//sort

// function sort(arr){
//      for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 let temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//      }
//      return arr
// }

// console.log(sort([1,2,45,37,5,8,5]))





//unique

// function unique(arr){
//     let unique1=[]
//     for(let item of arr){
//         if(!unique1.includes(item)){
//             unique1.push(item)
//         }
//     }
//     console.log(unique1)

// }
// unique([1,2,3,43,2,1,1,3,43,56,67])





//remove dupliactes

// function removeDuplicates(arr){
//     const count={}
//     for(let num of arr){
//         count[num]=(count[num]||0)+1;
//     }
//     for(let num of arr){
//         if(count[num]===1){
//             console.log(num)
//         }
//     }
// }

// removeDuplicates([1,2,3,4,5,6,7,5,4,3,2,1])





//valid parenthesis
// function validPrenthesis(str){
//     let stack=[]
//     for(let i=0;i<str.length;i++){
//         const char=str[i]
//         if(char==="("||char==="{"||char==="["){
//             stack.push(char)
//         }else if(char==="}"||char===")"||char==="]"){
//             if(stack.length===0){
//                 return false
//             }
//             const top=stack.pop()
//             if((char==="}"&&top!=="{")||(char===")"&&top!=="(")||(char==="]"&&top!=="[")){
//                 return false
//             }
//         }
//     }return stack.length===0
// }

// console.log(validPrenthesis("{{}}{}{}"))






//queue
// class Queue{
//     constructor(){
//         this.items=[]
//     }
//     enqueue(data){
//         this.items.push(data)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             console.log("queue is stack")
//             return null
//         }
//         return this.items.shift()
//     }
//     size(){
//         return this.items.length
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("queue is stack")
//             return null
//         }
//         return this.items[0]
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("queue is stack")
//             return null
//         }else{
//             console.log(this.items.join("=>"))
//         }
//     }
// }

// const queue=new Queue()
// queue.enqueue(5)
// queue.enqueue(6)
// queue.enqueue(4)
// queue.enqueue(2)
// queue.enqueue(9)
// queue.print()
// queue.dequeue()
// queue.print()





//stack using queue

// class stackUsingQueue{
//     constructor() {
//         this.q1=[]
//         this.q2=[]
//     }
//     push(x){
//         while(this.q1.length!==0){
//             this.q2.push(this.q1.shift())
//         }
//         this.q1.push(x)
//         while(this.q2.length!==0){
//             this.q1.push(this.q2.shift())
//         }
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log("stack is empty")
//             return undefined
//         }
//         return this.q1.shift();
//     }
//     top(){
//         if(this.isEmpty()){
//             console.log("stack is empty")
//             return undefined
//         }
//         return this.q1[0]
//     }
//     isEmpty(){
//         return this.q1.length===0
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("stack is empty")
//         }else{
//             console.log(this.q1)
//         }
//     }
//  }

//  const stack=new stackUsingQueue()
//  stack.push(5)
//  stack.push(5)
//  stack.push(5)
//  stack.push(5)
//  stack.push(5)
//  stack.push(4)
//  stack.print()
//  stack.pop()
//  stack.print()







//queue using stack

// class queueUsingStack{
//     constructor(){
//         this.stack1=[]
//         this.stack2=[]
//     }
//     enqueue(data){
//         this.stack1.push(data)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return 
//         }
//         if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }return this.stack2.pop()
//     }
//     peek(){
//         if(this.siEmpty()){
//             console.log("queue is empty")
//             return 
//         }
//         if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack2.pop())
//             }
//         }return this.stack2[this.stack2.length-1]
//        }
//        isEmpty(){
//         return this.stack1.length===0&&this.stack2.length===0
//        }
//        print(){
//         const stackreversed=[...this.stack2.reverse()]
//         console.log([...stackreversed,...this.stack1].join("->"))
//        }

// }

// const queue=new queueUsingStack()
// queue.enqueue(10)
// queue.enqueue(14)
// queue.enqueue(13)
// queue.enqueue(12)
// queue.enqueue(19)
// queue.print()
// queue.dequeue()
// queue.print()




//hashTable

// class HashTable{
//     constructor(size=10){
//         this.table=new Array(size)
//     }
//     _hash(key){
//         key=key.toString()
//         let hash=0
//         for(let char of key){
//             hash+=char.charCodeAt(0)
            
//         }
//         return hash%this.table.length
//     }
//     set(key,value){
//         const index=this._hash(key)
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
//                 if(pair[0]===key ){
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
//                 console.log(`index ${index}`,bucket)
//             }
//         })
//     }
// }


//reaping char


// function mostRepeatingChar(str){
//     const hashTable=new HashTable(26)
//     for(let char of str){
//         const count=hashTable.get(char)||0
//         console.log(char,count)
//         hashTable.set(char,count+1)
//     }
//     let maxChar=null;
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
//     return maxChar
//     return maxCount
// }

// const str="malaayalam"
// console.log(mostRepeatingChar(str))


// function twoSum(arr,target){
//     const hash=new HashTable(arr.length)
//     for(let i=0;arr.length;i++){
//         const compliment=target-arr[i]
//         if(hash.get(compliment)!==undefined){
//             return [i,hash.get(compliment)]
//         }
//         hash.set(arr[i],i)
//     }
//     return null;
// }

// let arr=[2,3,4,5,6,7,8]
// let target=6
// console.log(twoSum(arr,target))





//circular queue

class circularQueue{
    constructor(size){
        this.size=size
        this.queue=new Array(size)
        this.front=-1
        this.rear=-1
    }
    enqueue(data){
        if((this.rear+1)%this.size===this.front){
            console.log("queue id full")
            return;
        }
        if(this.front===-1){
            this.front=0
        }
        this.rear=(this.rear+1)%this.size;
        this.queue[this.rear]=data
    }
    dequeue(){
        if(this.front===-1){
            console.log("queue is empty")
            return null
        }
        const data=this.queue[this.front];
        this.queue[this.front]=null
        if(this.front===this.rear){
            this.front=-1;
            this.rear=-1;
        }else{
            this.front=(this.front+1)%this.size;
        }
        return data
    }
    isEmpty(){
        return this.front===-1;
    }
    print(){
        if(this.isEmpty()){
            console.log("queu is empty")
            return 
        }
        let output=[]
        let i=this.front;
        do{
            output.push(this.queue[i])
            i=[i+1]%this.size
        }while(i!==(this.rear+1)%this.size)
            console.log(output.join("=>"))
    }
}

const queue=new circularQueue(5)
queue.enqueue(10)
queue.enqueue(14)
queue.enqueue(13)
queue.enqueue(12)
queue.enqueue(19)
queue.print()
queue.dequeue()
queue.print()

