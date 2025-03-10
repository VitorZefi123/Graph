class Utility {
    static fetchGraphData() {
        return fetch('Graph.json').then(response => response.json());
    }
}

export default Utility;
