// find the element that is closet to a target value

class Node{
    constructor(value){
        this.value=value;
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    findClosestValue(root,target){
        let closest=root.value;
        while(root!==null){
            if(Math.abs(target-closest)>Math.abs(target-root.value)){
                closest=root.value
            }
            if(target<root.value){
                root=root.left
            }else if(target>root.value){
                root=root.right
            }else{
                break;
            }
        }return closest
    }
}

const bst=new BST()
bst.insert(5)
bst.insert(3)
bst.insert(6)
bst.insert(2)
bst.insert(4)
bst.insert(1)

console.log(bst.findClosestValue(bst.root,8))
