class BuildingName {
    static Columns = {
        BUILDING1: 'building1',
        BUILDING2: 'building2',
    };

    static ColumnNames = {
        BUILDING1_SHORT: 'building1',
        BUILDING2_SHORT: 'building2',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [BuildingName.ColumnNames.BUILDING1_SHORT]: BuildingName.Columns.BUILDING1,
        [BuildingName.ColumnNames.BUILDING2_SHORT]: BuildingName.Columns.BUILDING2,
    };
}

export default BuildingName;
