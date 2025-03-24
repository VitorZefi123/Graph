class DrawingColumns {
    static Columns = {
        LANGUAGE: 'Language',
    };

    static ColumnNames = {
        LANGUAGE_SHORT: 'Language',
    };

    static columnToNameMap = {
        [DrawingColumns.ColumnNames.LANGUAGE_SHORT]: DrawingColumns.Columns.LANGUAGE,
    };
}

export default DrawingColumns;
