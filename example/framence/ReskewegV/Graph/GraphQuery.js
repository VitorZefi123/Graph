class GraphQuery {
    constructor(containerId) {
        this.containerId = containerId;
    }

    async initializeGraph(parsedConditions) {
        try {
            const graphData = this.buildGraphData(parsedConditions);
           debugger;
        

            this.graph = ForceGraph3D({
                extraRenderers: [new THREE.CSS2DRenderer()]
            })(document.getElementById(this.containerId))
                .graphData(graphData)
                .nodeAutoColorBy('type')
                .nodeLabel(node => node.label)
                .linkColor(() => 'gray');
        } catch (error) {
            console.error('Error initializing graph:', error);
        }
    }

    buildGraphData(conditionTree) {
        let nodes = [];
        let links = [];
        let nodeId = 0;
    
        const createNode = (label, type) => {
            let node = { id: nodeId++, label, type };
            nodes.push(node);
            return node.id;
        };
    
        const traverseTree = (tree, parentId = null) => {
            if (!tree) return;
    
            if (tree.lhs && tree.rhs) {
                // Create logic operator node (e.g., AND)
                let logicOpNodeId = createNode(tree.logicOp, "operator");
    
                // Traverse LHS and RHS and link them
                let lhsNodeId = traverseTree(tree.lhs, logicOpNodeId);
                let rhsNodeId = traverseTree(tree.rhs, logicOpNodeId);
    
                if (lhsNodeId !== null) links.push({ source: logicOpNodeId, target: lhsNodeId });
                if (rhsNodeId !== null) links.push({ source: logicOpNodeId, target: rhsNodeId });
    
                return logicOpNodeId;
            } else if (Array.isArray(tree)) {
                // Create individual condition nodes
                let lastNodeId = null;
                for (let item of tree) {
                    let [key, value] = item.split(": ");
                    let nodeId = createNode(value, key.toLowerCase());
                    
                    if (lastNodeId !== null) {
                        links.push({ source: lastNodeId, target: nodeId });
                    }
                    lastNodeId = nodeId;
                }
                return lastNodeId;
            }
            return null;
        };
    
        traverseTree(conditionTree);
        return { nodes, links };
    }
    
}

export default GraphQuery;
