class PathBetweenNodes {
    constructor(graph) {
        this.graph = graph;
    }


    highlightPath (startNode, targetNode){

        debugger;
        const paths = this.bfsSegments(this.graph.nodeRelations, startNode, targetNode);

        if (paths.length === 0) {
            console.warn("No path found between the given nodes.");
            return;
        }

        // Highlight the links between the found paths
        this.highlightLinks(paths);
        
    }

    bfsSegments(nodeRelations, startNode, targetNode) {
        let queue = [[startNode]];  // Store paths as lists
        let visited = new Set();
        
        while (queue.length > 0) {
            let path = queue.shift();  // Get the first path from the queue
            let lastNode = path[path.length - 1];

            if (lastNode === targetNode) {
                // Extract segment paths from full path
                let segments = [];
                for (let i = 0; i < path.length - 1; i++) {
                    segments.push([path[i], path[i + 1]]);
                }
                return segments;  // Return only edge segments
            }

            if (!visited.has(lastNode)) {
                visited.add(lastNode);

                // Explore neighbors
                for (let neighbor of nodeRelations[lastNode] || []) {
                    if (!visited.has(neighbor)) {
                        queue.push([...path, neighbor]); // Extend path
                    }
                }
            }
        }
        
        return []; // Return empty if no path found
    }

    

highlightLinks(paths) {
    const graphInstance = this.graph.getGraphInstance();

    // Highlight links
    graphInstance.linkColor(link => {
        return paths.some(([source, target]) => 
            (link.source.id === source && link.target.id === target) || 
            (link.source.id === target && link.target.id === source)
        ) ? "red" : "gray";
    });

    // Extract unique node IDs from paths
    const nodesToHighlight = new Set();
    paths.forEach(([source, target], index) => {
        nodesToHighlight.add(source);
        nodesToHighlight.add(target);

        // Check if it's the first or last path, and apply red to the first/last node
        if (index === 0) {
            nodesToHighlight.add(source); // Start node
        }
        if (index === paths.length - 1) {
            nodesToHighlight.add(target); // End node
        }
    });

    // Highlight nodes
    graphInstance.nodeColor(node => {
        if (nodesToHighlight.has(node.id)) {
            return node.id === paths[0][0] || node.id === paths[paths.length - 1][1] ? "red" : "yellow";
        }
        return "lightgray";
    });
}

}


export default PathBetweenNodes;