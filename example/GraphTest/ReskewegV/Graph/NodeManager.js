class NodeManager {
    constructor(graphInstance) {
        this.graph = graphInstance;
        this.highlightedNodes = new Set();
        this.highlightedLinks = new Set();
        this.nodeRelations = {}; 
    }

    highlightNodes(nodes, nodeRelations) {
        debugger;
        this.nodeRelations = nodeRelations;
        this.highlightedNodes.clear();
        this.highlightedLinks.clear();
    
        if (nodes && nodes.length > 0) {
            nodes.forEach(nodeId => {
                this.highlightedNodes.add(nodeId);
                const { relatedNodes, relatedEdges } = this.getRelatedNodes(nodeId);
                relatedNodes.forEach(n => this.highlightedNodes.add(n));
                relatedEdges.forEach(l => this.highlightedLinks.add(l));
            });
        }
    
        this.updateGraphColors(nodes);

        const graphData = this.graph.graphData();

        for( const nodeId of nodes) {
        const node = graphData.nodes.find(n => n.id === nodeId);

        debugger;

        if (node) {
            this.graph.cameraPosition(
                { x: node.x, y: node.y, z: node.z + 250 }, 
                { x: node.x, y: node.y, z: node.z }, 
                1000 
            );
        } else {
            console.warn(`Node with ID ${nodeId} not found`);
        }
    }

       
        console.log(graphData);

    
    }
    

    updateGraphColors(nodes) {
        this.graph.nodeColor(n => this.highlightedNodes.has(n.id) ? nodes.includes(n.id) ? "blue" : "red" : 'gray')
            .linkColor(l => this.highlightedNodes.has(l.source.id) && this.highlightedNodes.has(l.target.id) ? '#FF5733' : '#D3D3D3')
            .linkWidth(l => this.highlightedNodes.has(l.source.id) && this.highlightedNodes.has(l.target.id) ? 1.2 : 1);
    }

    getRelatedNodes(nodeId) {
        let relatedNodes = new Set();
        let relatedEdges = new Set();

        if (this.nodeRelations[nodeId]) {
            this.nodeRelations[nodeId].forEach(childId => {
                relatedNodes.add(childId);
                relatedEdges.add({ source: nodeId, target: childId });
            });
        }

        return { relatedNodes, relatedEdges };
    }
}

export default NodeManager;
