class Columns {

    static ROOM_SIZE = 'net area';
    static CATEGORY = 'category';
    static DATE = 'date';
    static RENTABILITY = 'rentability';
    static FLOOR = 'floor';
    static SERVICE_TYPE = 'service type';
    static NAME = 'name';
    static LABEL = 'label';
    static STATUS = 'status';
    static SYSTEM_LOCATION ='location';
    static MAINTAINED_BY = 'maintained by';
    static REQUIREMENT = 'require';
    static getAllColumns() {
        return [this.ROOM_SIZE, this.CATEGORY, this.PRICE, this.LOCATION,
             this.DATE,this.RENTABILITY, this.FLOOR, this.SERVICE_TYPE,
            this.NAME, this.LABEL, this.STATUS, this.SYSTEM_LOCATION, this.MAINTAINED_BY, this.REQUIREMENT]
            .filter(column => typeof column === "string"); 
    }
}

export default Columns;
