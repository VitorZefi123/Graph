import ConditionCache from './ConditionCache.js';

class GraphQuery {
    constructor(containerId) {
        this.containerId = containerId;
        this.conditionCache = new ConditionCache();
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
                    nodeLabel.style.color = 'white'; 
                    nodeLabel.style.background = 'rgba(0, 0, 0, 0.7)';
                    nodeLabel.style.padding = '2px 5px';
                    nodeLabel.style.fontSize = '12px';
                    nodeLabel.style.borderRadius = '5px';
                   
                    const labelObject = new THREE.CSS2DObject(nodeLabel);
                    labelObject.position.set(0, 10, 0); 
                    return labelObject;
                })
                .linkColor(() => 'gray')
                .linkWidth(link => link.weight*2 || 1)
                .linkLabel(link => `Weight: ${link.weight}`); 
        } catch (error) {
            console.error('Error initializing graph:', error);
        }
    }
 
    buildTableGraphe(fullCondition) {
        let nodes = [];
        let links = [];        
        let nodeId = 0;
        
        this.traverseTree(fullCondition, nodes, links, nodeId);
        
        return { nodes, links };
    }
   
    traverseTree(tree, nodes, links, nodeId, parentId = null) {
        if (!tree) return nodeId;
   
        if (tree.lhs && tree.rhs) {
            let logicOpNodeId = this.createNode(tree.logicOp, "operator", nodes, nodeId++);
   
            if (parentId !== null) {
                links.push({ source: parentId, target: logicOpNodeId, weight: 0.5 });
            }
   
            let leftNodeId = nodeId;
            nodeId = this.traverseTree(tree.lhs, nodes, links, nodeId, logicOpNodeId);
   
            let rightNodeId = nodeId;
            nodeId = this.traverseTree(tree.rhs, nodes, links, nodeId, logicOpNodeId);
   
            links.push({ source: logicOpNodeId, target: leftNodeId, weight: 0.5 });
            links.push({ source: logicOpNodeId, target: rightNodeId, weight: 0.5 });
   
            return nodeId;
        }
       
        else if (Array.isArray(tree)) {
            tree = this.extractAndCacheKeys(tree);
            return this.processArrayNodes(tree, nodes, links, nodeId);
        }
        return nodeId;
    }
   
    processArrayNodes(tree, nodes, links, nodeId) {
        let lastNodeId = null;
        debugger;
    
        for (let item of tree) {
            let [key, value] = item.split(": ");
            let createdNodeId = this.createNode(value, key.toLowerCase(), nodes, nodeId++);
    
            let weight = this.handleWeight(key, value);
            if (lastNodeId !== null) {
                links.push({ source: lastNodeId, target: createdNodeId, weight: weight });
            }
            lastNodeId = createdNodeId;
        }
    
        return nodeId;
    }

    extractAndCacheKeys(tree) {
        debugger;
        let keys = tree.map(item => item.split(": ")[0]); 
        let cachedTree = this.conditionCache.getCondition(keys);
        if (cachedTree) {
            return cachedTree; 
        }

        this.conditionCache.saveCondition(keys, tree);
        return tree;
    }

    createNode(label, type, nodes, nodeId) {
        let node = { id: nodeId, label, type };
        nodes.push(node);
        return node.id;
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