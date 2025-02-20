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
                .linkColor(() => 'gray')
                .linkWidth(link => link.weight*2 || 1)
                .linkLabel(link => `Weight: ${link.weight}`); // Show weight on hover
        } catch (error) {
            console.error('Error initializing graph:', error);
        }
    }

    buildGraphData(conditionTree) {
        debugger;
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
    
                debugger;
                // Traverse LHS and RHS and link them
                let lhsNodeId = traverseTree(tree.lhs, logicOpNodeId);
                let rhsNodeId = traverseTree(tree.rhs, logicOpNodeId);
    
                if (lhsNodeId !== null) 
                    links.push({ source: logicOpNodeId, target: lhsNodeId, weight: 0.5 }); 

                if (rhsNodeId !== null) 
                    links.push({ source: logicOpNodeId, target: rhsNodeId, weight: 0.5 });

    
                return logicOpNodeId;
            } else if (Array.isArray(tree)) {
                debugger;
                // Create individual condition nodes
                let lastNodeId = null;
                for (let item of tree) {
                    let [key, value] = item.split(": ");
                    let nodeId = createNode(value, key.toLowerCase());
                    
                    let weight = this.handleWeight(key, value);

                    if (lastNodeId !== null) {
                        links.push({ source: lastNodeId, target: nodeId, weight: weight });
                    }
                    lastNodeId = nodeId;
                }
                return lastNodeId;
            }
            return null;
        };
    
        for(let conditation of conditionTree){
            debugger;
            traverseTree(conditation.parsedCondition);
        }
       
        return { nodes, links };
    }

     handleWeight(key) {
        if (key === "Unit") {
            return 1; 
        } else if (key === "Value") {
            return 0.7; 
        } else {
            return 0.5; 
        }
    }
        
}

export default GraphQuery;
