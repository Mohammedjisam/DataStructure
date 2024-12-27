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

