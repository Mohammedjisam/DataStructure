class Queue{
    constructor(){
        this.items=[]
    }
    enque(data){
         this.items.push(data)
    }
    deque(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return null;
        }
        return this.items.shift();
    }
    size(){
        return this.items.length;
    }
    peek(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return null;
        }
        return this.items[0];
    }
    isEmpty(){
        return this.items.length===0;
    }
    print(){
        if(this.isEmpty()){
            console.log("Queue si empty");
        }else{
            console.log(this.items.join("->"))
        }
    }
}

const queue=new Queue();

queue.enque(10);
queue.enque(20);
queue.enque(32);
queue.enque(24);
queue.enque(63);
queue.enque(78);
console.log(queue.size())
queue.print()
queue.deque()
queue.print()
console.log(queue.peek())
console.log(queue.size())