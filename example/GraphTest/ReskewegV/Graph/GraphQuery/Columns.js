class Columns {

    static ROOM_SIZE = 'net area';
    static CATEGORY = 'category';
    static DATE = 'date';
    static RENTABILITY = 'rentability';
    static FLOOR = 'floor';
    
    
    static getAllColumns() {
        return [this.ROOM_SIZE, this.CATEGORY, this.PRICE, this.LOCATION, this.DATE,this.RENTABILITY, this.FLOOR]
            .filter(column => typeof column === "string"); 
    }
}

export default Columns;
