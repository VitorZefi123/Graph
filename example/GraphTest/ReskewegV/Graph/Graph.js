import NodeManager from './NodeManager.js'; 


class Graph {
    constructor(containerId) {
        this.containerId = containerId;
        this.graph = null;
        this.camera = null;
        this.renderer = null;
        this.scene = null;
        this.nodeRelations = {}; 
        this.nodeManager = null; 
        
        }

    async initializeGraph() {
        try {
            debugger;
            const response = await fetch('Reckeweg.json');
            debugger;
            const jsonData = await response.json();

            const gData = {
                nodes: jsonData.Nodes.map(node => this.createNode(node)), 
                links: jsonData.Nodes.flatMap(node =>
                    node.edges.map(targetId => ({ source: node.id, target: targetId }))
                )
            };

            this.graph = ForceGraph3D({
                extraRenderers: [new THREE.CSS2DRenderer()]
            })(document.getElementById(this.containerId))
                .graphData(gData)
                .nodeLabel(node => `${node.name}: ${node.text} : ${node.id}`)
                .nodeAutoColorBy('id')
                .onEngineTick(() => {
                    if (this.camera) {
                        this.camera.lookAt(this.graph.scene().position);
                    }
                });

                this.nodeManager = new NodeManager(this.graph);
                this.graph.onNodeClick(node => {
                    debugger;
                    this.nodeManager.highlightNodes([node.id], this.nodeRelations);
                });

            this.graph.enableNodeDrag(false);
            debugger;
            this.scene = this.graph.scene();
            this.camera = this.graph.camera();
            this.renderer = this.graph.renderer();
        } catch (error) {
            console.error('Error loading graph data:', error);
        }
    }

    createNode(node) {
        node.edges.forEach(targetId => {
            if (!this.nodeRelations[node.id]) {
                this.nodeRelations[node.id] = new Set();
            }
            this.nodeRelations[node.id].add(targetId); 

            if (!this.nodeRelations[targetId]) {
                this.nodeRelations[targetId] = new Set();
            }
            this.nodeRelations[targetId].add(node.id);
        });

        return {
            id: node.id,
            name: node.name,
            text: node.text,
            edges: node.edges
        };
    }

    getGraphInstance() {
        return this.graph;
    }
}

export default Graph;
