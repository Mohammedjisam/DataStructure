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
    isEmpty(){
        return this.items.length==0
    }
    unique(){
        let unique1=[]
        for(let item of this.items){
            if(!unique1.includes(item)){
                unique1.push(item)
            }
        }
        console.log(unique1)
    }
    // printUnique() {
    //     const countMap = {};
    //     for (let num of this.items) {
    //         countMap[num] = (countMap[num] || 0) + 1;
    //     }
    //     for (let num in countMap) {
    //         if (countMap[num] === 1) {
    //             console.log(num);
    //         }
    //     }
    // }
    printUnique(){
        const count={}
        for(let num of this.items){
            count[num]=(count[num]||0)+1;
        }
        for(let num in count){
            if(count[num]===1){
                console.log(num)
            }
        }
    }
}
const stack=new Stack()
stack.push(10)
stack.push(12)
stack.push(16)
stack.push(13)
stack.push(12)

stack.unique()
stack.printUnique()