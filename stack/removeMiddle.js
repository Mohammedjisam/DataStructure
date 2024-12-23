class Stack{
    constructor(){
        this.stack=[]
    }
    push(data){
        this.stack.push(data)
    }
    size(){
        return this.stack.length;
    }
    pop(){
        if(!this.size()){
            console.log("stack is empty ,so cant pop any elemets")
        }else{
            return this.stack.pop();
        }
    }
    peek(){
        if(!this.size()){
            console.log("cant peek ,stack is empty");
        }else{
            console.log(this.stack[this.size()-1]);
        }
    }
    print(){
        if(!this.size()){
            console.log("stack is empty cant print")
        }else{
            console.log(this.stack)
        }
    }
}

// function removemiddle(arr) {
//         const stack = new Stack();
//         for (let i = 0; i < arr.length; i++) {
//             stack.push(arr[i]);
//         }
//         const newStack = [];
//         const midIndex = Math.floor(stack.size() / 2);
//         for (let i = stack.size() - 1; i >= 0; i--) {
//             const element = stack.pop();
//             if (i !== midIndex) {
//                 newStack.push(element);
//             }
//         }
//         while (newStack.length > 0) {
//             stack.push(newStack.pop());
//         }
//         stack.print();
//     }
//     let arr = [0, 1, 2, 3, 4, 5];
//     removemiddle(arr);
    
 function removeMiddle(arr){
    const stack=new Stack();
    for(let i=0;i<arr.length;i++){
        stack.push(arr[i])
    }
    const newStack=[]
    const midIndex=Math.floor(stack.size()/2);
    for(let i=stack.size()-1;i>=0;i--){
        const element=stack.pop();
        if(i!==midIndex){
            newStack.push(element)
        }
    }
    while(newStack.length>0){
        stack.push(newStack.pop())
    }
    stack.print()
 }   
 let arr = [0, 1, 2, 3, 4, 5];
 removeMiddle(arr);