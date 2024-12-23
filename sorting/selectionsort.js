function selectionSort(arr){
  let n =arr.length;
  for(let i=0;i<n-1;i++){
    let minindex=i;
    for(let j=i+1;j<n-1;j++){
        if(arr[j]<arr[minindex]){
            minindex=j
        }
    }
    if(minindex!==i){
        [arr[i],arr[minindex]]=[arr[minindex],arr[i]]
    }
  }
  return arr
}
let arr=[45,65,65,67,7687,87,56,45,34]
console.log(selectionSort(arr))


function selctionsort(str){
    let string=str.split("")
    let n=string.length
    for(let i=0;i<n-1;i++){
        let minindex=i
        for(j=i+1;j<n-1;j++){
            if(string[j]<string[minindex]){
                minindex=j
            }
        }
        if(minindex!==i){
            [string[i],string[minindex]]=[string[minindex],string[i]]
        }
    }

return string.join("")
}

let str="jisam"
console.log(selctionsort(str))