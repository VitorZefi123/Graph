class BuildingColumns {
    static Columns = {
        EVALUATION: 'evaluation',
    };

    static ColumnNames = {
        EVALUATION_SHORT: 'evaluation',
        SHOW_ME: 'show',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [BuildingColumns.ColumnNames.EVALUATION_SHORT]: BuildingColumns.Columns.EVALUATION,
        [BuildingColumns.ColumnNames.SHOW_ME]: BuildingColumns.Columns.EVALUATION,
    };
}

export default BuildingColumns;
