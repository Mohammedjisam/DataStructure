class Node{
    constructor(data) {
        this.data=data
        this.next=null
    }
}
class Queue{
    constructor() {
        this.head=null
        this.rear=null
        this.size=0
    }
    enqueue(data){
        const newNode=new Node(data)
        if(this.head===null){
            this.head=newNode
            this.rear=newNode
            this.size++
            return 
        }
        this.rear.next=newNode
        this.rear=newNode
        this.size++;
    }
    dequeue(){
        if(this.head==null){
            console.log("queue is empty")
            return
        }
        const dequedata=this.head.data
        this.head=this.head.next
        if(this.head==null){
            this.rear=null
        }
        this.size--
        return dequedata
    }
    peek(){
        return this.head.data
    }
    print(){
        let current=this.head
        let arr=[]
        while(current){
            arr.push(current.data)
            current=current.next
        }
        console.log(arr.join('=>'))
    }
}

const queue=new Queue()

queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(5)
queue.enqueue(8)
queue.enqueue(9)
queue.print()
queue.dequeue()
queue.print()
