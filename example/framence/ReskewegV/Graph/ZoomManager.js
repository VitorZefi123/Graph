class ZoomManager {
    constructor(camera, renderer, scene) {
        this.camera = camera;
        this.renderer = renderer;
        this.scene = scene;
    }

    getApparentRadius(node) {
        const distanceToCamera = this.camera.position.distanceTo(node.position);
        const fovScale = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) * 2;
        return (node.geometry.parameters.radius) * (fovScale / distanceToCamera);
    }

    zoomIn(event) {
        debugger;
        if (this.camera) {
            const zoomAmount = Math.abs(event.deltaY) * 0.005;
            this.camera.position.z -= zoomAmount;
            this.camera.updateProjectionMatrix();
            this.updateNodeLabels();
        }
    }

    zoomOut(event) {
        debugger;
        if (this.camera) {
            const zoomAmount = Math.abs(event.deltaY) * 0.005; 
            this.camera.position.z += zoomAmount;
            this.camera.updateProjectionMatrix();
            this.updateNodeLabels();
        }
    }

    updateNodeLabels() {
        this.scene.traverse(object => {
            if (object.isMesh) {
                const node = object;
                const apparentRadius = this.getApparentRadius(node);

                if (apparentRadius > 0.02) {
                    this.addLabelToNode(node);
                } else {
                    this.removeLabelFromNode(node);
                }
            }
        });
    }

    addLabelToNode(node) {
        if (!node.label) {
            const label = document.createElement('div');
            label.textContent = node.__data?.name || '';
            label.className = 'node-label';
            Object.assign(label.style, {
                fontSize: '10px',
                padding: '2px 4px',
                background: 'rgba(0, 0, 0, 0.6)',
                color: '#fff',
                borderRadius: '4px',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
            });

            const labelObject = new THREE.CSS2DObject(label);
            node.add(labelObject);
            node.label = labelObject;
        }
    }

    removeLabelFromNode(node) {
        if (node.label) {
            node.remove(node.label);
            node.label = null;
        }
    }
}

export default ZoomManager;
