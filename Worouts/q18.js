class Graph{
    constructor(){
        this.adjacencyList={};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set();
        }
    }
    addEdge(v1,v2){
        if(!this.adjacencyList[v1]){
            this.addVertex(v1)
        }
        if(!this.adjacencyList[v2]){
            this.addVertex(v2)
        }
        this.adjacencyList[v1].add(v2)
        this.adjacencyList[v2].add(v1)
    }
   
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+"->",[...this.adjacencyList[vertex]])
        }
    }
    
    dfs(start){
        const visited=new Set();
        const result=[]
        const dfsHelper=(vertex)=>{
            if(!vertex||visited.has(vertex)) return 
            visited.add(vertex)
            result.push(vertex)

            for(const neighbor of this.adjacencyList[vertex]){
                dfsHelper(neighbor)
            }
        }
        dfsHelper(start)
        return result
    }
    
}


const graph=new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","C")
graph.addEdge("C","D")
graph.addEdge("D","E")

graph.display()

console.log(graph.dfs("A"))