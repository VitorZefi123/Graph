class RoomColumns {
    static Columns = {
        CLEANING_GROUP: 'cleaning group',
        RESERVED: 'reserved',
        NET_AREA: 'net area',
        CATEGORY:'category',
        RENTABILITY: 'rentability',
        SERVICE_TYPE: 'service type'
    };

    static ColumnNames = {
        CLEANING_GROUP_SHORT: 'cleaning',
        RESERVED_SHORT: 'reserved',
        NET_AREA_SHORT: 'net area',
        SIZE: 'size',
        RENTABILITY_SHORT: 'rentabil',
        CATEGORY_SHORT: 'category',
        SERVICE_TYPE_SHORT: 'service',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [RoomColumns.ColumnNames.CLEANING_GROUP_SHORT]: RoomColumns.Columns.CLEANING_GROUP,
        [RoomColumns.ColumnNames.RESERVED_SHORT]: RoomColumns.Columns.RESERVED,
        [RoomColumns.ColumnNames.NET_AREA_SHORT]: RoomColumns.Columns.NET_AREA,
        [RoomColumns.ColumnNames.RENTABILITY_SHORT]: RoomColumns.Columns.RENTABILITY,
        [RoomColumns.ColumnNames.SIZE]: RoomColumns.Columns.NET_AREA,
        [RoomColumns.ColumnNames.CATEGORY_SHORT]: RoomColumns.Columns.CATEGORY,
        [RoomColumns.ColumnNames.SERVICE_TYPE_SHORT]: RoomColumns.Columns.SERVICE_TYPE,
    };
}

export default RoomColumns;
