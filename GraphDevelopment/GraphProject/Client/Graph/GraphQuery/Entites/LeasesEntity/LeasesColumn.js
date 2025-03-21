class LeaseColumns {
    static Columns = {
        END_ON: 'end on',
        NOTICE_PERIOD: 'notice period',
    };

    static ColumnNames = {
        END_ON_SHORT: 'end on',
        NOTICE_PERIOD_SHORT: 'notice period',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [LeaseColumns.ColumnNames.END_ON_SHORT]: LeaseColumns.Columns.END_ON,
        [LeaseColumns.ColumnNames.NOTICE_PERIOD_SHORT]: LeaseColumns.Columns.NOTICE_PERIOD,
    };
}

export default LeaseColumns;
