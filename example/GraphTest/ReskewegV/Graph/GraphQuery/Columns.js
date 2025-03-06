class Columns {

    static ROOM_SIZE = 'net area';
    static CATEGORY = 'category';
    static DATE = 'date';
    static RENTABILITY = 'rentability';
    static NAME = 'name';
    static FLOOR = 'floor';
    static SERVICE_TYPE = 'service type';
    static CONTENT = 'content';
    static LABEL = 'label';
    static STATUS = 'status';
    static SYSTEM_LOCATION ='location';
    static MAINTAINED_BY = 'maintained by';
    static REQUIREMENT = 'require';
    static COMPANY = 'company';
    static FUNCTION = 'function';
    static END_ON = 'end on';
    static NOTICE_PERIOD = 'notice period';
    static CLEANING_GROUP = 'cleaning group';
    static RESERVED = 'reserved';
    static BILLING_PERIOD = 'billing period';
    static START_ON = 'start on';
    static TERMINATION = 'termination';

    static getAllColumns() {
        return [this.ROOM_SIZE, this.CATEGORY, this.PRICE, this.LOCATION,
             this.RENTABILITY,this.START_ON, this.TERMINATION,
             this.NAME, this.FLOOR, this.SERVICE_TYPE,this.CONTENT, this.LABEL, this.STATUS, this.SYSTEM_LOCATION,
             this.MAINTAINED_BY, this.REQUIREMENT, this.COMPANY, this.FUNCTION, this.END_ON, this.NOTICE_PERIOD,
             this.CLEANING_GROUP, this.RESERVED, this.BILLING_PERIOD, this.DATE,]
            .filter(column => typeof column === "string"); 
    }
}

export default Columns;
