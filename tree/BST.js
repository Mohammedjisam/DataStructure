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
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    delete(value){
        this.root=this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
    maxDepth(node){
        if(!node) return 0
        let l = this.maxDepth(node.left)
        let r = this.maxDepth(node.right)

        return Math.max(l,r)+1
    }
    validateBST(root,min=null,max=null){
        if(!root) return true
        if((min!=null&&root.value<=min)||(max!=null&&root.value>=max)){
            return false
        }
        return this.validateBST(root.left,min,root.value)&& this.validateBST(root.right,root.value,max)
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


console.log("level order-----------")
bst.levelOrder()

console.log("in order------------")
bst.inOrder(bst.root)

console.log("preOrder---------------")
bst.preOrder(bst.root)

console.log("postOrder-------------")
bst.postOrder(bst.root)

console.log("max depth :",bst.maxDepth(bst.root))
console.log(" is validate:",bst.validateBST(bst.root))
console.log("min value:",bst.min(bst.root))
console.log("max value:",bst.max(bst.root))

console.log("k th smallest in BST:",bst.KthSmallest(bst.root,1))
console.log(bst.findClosestValue(bst.root,8))
