// Kth smallesst


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

    KthSmallest(root,k){
        let result=[]
        this.inOrderTraversal(root,result);
        return result[k-1];
    }

    inOrderTraversal(node,result){
        if(!node) return;
        this.inOrderTraversal(node.left,result);
        result.push(node.value);
        this.inOrderTraversal(node.right,result)
    }

 
}

const bst=new BST()
bst.insert(5)
bst.insert(10)
bst.insert(6)
bst.insert(2)
bst.insert(4)
bst.insert(1)


console.log("k th smallest in BST:",bst.KthSmallest(bst.root,3))

