let array = [1,2,3,4,5,6,7,8,9]
let pos=4

for(let i=pos;i<array.length;i++){
    array[i]=array[i+1]
}
array.length--;

console.log(array)