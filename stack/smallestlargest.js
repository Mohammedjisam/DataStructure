class Stack{
    constructor(){
        this.items=[]
    }
    push(data){
        this.items.push(data)
    }
    pop(){
        return this.items.pop()
    }
    sizes(){
        this.items.length
    }
    print(){
        console.log(this.items)
    }
}

function largest(arr){
    const stack=new Stack()
    for(let num of arr){
        stack.push(num)
    }
    stack.print();

    let largest=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }console.log("laregst element:",largest)
}

function smallest(arr){
    const stack=new Stack()
    for(let num of arr){
        stack.push(num)
    }
    stack.print()
    let smallest=Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){

            smallest=arr[i]
        }
    }console.log("smallest elemet:",smallest)
}
 
let arr=[5,6,8,700,4,5,60]
largest(arr)
smallest(arr)