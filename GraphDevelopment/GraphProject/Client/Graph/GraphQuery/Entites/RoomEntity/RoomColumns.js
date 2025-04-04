class RoomColumns {
    static Columns = {
        CLEANING_GROUP: 'cleaning group',
        RESERVED: 'reserved',
        NET_AREA: 'net area',
        CATEGORY:'category',
        RENTABILITY: 'profitability',
        SERVICE_TYPE: 'service type',
        BUILDING: 'building',
        WORKSTATION: 'workstations'

    };

    static ColumnNames = {
        CLEANING_GROUP_SHORT: 'cleaning',
        RESERVED_SHORT: 'reserved',
        NET_AREA_SHORT: 'net area',
        SIZE: 'size',
        WORKSTATION_SHORT: 'workstation',
        PROFITABILITY: 'profitability',
        PROFITABILITY_SHORT: 'profit',
        RENTABILITY_SHORT: 'rentabil',
        RENTABILITY_SHORT1: 'reliabil', 
        RENTABILITY_SHORT2: 'rental', 
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
        [RoomColumns.ColumnNames.PROFITABILITY]: RoomColumns.Columns.RENTABILITY,
        [RoomColumns.ColumnNames.PROFITABILITY_SHORT]: RoomColumns.Columns.RENTABILITY,
        [RoomColumns.ColumnNames.RENTABILITY_SHORT1]: RoomColumns.Columns.RENTABILITY,
        [RoomColumns.ColumnNames.RENTABILITY_SHORT2]: RoomColumns.Columns.RENTABILITY,
        [RoomColumns.ColumnNames.SIZE]: RoomColumns.Columns.NET_AREA,
        [RoomColumns.ColumnNames.CATEGORY_SHORT]: RoomColumns.Columns.CATEGORY,
        [RoomColumns.ColumnNames.SERVICE_TYPE_SHORT]: RoomColumns.Columns.SERVICE_TYPE,
        [RoomColumns.ColumnNames.BUILDING_SHORT]: RoomColumns.Columns.BUILDING,
        [RoomColumns.ColumnNames.WORKSTATION_SHORT]: RoomColumns.Columns.WORKSTATION,
    };


    static ColumnId ={
        RENTABILITY_Id: 'StructureObject.TimeLineInt374',
        WORKSTATION_Id: 'StructureObject.TimeLineInt181',
    };

    static columnToIdMap = {
        [RoomColumns.Columns.RENTABILITY]: RoomColumns.ColumnId.RENTABILITY_Id,
        [RoomColumns.Columns.WORKSTATION]: RoomColumns.ColumnId.WORKSTATION_Id,
    };

    static getIdByColumnName(columnName) {
        return this.columnToIdMap[columnName] || null;
      }
}

export default RoomColumns;
