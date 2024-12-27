// class Stack{
//     constructor(){
//         this.stack=[]
//     }
//     push(data){
//         this.stack.push(data)
//     }
//     size(){
//         return this.stack.length;
//     }
//     pop(){
//         if(!this.size()){
//             console.log("stack is empty ,so cant pop any elemets")
//         }else{
//             this.stack.pop();
//         }
//     }
//     peek(){
//         if(!this.size()){
//             console.log("cant peek ,stack is empty");
//         }else{
//             console.log(this.stack[this.size()-1]);
//         }
//     }
//     print(){
//         if(!this.size()){
//             console.log("stack is empty cant print")
//         }else{
//             console.log(this.stack.join(","))
//         }
//     }
// }

// const stack=new Stack()
// stack.push(10)
// stack.push(13)
// stack.push(16)
// stack.push(19)
// stack.push(22)
// console.log("size of the stack:",stack.size())
// stack.print()
// stack.pop()
// stack.peek()
// stack.print()


// const reversewords=function(s){
//     const splitS=s.split(" ");
//     const stack=[]
//     for(let i of splitS){
//         stack.push(i)
//     }
//     let finalS="";
//     while(stack.length){
//         const current=stack.pop();

//         if(current){
//             finalS+=" "+current;
//         }
//     }
//     return finalS.trim();

// }

// s="mohammed jisam"
// console.log(reversewords(s))




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
            console.log("stacck is empty")
        }else{
            return this.stack.pop()
        }
    }
    peek(){
        if(!this.size()){
            console.log("stack is empty")
        }else{
            console.log(this.stack[this.size()-1])
        }
    }
    print(){
        if(!this.size()){
            console.log("stack is empty")
        }else{
            console.log(this.stack)
        }
    }
}

const stacks=new Stack()
stacks.push(5)
stacks.push(6)
stacks.push(7)
stacks.push(4)
stacks.push(2)
stacks.print()

//remove middle

// function removeMiddle(arr){
//     const stack=new Stack()
//     for(let i=0;i<arr.length;i++){
//         stack.push(arr[i])
//     }
//     const newStack=[]
//     const midIndex=Math.floor(stack.size()/2)
//     for(let i=stack.size()-1;i>=0;i--){
//        const elemet=stack.pop()
//        if(i!==midIndex){
//         newStack.push(elemet)
//        }
//     }
//     while(newStack.length>0){
//         stack.push(newStack.pop())
//     }
//     stack.print()
// }

// const arr=[1,2,3,4,5,6,7,1]
// removeMiddle(arr)









//reverse stack Number
//  function reverseSTackNumber(arr){
//     const tempStack=new Stack()
//     while(arr.length>0){
//         tempStack.push(arr.pop())
//     }return tempStack;
//  }

//  const arr=[1,2,3,4,5]
//  console.log(reverseSTackNumber(arr))




//reverse string
// function reverseString(str){
//     const splitStr=str.split(" ");
//     const stacck=[]
//     for(let i of splitStr){
//         stacck.push(i)
//     }

//     let finalStr=""
//     while(stacck.length){
//         const current=stacck.pop()
//         if(current){
//             finalStr=finalStr+" "+current
//         }
//     }
//     console.log(finalStr.trim())
// }

// const str="jisam mohammed"
// reverseString(str)





//largest element
// function largest(arr){
//     const stack=new Stack()
//     for(let num in arr){
//         stack.push(num)
//     }
//     stack.print();
//     let largest=-Infinity;
//     for(let i in arr){
//         if(arr[i]>largest){
//             largest=arr[i]
//         }
//     }console.log(largest)
// }
// const arr=[1,2,3,7,8,5,9,20,6]
// largest(arr)




//sort

// function sort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 let temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }return arr
// }

// const arr=[5,3,7,5,4,2]
// console.log(sort(arr))



//unique

// function unique(arr){
//     let unique1=[]
//     for(let i of arr){
//         if(!unique1.includes(i)){
//             unique1.push(i)
//         }
//     }return unique1
// }
// const arr=[1,3,6,2,4,5,8,7,1,2,3,4,5,6,7]
// console.log(unique(arr))



//remove duplicates

// function removeDuplicates(arr){
//     const count={}
//     for(let num of arr){
//         count[num]=(count[num]||0)+1
//     }
//     for(let num in count){
//         if(count[num]===1){
//             console.log(num)
//         }
//     }
// }
// const arr=[5,3,2,4,2,1,3,4,2,4,2]
// removeDuplicates(arr)



//valid parenthesis

// function validParenthesis(str){
//     let stack=[]
//     for(let i=0;i<str.length;i++){
//         const char=str[[i]]
//         if(char==="("||char==="{"||char==="["){
//             stack.push(char)
//         }else if(char==="}"||char==="]"||char===")"){
//             if(stack.length===0){
//                 return false
//             }
//             const top=stack.pop()
//             if((char==="}"&&top!=="{")||(char===")"&&top!=="(")||(char==="]"&&top!=="[")){
//                 return false
//             }
//         }
//     }return stack.length===0
// }

// const str="{{}{}{}}"
// console.log(validParenthesis(str))




//palindrome

// function palindrome(str){
//     const stack=[]
//     for(let char of str){
//         stack.push(char)
//     }
//     for(let char of str){
//         if(char !== stack.pop()){
//             return false
//         }
//     }return true
// }
// console.log(palindrome("jism"))
// console.log(palindrome("malayalam"))

