class FurnitureColumns {
    static Columns = {
        NAME: 'name',
    };

    static ColumnNames = {
        NAME_SHORT: 'name',
    };

    static columnToNameMap = {
        [FurnitureColumns.ColumnNames.NAME_SHORT]: FurnitureColumns.Columns.NAME,
    };
}

export default FurnitureColumns;
