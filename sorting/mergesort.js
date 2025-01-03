1// function mergesort(array){
//     if(array.length<=1) return array
//     const mid = Math.floor(array.length/2);
//     let left=mergesort(array.slice(0,mid))
//     let right=mergesort(array.slice(mid))

//     return merge(left,right)
// }

// function merge(left,right){
//     let newarray=[];
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             newarray.push(left.shift())
//         }else{
//             newarray.push(right.shift())
//         }
//     }
//     return [...newarray,...left,...right]
// }

// console.log(mergesort([1,2,43,5346,6775,245,436,7468]))


// function mergesort(array){
//     if(array.length<=1) return array;
//     let mid=Math.floor(array.length/2)
//     let left=mergesort(array.slice(0,mid))
//     let right=mergesort(array.slice(mid))
//      return merge(left,right)
// }

// function merge(left,right){
//     let newarray=[]
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             newarray.push(left.shift())
//         }else{
//             newarray.push(right.shift())
//         }
//     }
//     return[...newarray,...left,...right]
// }

// function sortString(str){
//     let charArray=str.split("")
//     let sortArray=mergesort(charArray)
//     return sortArray.join("")
// }

// console.log(sortString("mohammedjisam"))

function mergesort(array){
    if(array.length<=1){
        return array
    }
    const mid=Math.floor(array.length/2);
    let left=mergesort(array.slice(0,mid))
    let right=mergesort(array.slice(mid))
    return merge(left,right)
}
function merge(left,right){
    let newArray=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            newArray.push(left.shift())
        }else{
            newArray.push(right.shift())
        }
    }return[...newArray,...left,...right]
}
 
function sortString(str){
    let charArray=str.split("")
    let sortArray=mergesort(charArray)
    return sortArray.join("")
}

const str="jisam"
console.log(sortString(str))