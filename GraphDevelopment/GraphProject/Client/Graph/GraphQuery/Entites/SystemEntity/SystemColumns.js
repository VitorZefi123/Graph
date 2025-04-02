class SystemColumns {
    static Columns = {
        TRADE: 'trade',
        CODE: 'code',
        REQUIREMENT: 'require',
        MAINTAINED_BY: 'maintain',
        SYSTEM_LOCATION: 'location',
    };

    static ColumnNames = {
        TRADE_SHORT: 'trade',
        CODE_SHORT: 'code',
        REQUIREMENT_SHORT: 'require',
        MUST_BE: 'must be',
        MAINTAINED_BY_SHORT: 'maintain',
        MAINTAINED_BY_SHORT_1:'maintenanc',
        SYSTEM_LOCATION_SHORT: 'location',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [SystemColumns.ColumnNames.TRADE_SHORT]: SystemColumns.Columns.TRADE,
        [SystemColumns.ColumnNames.CODE_SHORT]: SystemColumns.Columns.CODE,
        [SystemColumns.ColumnNames.REQUIREMENT_SHORT]: SystemColumns.Columns.REQUIREMENT,
        [SystemColumns.ColumnNames.MUST_BE]: SystemColumns.Columns.REQUIREMENT,
        [SystemColumns.ColumnNames.MAINTAINED_BY_SHORT]: SystemColumns.Columns.MAINTAINED_BY,
        [SystemColumns.ColumnNames.MAINTAINED_BY_SHORT_1]: SystemColumns.Columns.MAINTAINED_BY,
        [SystemColumns.ColumnNames.SYSTEM_LOCATION_SHORT]: SystemColumns.Columns.SYSTEM_LOCATION,
    };
}

export default SystemColumns;
