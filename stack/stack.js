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
            this.stack.pop();
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

const stack=new Stack()
stack.push(10)
stack.push(13)
stack.push(16)
stack.push(19)
stack.push(22)
console.log("size of the stack:",stack.size())
stack.print()
stack.pop()
stack.peek()
stack.print()


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

