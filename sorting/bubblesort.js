// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   add(data) {
//     const newNode = new Node(data);
//     newNode.next=this.head
//     this.head=newNode
//   }

//   print(){
//     let current=this.head;
//     let arr=[]
//     while(current){
//         arr.push(current.data)
//         current=current.next
//     }
//     console.log(arr.join("->"))
//   }

//   bubbleSort(){
//     let swapCount=0;
//     let swapped;
//     let current;

//     do{
//         swapped=false;
//         current=this.head;

//         while(current&&current.next){
//             if(current.data>current.next.data){
//                 let temp=current.data
//                 current.data=current.next.data;
//                 current.next.data=temp;
//                 swapped=true
//                 swapCount++;
//             }
//             current=current.next
//         }
//     }while(swapped)
//         console.log("total swaps:",swapCount)
// }
// }

// const linkedlist=new LinkedList()
// linkedlist.add(20)
// linkedlist.add(10)
// linkedlist.add(30)
// linkedlist.add(80)
// linkedlist.add(26)
// linkedlist.add(27)
// linkedlist.print()
// linkedlist.bubbleSort()
// linkedlist.print()


// function bubbleSort(arr) {
//   let n = arr.length;
//   let swap = 0;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//         swap++;
//       }
//     }
//   }
//   console.log("total swaps:", swap);
//   return arr;
// }

// let arr = [45, 65, 89, 65, 87, 100];
// console.log("original array:", arr);
// console.log("sorted array:", bubbleSort(arr));


// function bubbleSortStrin(string){
//     let str=string.split("");
//     let n=str.length
//     let swap=0
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n-1-i;j++){
//             if(str[j]>str[j+1]){
//                 [str[j],str[j+1]]=[str[j+1],str[j]]
//                 swap++
//             }
//         }
//     }
//     console.log("swapCount:",swap)
// return str.join("")
// }
// let string="esxdrcfvtgybhnj"
// console.log(string)
// console.log(bubbleSortStrin(string))


// function bubbleSort(array){
//   let arr=array.split("")
//   let n=arr.length;
//   let swap=0;
//   for(let i=0;i<n-1;i++){
//     for(let j=0;j<n-1-i;j++){
//       if(arr[j]>arr[j+1]){
//         [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//         swap++
//       }
//     }
//   }
//   console.log("total swaps:",swap)
//   return arr.join("")
// }

// let array="mohammed jisam"
// console.log(bubbleSort(array))



