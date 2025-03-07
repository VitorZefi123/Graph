class TableNames {
    static ROOM = 'room';
    static BUILDING = 'building';
    static INSTALATION = 'instalation';
    static FURNITURE = 'furniture';
    static USER_ACCOUNT = 'user account';
    static SYSTEMS = 'system';
    static EMPLOYEE = 'employee';
    static LEVEL = 'level';
    static LEASES = 'leases';
    static USER = 'user';
    static ASSET = 'asset';
    static CONTRACT ='contract';
    static RENTAL = 'rental';
    // Optionally, you can add methods for future use
    static getTableNames() {
        return [
            TableNames.ROOM,
            TableNames.BUILDING,
            TableNames.INSTALATION,
            TableNames.FURNITURE,
            TableNames.USER_ACCOUNT,
            TableNames.SYSTEMS,
            TableNames.EMPLOYEE,
            TableNames.LEVEL,
            TableNames.LEASES,
            TableNames.USER,
            TableNames.ASSET,
            TableNames.CONTRACT,
            TableNames.RENTAL,
        ];
    }
}

export default TableNames;
