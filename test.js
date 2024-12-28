//bubble sort

// function bubbleSort(arr){
//     let n=arr.length
//     let swap=0
//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//                 swap++
//             }
//         }
//     }
//     console.log(swap)
//     return arr
// }

// const arr=[3,2,1,4,5,3,2]
// console.log(bubbleSort(arr))

// function bubbleSort(str){
//     let arr=str.split("")
//     let n=arr.length
//     let swap=0
//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//                 swap++
//             }
//         }
//     }
//     console.log(swap)
//     return arr.join("")
// }

// const str="jisam mohammed"
// console.log(bubbleSort(str))





//selction sort
// function selectionSort(arr){
//     let n = arr.length
//     for(let i=0;i<n-1;i++){
//         let minIndex=i
//         for(let j=i+1;j<n;j++){
//              if(arr[j]<arr[minIndex]){
//                 minIndex=j
//              }
//         }
//         if(minIndex!==i){
//             [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
//         }
//     }return arr
// }
// const arr=[2,4,6,7,8,4,3]
// console.log(selectionSort(arr))

// function selectionSort(str){
//     const arr=str.split("")
//     let n = arr.length
//     for(let i=0;i<n-1;i++){
//         let minIndex=i
//         for(let j=i+1;j<n;j++){
//              if(arr[j]<arr[minIndex]){
//                 minIndex=j
//              }
//         }
//         if(minIndex!==i){
//             [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
//         }
//     }return arr.join("")
// }
// const str="mohammed jisam"
// console.log(selectionSort(str))




//insertion sort
// function insertion(arr){
//     const n=arr.length
//     for(let i=0;i<n;i++){
//         let key=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>key){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=key;
//     }
//     return arr
// }

// const arr=[4,3,5,6,44,2,5]
// console.log(insertion(arr))


// function insertion(str){
//     const arr=str.split("")
//     const n=arr.length
//     for(let i=0;i<n;i++){
//         let key=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>key){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=key;
//     }
//     return arr.join("")
// }

// const str="mohammed jisam"
// console.log(insertion(str))


//quick sort
// function quickSort(arr){
//     if(arr.length<=1){
//         return arr;
//     }
//     const pivot=arr[0]
//     const left=[]
//     const right=[]
//     for(let i=1;i<arr.length; i++){
//         if(pivot<arr[i]){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }return[...quickSort(left),pivot,...quickSort(right)]
// }

// const arr=[1,3,5,3,2,5,7,4,8,6]
// console.log(quickSort(arr))

// function quickSort(str){
//     const arr=[...str]
//     if(arr.length<=1){
//         return arr;
//     }
//     const pivot=arr[0]
//     const left=[]
//     const right=[]
//     for(let i=1;i<arr.length; i++){
//         if(pivot<arr[i]){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }return quickSort(left.join(""))+pivot+quickSort(right.join(""))
// }

// const str="mohammed jisam"
// console.log(quickSort(str))




//merge sort

// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr;
//     }
//     const mid=Math.floor(arr.length/2);
//     let left=mergeSort(arr.slice(0,mid))
//     let right=mergeSort(arr.slice(mid))
//     return merge(left,right)
// }

// function merge(left,right){
//       let newArray=[]
//       while(left.length&&right.length){
//         if(left[0]<right[0]){
//             newArray.push(left.shift())
//         }else{
//             newArray.push(right.shift())
//         }
//       }
//       return [...newArray,...left,...right]
// }

// const arr=[1,2,6,4,3,2,5,2]
// console.log(mergeSort(arr))



function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    const mid=Math.floor(arr.length/2);
    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))
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
      }
      return [...newArray,...left,...right]
}

function sortString(str){
     let charArray=str.split("")
     let sortarray=mergeSort(charArray)
    return sortarray.join("")
}
const str="mohammed jisam"
console.log(sortString(str))


