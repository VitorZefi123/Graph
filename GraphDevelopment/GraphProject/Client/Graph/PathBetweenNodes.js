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
        this.highlightLinks(paths);
        
    }

    bfsSegments(nodeRelations, startNode, targetNode) {
        let queue = [[startNode]];  
        let visited = new Set();
        
        while (queue.length > 0) {
            let path = queue.shift(); 
            let lastNode = path[path.length - 1];

            if (lastNode === targetNode) {
                let segments = [];
                for (let i = 0; i < path.length - 1; i++) {
                    segments.push([path[i], path[i + 1]]);
                }
                return segments; 
            }

            if (!visited.has(lastNode)) {
                visited.add(lastNode);

                for (let neighbor of nodeRelations[lastNode] || []) {
                    if (!visited.has(neighbor)) {
                        queue.push([...path, neighbor]); 
                    }
                }
            }
        }
        
        return [];
    }

    

highlightLinks(paths) {
    const graphInstance = this.graph.getGraphInstance();

    graphInstance.linkColor(link => {
        return paths.some(([source, target]) => 
            (link.source.id === source && link.target.id === target) || 
            (link.source.id === target && link.target.id === source)
        ) ? "red" : "gray";
    });

    const nodesToHighlight = new Set();
    paths.forEach(([source, target], index) => {
        nodesToHighlight.add(source);
        nodesToHighlight.add(target);

        if (index === 0) {
            nodesToHighlight.add(source); 
        }
        if (index === paths.length - 1) {
            nodesToHighlight.add(target); 
        }
    });

    graphInstance.nodeColor(node => {
        if (nodesToHighlight.has(node.id)) {
            return node.id === paths[0][0] || node.id === paths[paths.length - 1][1] ? "red" : "yellow";
        }
        return "lightgray";
    });
}

}

export default PathBetweenNodes;