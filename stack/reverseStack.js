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
            console.log(this.stack.join(","))
        }
    }
}


const reversewords=function(s){
    const splitS=s.split(" ");
    const stack=[]
    for(let i of splitS){
        stack.push(i)
    }
    let finalS="";
    while(stack.length){
        const current=stack.pop();

        if(current){
            finalS+=" "+current;
        }
    }
    return finalS.trim();

}

s="mohammed jisam"
console.log(reversewords(s))


const reverseStack = function(stack) {
    const tempStack = new Stack();
    while (stack.size() > 0) {
        tempStack.push(stack.pop());
    }
    return tempStack;
};

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Original Stack:");
stack.print();

const reversedStack = reverseStack(stack);

console.log("Reversed Stack:");
reversedStack.print();
