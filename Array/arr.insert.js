let array=[1,2,3,4,5,6]
let elemet=20
let pos=3

for(let i=array.length-1;i>=0;i--){
    if(i>=pos){
        array[i+1]=array[i]
        if(i===pos){
            array[i]=elemet
        }
    }
}
console.log(array)