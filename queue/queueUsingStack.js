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
            console.log("queue is empty ")
            return;
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
            return;
        }
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack2.pop)
            }
        }
        return this.stack2[this.stack2.length-1]
    }
    isEmpty(){
        return this.stack1.length===0&&this.stack2.length===0
    }
    print(){
        const stack2Reversed=[...this.stack2].reverse();
        console.log([...stack2Reversed,...this.stack1].join("=>"));
    }
}

const queue=new QueueUsingStack();
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)
queue.enqueue(9)
queue.print()
queue.dequeue()
console.log("peek",queue.peek())
queue.print()
