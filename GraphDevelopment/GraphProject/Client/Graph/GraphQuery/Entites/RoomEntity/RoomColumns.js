class RoomColumns {
    static Columns = {
        CLEANING_GROUP: 'cleaning group',
        RESERVED: 'reserved',
        NET_AREA: 'net area',
        CATEGORY:'category',
    };

    static ColumnNames = {
        CLEANING_GROUP_SHORT: 'cleaning',
        RESERVED_SHORT: 'reserved',
        NET_AREA_SHORT: 'net area',
        SIZE: 'size',
        CATEGORY_SHORT: 'category',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [RoomColumns.ColumnNames.CLEANING_GROUP_SHORT]: RoomColumns.Columns.CLEANING_GROUP,
        [RoomColumns.ColumnNames.RESERVED_SHORT]: RoomColumns.Columns.RESERVED,
        [RoomColumns.ColumnNames.NET_AREA_SHORT]: RoomColumns.Columns.NET_AREA,
        [RoomColumns.ColumnNames.SIZE]: RoomColumns.Columns.NET_AREA,
        [RoomColumns.ColumnNames.CATEGORY_SHORT]: RoomColumns.Columns.CATEGORY,
    };
}

export default RoomColumns;
