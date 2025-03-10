class Columns {

    static ROOM_SIZE = 'size';
    static CATEGORY = 'category';
    static DATE = 'date';
    
    
    static getAllColumns() {
        return [this.ROOM_SIZE, this.CATEGORY, this.PRICE, this.LOCATION, this.DATE]
            .filter(column => typeof column === "string"); 
    }
}

export default Columns;
