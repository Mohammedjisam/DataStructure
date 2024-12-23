function quickSort(array){
    if(array.length<=1) return array;
    const pivot=array[0]
    const left=[]
    const right=[]
    for(let i=1;i<array.length;i++){
        if(pivot<array[i]){
            right.push(array[i])
        }else{
            left.push(array[i])
        }
    }return[...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([5,1,2,9,8,7,4,5,6]))

function quickSort(string){
    if(string.length<=1) return string
    const str=[...string]
    const pivot=str[0];
    let left=[]
    let right=[]
    for(let i=1;i<str.length;i++){
        if(pivot<str[i]){
            right.push(str[i])
        }else{
            left.push(str[i])
        }
    }
    return quickSort(left.join('')) + pivot + quickSort(right.join(''));
}

console.log(quickSort("mohammed jisam"))