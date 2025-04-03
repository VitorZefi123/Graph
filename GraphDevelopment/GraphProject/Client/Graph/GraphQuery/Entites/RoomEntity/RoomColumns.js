class RoomColumns {
    static Columns = {
        CLEANING_GROUP: 'cleaning group',
        RESERVED: 'reserved',
        NET_AREA: 'net area',
        CATEGORY:'category',
        RENTABILITY: 'rentability',
        SERVICE_TYPE: 'service type',
        BUILDING: 'building'
    };

    static ColumnNames = {
        CLEANING_GROUP_SHORT: 'cleaning',
        RESERVED_SHORT: 'reserved',
        NET_AREA_SHORT: 'net area',
        SIZE: 'size',
        RENTABILITY_SHORT: 'rentabil',
        RENTABILITY_SHORT1: 'reliabil', 
        CATEGORY_SHORT: 'category',
        SERVICE_TYPE_SHORT: 'service',
        BUILDING_SHORT: 'building'
        
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [RoomColumns.ColumnNames.CLEANING_GROUP_SHORT]: RoomColumns.Columns.CLEANING_GROUP,
        [RoomColumns.ColumnNames.RESERVED_SHORT]: RoomColumns.Columns.RESERVED,
        [RoomColumns.ColumnNames.NET_AREA_SHORT]: RoomColumns.Columns.NET_AREA,
        [RoomColumns.ColumnNames.RENTABILITY_SHORT]: RoomColumns.Columns.RENTABILITY,
        [RoomColumns.ColumnNames.RENTABILITY_SHORT1]: RoomColumns.Columns.RENTABILITY,
        [RoomColumns.ColumnNames.SIZE]: RoomColumns.Columns.NET_AREA,
        [RoomColumns.ColumnNames.CATEGORY_SHORT]: RoomColumns.Columns.CATEGORY,
        [RoomColumns.ColumnNames.SERVICE_TYPE_SHORT]: RoomColumns.Columns.SERVICE_TYPE,
        [RoomColumns.ColumnNames.BUILDING_SHORT]: RoomColumns.Columns.BUILDING,
    };
}

export default RoomColumns;
