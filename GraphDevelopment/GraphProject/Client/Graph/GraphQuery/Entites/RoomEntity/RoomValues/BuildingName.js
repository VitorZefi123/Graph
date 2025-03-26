class BuildingName {
    static Columns = {
        BUILDING1: 'buildinga',
        BUILDING2: 'buildingb',
    };

    static ColumnNames = {
        BUILDING1_SHORT: 'buildinga',
        BUILDING2_SHORT: 'buildingb',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [BuildingName.ColumnNames.BUILDING1_SHORT]: BuildingName.Columns.BUILDING1,
        [BuildingName.ColumnNames.BUILDING2_SHORT]: BuildingName.Columns.BUILDING2,
    };
}

export default BuildingName;
