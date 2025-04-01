import NodeManager from './NodeManager.js';

class GraphProperties {
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
            const response = await fetch('Properties.json');
            debugger;
            const jsonData = await response.json();

            const gData = this.processGraphData(jsonData);

            this.graph = ForceGraph3D({
                extraRenderers: [new THREE.CSS2DRenderer()]
            })(document.getElementById(this.containerId))
                .graphData(gData)
                .nodeLabel(node => `${node.name}: ${node.id}`)
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

    processGraphData(jsonData) {
        let nodes = [];
        let links = [];
    
        jsonData.propertysets.forEach(property => {
            let node = {
                id: property.propertysetcode,
                name: property.caption,
                edges: []
            };
            nodes.push(node);
    
            property.links.forEach(link => {
                links.push({
                    source: property.propertysetcode,
                    target: link.topropertysetcode,
                    caption: link.caption
                });
    
                if (!this.nodeRelations[property.propertysetcode]) {
                    this.nodeRelations[property.propertysetcode] = new Set();
                }
                this.nodeRelations[property.propertysetcode].add(link.topropertysetcode);
    
                if (!this.nodeRelations[link.topropertysetcode]) {
                    this.nodeRelations[link.topropertysetcode] = new Set();
                }
                this.nodeRelations[link.topropertysetcode].add(property.propertysetcode);
    
                node.edges.push(link.topropertysetcode);
            });
        });
    
        Object.keys(this.nodeRelations).forEach(key => {
            this.nodeRelations[key] = Array.from(this.nodeRelations[key]);
        });
    debugger;
        return { nodes, links };
    }
    

    getGraphInstance() {
        return this.graph;
    }
}

export default GraphProperties;
