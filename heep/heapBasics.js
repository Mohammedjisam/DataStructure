class Heap{
    constructor(type="min"){
        this.heap=[];
        this.type=type;
    }

    compare(parent,child){
        if(this.type==="min"){
            return this.heap[parent]>this.heap[child];
        }else{
            return this.heap[parent]<this.heap[child]
        }
    }

    parentIndex(index){
        return Math.floor((index-1)/2)
    }
    leftChildIndex(index){
        return 2*index+1
    }
    rightChildIndex(index){
        return 2*index+2
    }

    peek(){
        if(this.heap.length===0) throw new Error("Heap is empty")
            return this.heap[0];
    }

    insert(value){
        this.heap.push(value)
        this.bubbleUp(this.heap.length-1)
    }
    bubbleUp(index){
        while(index>0){
            const parent=this.parentIndex(index)
            if(this.compare(parent,index)){
                this.swap(parent,index);
                index=parent
            }else{
                break;
            }
        }
    }
    extract(){
        if(this.heap.length===0) throw new Error("heap is empty")
            const root=this.heap[0];
            const last= this.heap.pop()

            if(this.heap.length>0){
                this.heap[0]=last;
                this.bubbleDown(0)
            }
            return root;
    }

    bubbleDown(index){
        const size=this.heap.length
        while(this.leftChildIndex(index)<size){
            let smallerOrLargerChild=this.leftChildIndex(index)
            const right=this.rightChildIndex(index)

         if(right<size&&this.compare(smallerOrLargerChild,right)){
            smallerOrLargerChild=right
         }
         if(this.compare(index,smallerOrLargerChild)){
            this.swap(index,smallerOrLargerChild)
            index=smallerOrLargerChild
         }else{
            break;
         }
        }
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }

    heapify(array){
        this.heap=array;
        for(let i=this.parentIndex(this.heap.length-1);i>=0;i--){
            this.bubbleDown(i)
        }
    }
    update(index,newValue){
        this.heap[index]=newValue;
        if(this.compare(this.parentIndex(index),index)){
            this.bubbleUp(index);
        }else if(this.leftChildIndex(index)<this.heap.length&& this.compare(index,this.leftChildIndex(index))){
            this.bubbleDown(index)
        }
    }
    heapSort(){
        const sortedArray=[]
        const originalHeap=[...this.heap];
        while(this.heap.length>0){
            sortedArray.push(this.extract())
        }
        this.heap=originalHeap;
        return sortedArray;
    }
}


const minHeap=new Heap("min")

minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(1);
console.log("Min-Heap after inserts:", minHeap.heap);

console.log("Peek Min-Heap:", minHeap.peek());

console.log("Extract Min-Heap:", minHeap.extract()); 
console.log("Min-Heap after extract:", minHeap.heap);

minHeap.heapify([3, 9, 2, 1, 4, 5]);
console.log("Min-Heap after heapify:", minHeap.heap);

minHeap.update(2, 0);
console.log("Min-Heap after update:", minHeap.heap); 

console.log("Heap Sort:", minHeap.heapSort());

console.log("--------------------------------")


const maxHeap = new Heap("max");

// Test insert method
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(1);
console.log("Max-Heap after inserts:", maxHeap.heap); // [20, 10, 5, 1]

// Test peek method
console.log("Peek Max-Heap:", maxHeap.peek()); // 20

// Test extract method
console.log("Extract Max-Heap:", maxHeap.extract()); // 20
console.log("Max-Heap after extract:", maxHeap.heap); // [10, 1, 5]

// Test heapify method
maxHeap.heapify([3, 9, 2, 1, 4, 5]);
console.log("Max-Heap after heapify:", maxHeap.heap); // [9, 4, 5, 1, 3, 2]

// Test update method
maxHeap.update(2, 10);
console.log("Max-Heap after update:", maxHeap.heap); // [10, 4, 9, 1, 3, 2]

// Test heapSort method
console.log("Heap Sort:", maxHeap.heapSort()); 