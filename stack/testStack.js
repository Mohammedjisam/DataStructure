// class Node{
//     constructor(data) {
//         this.data=data
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//         this.head=null
//         this.count=0
//     }
//     push(data){
//         const newNode=new Node(data)
//         newNode.next=this.head
//         this.head=newNode
//         this.count++
//     }
//     pop(){
//         if(!this.head){
//             consolr.log("stack is empty")
//             return
//         }
//         const poppedData=this.head.data
//         this.head=this.head.next;
//         this.count--;
//         return poppedData
//     }
//     print(){
//         let current=this.head
//         let arr=[]
//         while(current){
//             arr.push(current.data)
//             current=current.next
//         }
//         console.log(arr.join("<="))
//     }
// }





class Stack{
    constructor(){
        this.stack=[]
    }
    push(data){
        return this.stack.push(data)
    }
    size(){
        return this.stack.length
    }
    pop(){
        if(!this.size()){
            console.log("stack is empty,no items to popped")
        }else{
            return this.stack.pop()
        }
    }
    peek(){
        if(!this.size()){
            console.log("stack is empty,no items to popped")
        }else{
            console.log(this.stack[this.size()-1])
        }
    }
    print(){
        if(!this.size()){
            console.log("stack is empty,no items to popped")
        }else{
            console.log(this.stack)
        }
    }
    
   printUniqeue(){
    let unique=[]
    for(let item of this.stack){
        if(!unique.includes(item)){
            unique.push(item)
        }
    }
    console.log(unique)
     }
    
     removeDuplicates(){
      const count={}
      for(let num of this.stack){
        count[num]=(count[num]||0)+1;
      }
      for(let num in count){
        if(count[num]===1){
            console.log(num)
        }
      }
    }

}


// function Valid(str){
//     let stack=[]
//     for(let i=0;i<str.length;i++){
//         const char=str[i]
//         if(char==="("||char==="["||char==="{"){
//             stack.push(char)
//         }else if(char===")"||char==="}"||char==="}"){
//             if(stack.length===0){
//                 return false
//             }
//             const top = stack.pop()
//             if((char==="}"&&top!=="{")||
//             (char===")"&&top!=="(")||
//             (char==="]"&&top!=="[")){
//                 return false
//             }
//         }
//     }return stack.length===0
// }

// console.log(Valid("{{[]}}"))



// const stack=new Stack()
// stack.push(1);
// stack.push(2);
// stack.push(2);
// stack.push(4);
// stack.push(56);
// stack.print()
// stack.printUniqeue()
// stack.removeDuplicates()






// sort() {
//     for (let i = 0; i < this.size(); i++) {
//         for (let j = i + 1; j < this.size(); j++) {
//             if (this.stack[i] > this.stack[j]) {
//                 // Swap the elements if they are in the wrong order
//                 let temp = this.stack[i];
//                 this.stack[i] = this.stack[j];
//                 this.stack[j] = temp;
//             }
//         }
//     }
//     return this.stack;
// }

// function largest(arr){
//     const stack=new Stack()
//     for(let num of arr){
//         stack.push(num)
//     }
//     stack.print()
//     let largest=-Infinity
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>largest){
//             largest=arr[i]
//         }
//     }
//     console.log("largest",largest)
// }

// const arr=[4,5,3,6,1,9]
// largest(arr)

// function reverseStringStack(s){
//     const splitS=s.split(" ")
//     const stack=[]
//     for(let i of splitS){
//         stack.push(i)
//     }
//     let finalS="";
//     while(stack.length){
//         const current=stack.pop()
//         if(current){
//             finalS+=" "+current;
//         }
//     }
//     return finalS.trim()
    
// }

// const s="mohammed jisam"
// console.log(reverseStringStack(s))




// function reverseStack(stack){
//     const tempstack= new Stack()
//         while (stack.size()>0) {
//             tempstack.push(stack.pop())
//         }
       
//      return tempstack
// }


// const stack=new Stack()
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(56);

// const reversedStack= reverseStack(stack)
// console.log(reversedStack)



// function removeMiddle(arr){
//     const stack=new Stack()
//         for(let i=0;i<arr.length;i++){
//             stack.push(arr[i])
//         }
//         const newStack=[]
//         const minindex=Math.floor(stack.size()/2);
         
//         for(let i=stack.size()-1;i>=0;i--){
//             const element=stack.pop()
//             if(i !== minindex){
//                 newStack.push(element)
//             }
//         }
//         while(newStack.length>0){
//             stack.push(newStack.pop())
//         }
//         stack.print()

// }

// const arr=[2,3,4,5,6,7,8]
// removeMiddle(arr)
