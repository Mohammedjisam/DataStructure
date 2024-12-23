class Node{
    constructor(data) {
        this.data=data
        this.next=null
    }
}

class Stack{
    constructor(){
        this.head=null
        this.count=0
    }
    push(data){
        const newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
        this.count++;
    }
    pop(){
        if(!this.head){
            console.log("Stack is empty")
            return 
        }
        const poppedData=this.head.data
        this.head=this.head.next;
        this.count--;
        return poppedData;
    }
    size(){
        return this.count
    }
    isEmpty(){
        return this.count===0
    }
    print(){
        let current=this.head
        let arr=[]
        while(current){
            arr.push(current.data)
            current=current.next
            }
            console.log(arr.join("->")) 
        }
    }

    const stack=new Stack()

    stack.push(20)
    stack.push(23)
    stack.push(29)
    stack.push(20)
    stack.push(28)
    stack.push(25)
    stack.push(17)
    stack.push(90)
    stack.print()
    stack.pop()
    stack.print()