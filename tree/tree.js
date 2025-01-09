class TreeNode{
    constructor(value){
        this.value=value;
        this.children=[];
    }
}
class Tree{
    constructor(value){
        this.root=new TreeNode(value)
    }
    addNode(parentValue,value){
        const parent=this.search(parentValue,this.root)
        if(parent){
            parent.children.push(new TreeNode(value))
        }
    }
    search(value,node=this.root){
        if(node.value===value){
            return node
        }
        for(let child of node.children){
            const result=this.search(value,child)
            if(result){
                return result
            }
        }
        return null
    }
    dfs(node = this.root) {
        console.log(node.value);
        for (let child of node.children) {
            this.dfs(child);
        }
    }
    bfs(){
        const queue=[this.root];
        while(queue.length>0){
            const node=queue.shift()
            console.log(node.value)
            for(let child of node.children){
                queue.push(child)
            }
        }
    }
    isBST(node=this.root,min=null,max=null){
        if(!node){
            return true;
        }
        if((min!==null&&node.value<=value)||(max!==null&&node.value>=max)){
            return false;
        }
        for(let child of node.children){
            if(!this.isBST(child,min,node.value)||!this.isBST(child,node.value,max)){
                return false
            }
        }
        return true;
    }    
}

const myTree=new Tree(1)
myTree.addNode(1,2)
myTree.addNode(1,3)
myTree.addNode(1,4)
myTree.addNode(2,5)
myTree.addNode(3,20)
myTree.addNode(1,10)
myTree.dfs()
myTree.bfs()
console.log(myTree.isBST())

