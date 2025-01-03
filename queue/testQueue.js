// // class Queue{
// //     constructor(){
// //         this.items=[]
// //     }
// //     enqueue(data){
// //         this.items.push(data)
// //     }
// //     dequeue(){
// //         if(this.isEmpty()){
// //             console.log("queue is empty")
// //             return null;
// //         }
// //         return this.items.shift();
// //     }
// //     size(){
// //         return this.items.length
// //     }
// //     peek(){
// //         if(this.isEmpty()){
// //             console.log("queue is empty")
// //             return null;
// //         }
// //         return this.items[0]
// //     }
// //     isEmpty(){
// //         return this.items.length===0
// //     }
// //     print(){
// //         if(this.isEmpty()){
// //             console.log("queue is empty")
// //         }else{
// //             console.log(this.items.join("=>"))
// //         }
// //     }
// // }

// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class Queue{
//     constructor() {
//         this.head=null
//         this.rear=null
//         this.size=0
//     }
//     enqueue(data){
//         const newNode=new Node(data)
//         if(this.head===null){
//             this.head=newNode
//             this.rear=newNode
//             this.size++
//             return
//         }
//             this.rear.next=newNode
//             this.rear=newNode
        
     
//         this.size++
//     }
//     dequeue(){
//         if(this.head==null){
//             console.log("Queue is empty")
//             return 
//         }
//         const dequedata=this.head.data
//         this.head=this.head.next
//         if(this.head===null){
//            this.rear=null
//         }
//         this.size--
//         return dequedata
//     }
//     peek(){
//         return this.head.data
//     }
//     print(){
//         let current=this.head
//         let arr=[]
//         while(current){
//             arr.push(current.data)
//                 current=current.next
//             }
//             console.log(arr.join("=>"))
        
//     }
// }

// const queue=new Queue
// queue.enqueue(6)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(9)
// queue.print()
// queue.dequeue()
// queue.print()


// class StackUsingQueue{
//     constructor(){
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
//         return this.q1.shift()
//     }
//     isEmpty(){
//         return this.q1.length===0
//     }
//     printStack(){
//         if(this.isEmpty()){
//             console.log("Stack is empty")
//         }else{
//             console.log("current stack:",this.q1)
//         }
//     }
// }

// const stack=new StackUsingQueue
// stack.push(7)
// stack.push(3)
// stack.push(2)
// stack.push(5)
// stack.push(9)
// stack.pop()
// stack.printStack()



// class QueueUsingStack{
//      constructor() {
//         this.stack1=[]
//         this.stack2=[]
//      }
//      enqueue(data){
//         this.stack1.push(data)
//      }
//      dequeue(){
//         if(this.isEmpty()){
//             console.log("Queue is empty")
//             return 
//         }
//         if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.pop()
//      }
//      peek(){
//         if(this.isEmpty()){
//             console.log("Queue is empty")
//             return 
//         }
//         if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack2.pop())
//             }
//         }
//         return this.stack2[this.stack2.pop()]
//      }
//      isEmpty(){
//         return this.stack1.length===0&&this.stack2.length===0
//      }
//      print(){
//         const stack2Reversed=[...this.stack2].reverse()
//         console.log(([...stack2Reversed,...this.stack1].join("->")))
//      }
// }

// const queue=new QueueUsingStack()
// queue.enqueue(6)
// queue.enqueue(2)
// queue.enqueue(8)
// queue.enqueue(1)
// queue.enqueue(9)
// queue.dequeue()
// queue.print()





class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(data){
        this.items.push(data)
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return null
        }
        return this.items.shift()
    }
    size(){
        return this.items.length;
    }
    peek(){
        if(this.isEmpty()){
            console.log("Queue is empty")
            return null
        }
        return this.items[0]
    }
    isEmpty(){
        return this.items.length===0
    }
    print(){
        if(this.isEmpty()){
            console.log("queue is empty")
        }else{
            console.log(this.items.join("->"))
        }
    }
}

const queue= new Queue()
queue.enqueue(7)
queue.enqueue(4)
queue.enqueue(3)
queue.enqueue(2)
queue.enqueue(9)
queue.print()
queue.dequeue()
queue.print()