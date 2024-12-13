const array=[1,2,3,4,5,6,7,8]
const target=6
const index=binarySearch(array,target);

function binarySearch(arr,target){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]==target){
            return mid;
        }
        if(arr[mid]<target){
            left=mid+1
        }else{
            right=mid-1
        }
    }return -1
}

if(index!==-1){
    console.log(`The target ${target} found at index ${index}`)
}else{
    console.log(`the target${target} is not found`)
}