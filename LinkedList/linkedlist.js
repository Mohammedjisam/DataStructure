class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class LinkedList{
    constructor(){
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

    addMiddle(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }

        let slow=this.head;
        let fast=this.head;
        let prev=null;

        while(fast != null &&  fast.next != null){
            prev=slow
            slow=slow.next
            fast=fast.next.next;
        }
        if(prev===null){
            newNode.next=this.head;
            this.head=newNode;
        }else{
            prev.next=newNode;
            newNode.next=slow;
        }
    }

    size(){
        let current=this.head;
        let count=0;
        while(current){
            count++
            current=current.next
        }
        return count;
    }


    addAt(index,data){
        if(index<0||index>this.size()){
            return console.log("invalid index");
        }
        const newNode= new Node(data);
            if(index==0){
                newNode.next=this.head;
                this.head=newNode;
            }

            let current=this.head;

            for(let i=0;i<index-1;i++){
                current=current.next;
            }
            newNode.next=current.next;
            current.next=newNode;
    }
    removeAt(index){
        if(index<0||index>this.size()){
            return console.log("invalid index")
        }
        if(index===0){
            this.head=this.head.next
            return
        }

        let current=this.head;
        let prev=null;

        for(let i=0;i<index;i++){
            prev=current
            current=current.next;
        }
        prev.next=current.next;
    }

    atMiddle(){
        if(!this.head){
            return console.log("the liked lsit is empty")
        }
        let slow=this.head;
        let fast=this.head;

        while(fast !=null && fast.next!=null){
            slow=slow.next
            fast=fast.next.next;
        }
        console.log("middle value",slow.data)
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
    removeMiddle(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head=null
            return
        }

        let slow=this.head
        let fast=this.head
        let prev=null;

        while(fast!=null && fast.next!=null){
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        if(prev!=null){
            prev.next=slow.next
        }
    }

    removeDuplicate(){
        if(!this.head){
            return console.log("linked list is empty")
        }

        let current=this.head
        while(current !=null && current.next!=null){
           if(current.data===current.next.data){
            current.next=current.next.next;
           }else{
            current=current.next
           }
        }
    }


   reverse(){
    if(!this.head||!this.head.next){
        return;
    }
    let prev = null;
    let current = this.head
    let next = null
     
    while(current){
        next=current.next
        current.next=prev
        prev=current
        current=next
    }
    this.head=prev
   }

   toArray(){
    const arr=[]
    let current=this.head;
    while(current){
        arr.push(current.data)
        current=current.next;
    }
    return arr
   }

   toLinkedList(){
    let arr=[1,2,3,4,5,6];
    for(let i=0;i<arr.length;i++){
        this.addLast(arr[i])
    }
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
linkedList.addFirst(6)
linkedList.addFirst(6)
linkedList.removeLast()
linkedList.removeLast()
linkedList.addLast(10)
linkedList.removeFirst()
linkedList.addAt(2,50)
linkedList.atMiddle()
linkedList.addMiddle(100)
linkedList.removeMiddle()
linkedList.removeAt(2)
linkedList.removeDuplicate()
linkedList.reverse()
console.log("the size of the linked list:",linkedList.size())
console.log(linkedList.toArray())
linkedList.toLinkedList()
linkedList.print()



