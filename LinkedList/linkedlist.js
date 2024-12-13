class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(data){
        this.head=null
    }

    addFirst(data){
        const newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
    }

    addLast(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode
            return; 
        }
        let current=this.head;
        while(current.next){
            current=current.next
        }
        current.next=newNode
    }

    removeFirst(){
        if(!this.head){
            console.log("list is empty")
            return;
        }
        this.head=this.head.next
    }

    removeLast(){
        let current=this.head
        while(current.next.next){
            current=current.next
        }
        current.next=null
    }
    print(){
      let current=this.head
      let arr=[]
      while(current){
        arr.push(current.data)
        current=current.next
      }
      console.log(arr.join("->"),"null")
    }
}

const linkedList= new LinkedList()
linkedList.addFirst(2)
linkedList.addFirst(3)
linkedList.addFirst(4)
linkedList.addFirst(5)
linkedList.addFirst(6)
linkedList.removeLast()
linkedList.removeLast()
linkedList.addLast(10)
linkedList.removeFirst()
linkedList.print()



