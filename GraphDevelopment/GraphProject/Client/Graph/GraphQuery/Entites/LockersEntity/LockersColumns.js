class LockersColumns {
    static Columns = {
        BUILDING: 'building',
        FLOOR: 'floor',

    };

    static ColumnNames = {        
        BUILDING_SHORT: 'building',
        FLOOR_SHORT: 'floor',    
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [LockersColumns.ColumnNames.BUILDING_SHORT]: LockersColumns.Columns.BUILDING,
        [LockersColumns.ColumnNames.FLOOR_SHORT]: LockersColumns.Columns.FLOOR,
    };
}

export default LockersColumns;
