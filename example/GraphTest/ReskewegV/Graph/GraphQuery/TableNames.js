class TableNames {
    static ROOM = 'room';
    static BUILDING = 'building';
    static INSTALATION = 'instalation';
    
    // Optionally, you can add methods for future use
    static getTableNames() {
        return [
            TableNames.ROOM,
            TableNames.BUILDING,
            TableNames.INSTALATION,
        ];
    }
}

export default TableNames;
