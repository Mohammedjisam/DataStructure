// class QueueUsingStack{
//     constructor(){
//         this.stack1=[]
//         this.stack2=[]
//     }
//     enqueue(data){
//         this.stack1.push(data)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             console.log("queue is empty ")
//             return;
//         }
//         if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.pop()
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return;
//         }
//         if(this.stack2.length===0){
//             while(this.stack1.length>0){
//                 this.stack2.push(this.stack2.pop)
//             }
//         }
//         return this.stack2[this.stack2.length-1]
//     }
//     isEmpty(){
//         return this.stack1.length===0&&this.stack2.length===0
//     }
//     print(){
//         const stack2Reversed=[...this.stack2].reverse();
//         console.log([...stack2Reversed,...this.stack1].join("=>"));
//     }
// }

// const queue=new QueueUsingStack();
// queue.enqueue(5)
// queue.enqueue(6)
// queue.enqueue(7)
// queue.enqueue(8)
// queue.enqueue(9)
// queue.print()
// queue.dequeue()
// console.log("peek",queue.peek())
// queue.print()


// class StackUsingQueue{
//       constructor(){
//         this.q1=[]
//         this.q2=[]
//       }
//       push(x){
//         while(this.q1.length!==0){
//             this.q2.push(this.q1.shift())
//         }
//         this.q1.push(x)
//         while(this.q2.length!==0){
//             this.q1.push(this.q2.shift())
//         }
//       }
//       pop(){
//         if(this.isEmpty()){
//             console.log("stack is empty")
//             return undefined
//         }
//         return this.q1.shift()
//       }
//       top(){
//         if(this.isEmpty()){
//             console.log("stack is empty")
//             return undefined
//         }
//         return this.q1[0]
//       }
//       isEmpty(){
//         return this.q1.length===0
//       }
//       print(){
//         if(this.isEmpty()){
//             console.log("stack is empty")
//         }else{
//             console.log(this.q1.join("<-"))
//         }
//       }
// }

// const stack = new StackUsingQueue()
// stack.push(4)
// stack.push(5)
// stack.push(3)
// stack.push(2)
// stack.push(8)
// stack.push(9)
// stack.print()
// stack.pop()
// stack.print()
// console.log(stack.pop())

class QueueUsingStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(data){
        this.stack1.push(data)
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return 
        }
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    peek(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return 
        }
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }
    isEmpty(){
       return this.stack1.length===0 && this.stack2.length===0
    }
    print(){
        const stack2Reversed=[...this.stack2.reverse()]
        console.log([...stack2Reversed,...this.stack1].join("->"))
    }
}

const queue = new QueueUsingStack()
queue.enqueue(10)
queue.enqueue(14)
queue.enqueue(13)
queue.enqueue(12)
queue.enqueue(19)
queue.print()
queue.dequeue()
queue.print()