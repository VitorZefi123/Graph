class EmployeColumns {
    static Columns = {
        NAME: 'name',
        FUNCTION: 'function',
        COMPANY: 'company',
        ACCOUNT: 'account',
    };

    static ColumnNames = {
        NAME_SHORT: 'name',
        FUNCTION_SHORT: 'function',
        COMPANY_SHORT: 'company',
        ACCOUNT_SHORT: 'account',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [EmployeColumns.ColumnNames.NAME_SHORT]: EmployeColumns.Columns.NAME,
        [EmployeColumns.ColumnNames.FUNCTION_SHORT]: EmployeColumns.Columns.FUNCTION,
        [EmployeColumns.ColumnNames.COMPANY_SHORT]: EmployeColumns.Columns.COMPANY,
        [EmployeColumns.ColumnNames.ACCOUNT_SHORT]: EmployeColumns.Columns.ACCOUNT,
    };
}

export default EmployeColumns;
