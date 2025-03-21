class LevelColumns {
    static Columns = {
        NAME: 'name',
        CONTENT: 'content',
    };

    static ColumnNames = {
        NAME_SHORT: 'name',
        CONTENT_SHORT: 'content',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [LevelColumns.ColumnNames.CONTENT_SHORT]: LevelColumns.Columns.CONTENT,
        [LevelColumns.ColumnNames.NAME_SHORT]: LevelColumns.Columns.NAME,   
    };
}

export default LevelColumns;
