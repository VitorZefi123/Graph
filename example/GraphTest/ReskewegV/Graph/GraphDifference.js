class GraphDifference {
    constructor(graph, keyOrigin, keyCopy) {
        this.graph = graph;
        this.keyOrigin = keyOrigin;
        this.keyCopy = keyCopy;
    }

    highlightDuplicates() {

        const resultArray = [];
        this.keyOrigin.forEach((originGroup, groupIndex) => {
            const originIds = originGroup.split(',').map(Number);
            const copyIds = this.keyCopy[groupIndex].split(',').map(Number);

            originIds.forEach((originId, index) => {
                const copyId = copyIds[index]; 
                const originNode = this.graph.graphData().nodes.find(node => node.id === originId);
                const copyNode = this.graph.graphData().nodes.find(node => node.id === copyId);
    
                if (originNode && copyNode) {
                    const color = originNode.label === copyNode.label ? "red" : "blue";
                    resultArray.push({ originId, copyId, color });
                }
            });
        });
    
     this.graph.nodeThreeObject(node => {
        const nodeColor = resultArray.find(entry => entry.originId === node.id || entry.copyId === node.id)?.color || 'gray';
        const geometry = new THREE.SphereGeometry(5);
        const material = new THREE.MeshBasicMaterial({ color: nodeColor });
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
    });
    
        console.log(resultArray); 
    }
}

export default GraphDifference;
