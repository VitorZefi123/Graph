class NodeManager {
    constructor(graphInstance) {
        this.graph = graphInstance;
        this.highlightedNodes = new Set();
        this.highlightedLinks = new Set();
        this.nodeRelations = {}; 
    }

    highlightNode(nodeId, nodeRelations) {
        debugger;
        this.nodeRelations = nodeRelations;
        this.highlightedNodes.clear();
        this.highlightedLinks.clear();

        if (nodeId) {
            this.highlightedNodes.add(nodeId);
            const { relatedNodes, relatedEdges } = this.getRelatedNodes(nodeId);
            relatedNodes.forEach(n => this.highlightedNodes.add(n));
            relatedEdges.forEach(l => this.highlightedLinks.add(l));
        }

        this.updateGraphColors();
    }

    updateGraphColors() {
        this.graph.nodeColor(n => this.highlightedNodes.has(n.id) ? 'red' : 'gray')
            .linkColor(l => this.highlightedNodes.has(l.source.id) && this.highlightedNodes.has(l.target.id) ? '#FF5733' : '#D3D3D3')
            .linkWidth(l => this.highlightedNodes.has(l.source.id) && this.highlightedNodes.has(l.target.id) ? 4 : 1);
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
