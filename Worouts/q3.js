//Find the Shortest Path:

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }

    // Find the shortest path using BFS
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

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

const path = graph.shortestPathBFS("A", "E");
console.log("Shortest Path:", path); // Output: Shortest Path: [ 'A', 'B', 'D', 'E' ]
