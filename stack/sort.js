class Stack{
    constructor() {
        this.items=[]
    }
    push(data){
        this.items.push(data)
    }
    pop(){
        if(!this.items){
            console.log("stack is empty")
            return 
        }
        return this.items.pop()
    }
    size(){
        return this.items.length
    }
    isEmpty(){
        return this.items.length === 0
    }

    sort(){
        for(let i=0;i<this.size();i++){
            for(let j=i+1;j<this.size();j++){
                if(this.items[i]>this.items[j]){
                    let temp=this.items[i]
                    this.items[i]=this.items[j]
                    this.items[j]=temp
                }
            }
        }
        return this.items
    }
}
const stack=new Stack()
stack.push(20)
stack.push(25)
stack.push(12)
stack.push(60)
stack.push(8)


console.log(stack.sort())
