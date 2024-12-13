let array=[1,2,3,4,5,6,7]
let target=5
let index

for(let i=0;i<array.length;i++){
    if(array[i]===target){
        index=i
    }
}

console.log(index)