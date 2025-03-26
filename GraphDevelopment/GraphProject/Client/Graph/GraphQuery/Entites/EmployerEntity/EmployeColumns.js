class EmployeColumns {
    static Columns = {
        NAME: 'name',
        FUNCTION: 'function',
        COMPANY: 'company',
        ACCOUNT: 'account',
        LAST_UPDATED: 'last updated',
        FLOOR: 'floor',
        BUILDING: 'building',
    };

    static ColumnNames = {
        NAME_SHORT: 'name',
        FUNCTION_SHORT: 'function',
        COMPANY_SHORT: 'company',
        ACCOUNT_SHORT: 'account',
        LAST_UPDATED_SHORT: 'last update',
        FLOOR_SHORT: 'floor',
        BUILDING_SHORT: 'building',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [EmployeColumns.ColumnNames.NAME_SHORT]: EmployeColumns.Columns.NAME,
        [EmployeColumns.ColumnNames.FUNCTION_SHORT]: EmployeColumns.Columns.FUNCTION,
        [EmployeColumns.ColumnNames.COMPANY_SHORT]: EmployeColumns.Columns.COMPANY,
        [EmployeColumns.ColumnNames.ACCOUNT_SHORT]: EmployeColumns.Columns.ACCOUNT,
        [EmployeColumns.ColumnNames.LAST_UPDATED_SHORT]: EmployeColumns.Columns.LAST_UPDATED,
        [EmployeColumns.ColumnNames.FLOOR_SHORT]: EmployeColumns.Columns.FLOOR,
        [EmployeColumns.ColumnNames.BUILDING_SHORT]: EmployeColumns.Columns.BUILDING,
    };
}

export default EmployeColumns;
