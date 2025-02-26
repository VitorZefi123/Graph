class GraphQuery {
    constructor(containerId) {
        this.containerId = containerId;
    }

    async initializeGraph(parsedConditions) {
        try {
            const graphData = this.buildTableGraphe(parsedConditions);
           debugger;
        

            this.graph = ForceGraph3D({
                extraRenderers: [new THREE.CSS2DRenderer()]
            })(document.getElementById(this.containerId))
                .graphData(graphData)
                .nodeAutoColorBy('type')
                .nodeThreeObject(node => {
                    const nodeLabel = document.createElement('div');
                    nodeLabel.textContent = node.label;
                    nodeLabel.style.color = 'white'; // Adjust text color
                    nodeLabel.style.background = 'rgba(0, 0, 0, 0.7)'; // Optional: background
                    nodeLabel.style.padding = '2px 5px';
                    nodeLabel.style.fontSize = '12px';
                    nodeLabel.style.borderRadius = '5px';
                    
                    const labelObject = new THREE.CSS2DObject(nodeLabel);
                    labelObject.position.set(0, 10, 0); // Adjust position
                    return labelObject;
                })
                .linkColor(() => 'gray')
                .linkWidth(link => link.weight*2 || 1)
                .linkLabel(link => `Weight: ${link.weight}`); // Show weight on hover
        } catch (error) {
            console.error('Error initializing graph:', error);
        }
    }

    buildTableGraphe(fullCondition) {
        debugger;
        let nodes = [];
        let links = [];        
        let nodeId = 0;
    
        for(let condition of fullCondition){       
         nodeId = this.buildGraphData(condition.parsedCondition.sqlConditions, nodes, links, nodeId);
        }
         return { nodes, links };
    }

    buildGraphData(conditionTree, nodes, links, nodeId) {
        let result = this.traverseTree(conditionTree, nodes, links, nodeId);
        return result.nodeId;
    }
    
    
     traverseTree(tree, nodes, links, nodeId, parentId = null) {
        if (!tree) return { nodeId, lastNodeId: null };
    
        if (tree.lhs && tree.rhs) {
            let { nodeId: newNodeId, createdNodeId: logicOpNodeId } = 
                this.createNode(tree.logicOp, "operator", nodes, nodeId);
            
            if (parentId !== null) {
                links.push({ source: parentId, target: logicOpNodeId, weight: 0.5 });
            }
    
            let left = this.traverseTree(tree.lhs, nodes, links, newNodeId, logicOpNodeId);
            let right = this.traverseTree(tree.rhs, nodes, links, left.nodeId, logicOpNodeId);
    
            if (left.lastNodeId !== null) 
                links.push({ source: logicOpNodeId, target: left.lastNodeId, weight: 0.5 });
    
            if (right.lastNodeId !== null) 
                links.push({ source: logicOpNodeId, target: right.lastNodeId, weight: 0.5 });
    
            return { nodeId: right.nodeId, lastNodeId: logicOpNodeId };
        } 
        
        else if (Array.isArray(tree)) {
            let lastNodeId = null;
            let currentId = nodeId;
            
            for (let item of tree) {
                let [key, value] = item.split(": ");
                let { nodeId: updatedId, createdNodeId } = this.createNode(value, key.toLowerCase(), nodes, currentId);
                
                let weight = this.handleWeight(key, value);
                if (lastNodeId !== null) {
                    links.push({ source: lastNodeId, target: createdNodeId, weight: weight });
                }
                lastNodeId = createdNodeId;
                currentId = updatedId;
            }
            return { nodeId: currentId, lastNodeId };
        }
    
        return { nodeId, lastNodeId: null };
    }


    createNode(label, type, nodes, nodeId) {
        let node = { id: nodeId++, label, type };
        nodes.push(node);
        return { nodeId, createdNodeId: node.id };
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
