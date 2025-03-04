import ConditionCache from './ConditionCache.js';
import GraphDifference from './GraphDifference.js';

class GraphQuery {
    constructor(containerId) {
        this.containerId = containerId;
        this.graph = null;
        this.conditionCache = new ConditionCache();
        this.keyNodeMap = new Map();
    }
 
    async initializeGraph(parsedConditions) {
        try {
            this.keyNodeMap = new Map();
            const graphData = this.buildTableGraphe(parsedConditions);
           debugger;
 
            this.graph = ForceGraph3D({
                extraRenderers: [new THREE.CSS2DRenderer()]
            })(document.getElementById(this.containerId))
                .graphData(graphData)
                .nodeAutoColorBy('type')
                .nodeThreeObject(node => {
                    const geometry = new THREE.SphereGeometry(5);
                    const material = new THREE.MeshBasicMaterial({ color: 'blue' });
                    const sphere = new THREE.Mesh(geometry, material);
                    const nodeLabel = document.createElement('div');
                    nodeLabel.textContent = node.label;
                    nodeLabel.style.color = 'white';
                    nodeLabel.style.background = 'rgba(0, 0, 0, 0.7)';
                    nodeLabel.style.padding = '2px 5px';
                    nodeLabel.style.fontSize = '12px';
                    nodeLabel.style.borderRadius = '5px';
                    const labelObject = new THREE.CSS2DObject(nodeLabel);
                    labelObject.position.set(0, 10, 0); 
                
                    const group = new THREE.Group();
                    group.add(sphere);
                    group.add(labelObject);
                
                    return group;
                })                
                .linkColor(() => 'gray')
                .linkWidth(link => link.weight*2 || 1)
                .linkLabel(link => `Weight: ${link.weight}`); 
                debugger;
               const keysUSed = this.findDuplicateKeys();
               const graphDifference = new GraphDifference(this.graph,keysUSed.keyOrigin, keysUSed.keyCopy);
               graphDifference.highlightDuplicates();
               debugger;
               const tts = "tes";


        } catch (error) {
            console.error('Error initializing graph:', error);
        }
    }
 
    buildTableGraphe(fullCondition) {
        let nodes = [];
        let links = [];        
        let nodeId = 0;
        
        for (const condition of fullCondition){
            debugger;
       nodeId = this.traverseTree(condition.sqlConditions, nodes, links, nodeId);
        }
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
        let valuesVector =  [];
        let nodeIdVector = [];
    
        debugger;
    
        for (let item of tree) {
            let [key, value] = item.split(": ");
            let createdNodeId = this.createNode(value, key.toLowerCase(), nodes, nodeId++);

            valuesVector.push(key);
            nodeIdVector.push(createdNodeId);
    
            let weight = this.handleWeight(key, value);
            if (lastNodeId !== null) {
                links.push({ source: lastNodeId, target: createdNodeId, weight: weight });
            }
            lastNodeId = createdNodeId;
        }

        let valuesString = valuesVector.join(",");  
        let nodesString = nodeIdVector.join(","); 

        this.keyNodeMap.set(nodesString, valuesString);
        return nodeId;
    }
    

    extractAndCacheKeys(tree) {
        debugger;
        let keys = tree.map(item => item.split(": ")[0]); 
        let cachedTree = this.conditionCache.getCondition(keys);
        if (cachedTree) {
            return tree; 
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
    

    findDuplicateKeys() {
        const valueToKeysMap = new Map();
        const keyOrigin = [];
        const keyCopy = [];
    
        this.keyNodeMap.forEach((value, key) => {
            if (valueToKeysMap.has(value)) {
                if (!keyOrigin.includes(valueToKeysMap.get(value))) {
                    keyOrigin.push(valueToKeysMap.get(value)); 
                }
                keyCopy.push(key);
            } else {
                valueToKeysMap.set(value, key);
            }
        });
    
        return { keyOrigin, keyCopy };
    }
    
       
}
 
export default GraphQuery;