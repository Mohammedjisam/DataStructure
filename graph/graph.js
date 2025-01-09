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
    hasEdge(v1,v2){
        return(this.adjacencyList[v1].has(v2)&&this.adjacencyList[v2].has(v1))
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+"->",[...this.adjacencyList[vertex]])
        }
    }
    removeVertex(v){
        if(!this.adjacencyList[v]){
            return
        }
        for(let adjacent of this.adjacencyList[v]){
            this.removeEdge(v,adjacent)
        }
        delete this.adjacencyList[v]
    }
    removeEdge(v1,v2){
        this.adjacencyList[v1].delete(v2)
        this.adjacencyList[v2].delete(v1)
    }
    bfs(start){
        const queue=[start]
        const visited= new Set()
        const result=[]

        visited.add(start);

        while(queue.length){
            const vertex=queue.shift()
            result.push(vertex);

            for(const neighbor of this.adjacencyList[vertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
        return result
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
    shortestPathBFS(start, end) {
        const queue = [[start]]; // Queue holds paths, starting with the start vertex
        const visited = new Set(); // Track visited vertices

        visited.add(start);

        while (queue.length > 0) {
            const path = queue.shift(); // Dequeue a path
            const current = path[path.length - 1]; // Get the last vertex in the path

            // If the current vertex is the destination, return the path
            if (current === end) {
                return path;
            }

            // Explore neighbors
            for (let neighbor of this.adjacencyList[current]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor); // Mark neighbor as visited
                    queue.push([...path, neighbor]); // Enqueue the new path
                }
            }
        }

        return null; // If no path found
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

console.log(graph.hasEdge("A","R"))
graph.display()


console.log(graph.bfs("A"))
console.log(graph.dfs("A"))

const path = graph.shortestPathBFS("A", "E");
console.log("Shortest Path:", path); // Output: Shortest Path: [ 'A', 'B', 'D', 'E' ]
