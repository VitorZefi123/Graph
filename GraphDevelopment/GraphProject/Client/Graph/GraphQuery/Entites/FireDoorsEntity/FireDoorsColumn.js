class FireDoorsColumn {
    static Columns = {
        REQUIRED: 'required',
    };

    static ColumnNames = {
        REQUIRED_SHORT: 'require',
    };

    static columnToNameMap = {
        [FireDoorsColumn.ColumnNames.REQUIRED_SHORT]: FireDoorsColumn.Columns.REQUIRED,
    };
}

export default FireDoorsColumn;
