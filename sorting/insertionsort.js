// function insertionSort(array) {
//   const n = array.length;
//   for (let i = 1; i < n; i++) {
//     let key = array[i];
//     let j = i - 1;
//     while (j >= 0 && array[j] > key) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = key;
//   }
//   return array;
// }
// console.log(insertionSort([1, 9, 2, 8, 3, 7, 4, 6, 5, 0]));


// function insertion(array) {
//   const n = array.length;
//   for (let i = 1; i < n; i++) {
//     let key = array[i];
//     let j = i - 1;
//     while (j >= 0 && array[j] > key) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = key;
//   }
//   return array
// }
// let array=[1,2,5,9,7,6,5,2]
// console.log(insertion(array))

// function insertionStr(str){
//     const n=str.length;
//     const string=str.split("")
//     for(let i=1;i<n;i++){
//          let key=string[i]
//          let j=i-1
//          while(j>=0&&key<string[j]){
//             string[j+1]=string[j]
//             j--
//          }
//          string[j+1]=key
//     }
//     return string.join("")
// }

// console.log(insertionStr("ctfvsagdcbhunjimckd"))

function insertionSort(array){
  const n=array.length
  for(let i=0;i<n;i++){
    let key=array[i]
    let j=i-1;
    while(j>=0&&array[j]>key){
      array[j+1]=array[j]
      j--;
    }array[j+1]=key;
  }
  return array
}
const array=[1,2,4,7,5,4,2]
console.log(insertionSort(array));



