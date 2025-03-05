class TableNames {
    static ROOM = 'room';
    static BUILDING = 'building';
    static INSTALATION = 'instalation';
    static FURNITURE = 'furniture';
    static USER_ACCOUNT = 'user account';
    static SYSTEMS = 'system';
    
    // Optionally, you can add methods for future use
    static getTableNames() {
        return [
            TableNames.ROOM,
            TableNames.BUILDING,
            TableNames.INSTALATION,
            TableNames.FURNITURE,
            TableNames.USER_ACCOUNT,
            TableNames.SYSTEMS,
        ];
    }
}

export default TableNames;
