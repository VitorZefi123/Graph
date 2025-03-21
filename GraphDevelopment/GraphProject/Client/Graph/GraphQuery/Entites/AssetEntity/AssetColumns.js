class AssetColumns {
    static Columns = {
        REQUIRED: 'required',
    };

    static ColumnNames = {
        REQUIRED_SHORT: 'require',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [AssetColumns.ColumnNames.REQUIRED_SHORT]: AssetColumns.Columns.REQUIRED,
    };
}

export default AssetColumns;
