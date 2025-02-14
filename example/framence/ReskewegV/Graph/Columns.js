class Columns {
    // Define static column names
    static ROOM_SIZE = 'size';
    static CATEGORY = 'category';
    
    
    static getAllColumns() {
        return [this.ROOM_SIZE, this.CATEGORY, this.PRICE, this.LOCATION]
            .filter(column => typeof column === "string"); // Removes undefined
    }
}

export default Columns;
