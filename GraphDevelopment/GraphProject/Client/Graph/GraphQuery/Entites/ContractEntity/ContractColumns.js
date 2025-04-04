class ContractColumns {
    static Columns = {
        START_DATE: 'start date',
        CONTRACT_TYPE: 'contract type',
        END_DATE: 'end date',
        CONTRACTOR: 'contractor',
        NOTIFICATION_PERIOD: 'notification period',
        PARENT_CONTRACT: 'parent contract',
        JURISDICTION: 'jurisdiction',
    };

    static ColumnNames = {
        START_DATE_FULL: 'start date',
        START_DATE_SHORT: 'start dt',
        START_DATE_ON: 'start on',
        START_DATE_TYPOS: 'strt date',

        CONTRACT_TYPE_FULL: 'contract type',
        CONTRACT_TYPE_SHORT: 'contract typ',
        CONTRACT_TYPE_TYPOS: 'contrct type',
        CONTRACT_TYPE_SHORTLY: 'type',

        END_DATE_FULL: 'end date',
        TERMINATION_DATE: 'termination',
        END_DATE_SHORT: 'end dt',
        END_DATE_TYPOS: 'ed date',

        CONTRACTOR_FULL: 'contractor',
        CONTRACTOR_TYPOS: 'contrctor',

        NOTIFICATION_PERIOD_FULL: 'notification',
        NOTIFICATION_PERIOD_SHORT: 'notice',

        PARENT_CONTRACT_FULL: 'parent contract',
        PARENT_CONTRACT_SHORT: 'parent',

        JURISDICTION_FULL: 'law or jurisdiction',
        JURISDICTION_SHORT: 'jurisdiction',
        LAW_SHORT: 'law ',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [ContractColumns.ColumnNames.START_DATE_FULL]: ContractColumns.Columns.START_DATE,
        [ContractColumns.ColumnNames.START_DATE_SHORT]: ContractColumns.Columns.START_DATE,
        [ContractColumns.ColumnNames.START_DATE_TYPOS]: ContractColumns.Columns.START_DATE,
        [ContractColumns.ColumnNames.START_DATE_ON]: ContractColumns.Columns.START_DATE,

        [ContractColumns.ColumnNames.CONTRACT_TYPE_FULL]: ContractColumns.Columns.CONTRACT_TYPE,
        [ContractColumns.ColumnNames.CONTRACT_TYPE_SHORT]: ContractColumns.Columns.CONTRACT_TYPE,
        [ContractColumns.ColumnNames.CONTRACT_TYPE_TYPOS]: ContractColumns.Columns.CONTRACT_TYPE,
        [ContractColumns.ColumnNames.CONTRACT_TYPE_SHORTLY]: ContractColumns.Columns.CONTRACT_TYPE,

        [ContractColumns.ColumnNames.END_DATE_FULL]: ContractColumns.Columns.END_DATE,
        [ContractColumns.ColumnNames.TERMINATION_DATE]: ContractColumns.Columns.END_DATE,
        [ContractColumns.ColumnNames.END_DATE_SHORT]: ContractColumns.Columns.END_DATE,
        [ContractColumns.ColumnNames.END_DATE_TYPOS]: ContractColumns.Columns.END_DATE,

        [ContractColumns.ColumnNames.CONTRACTOR_FULL]: ContractColumns.Columns.CONTRACTOR,
        [ContractColumns.ColumnNames.CONTRACTOR_TYPOS]: ContractColumns.Columns.CONTRACTOR,

        [ContractColumns.ColumnNames.NOTIFICATION_PERIOD_FULL]: ContractColumns.Columns.NOTIFICATION_PERIOD,
        [ContractColumns.ColumnNames.NOTIFICATION_PERIOD_SHORT]: ContractColumns.Columns.NOTIFICATION_PERIOD,

        [ContractColumns.ColumnNames.PARENT_CONTRACT_FULL]: ContractColumns.Columns.PARENT_CONTRACT,
        [ContractColumns.ColumnNames.PARENT_CONTRACT_SHORT]: ContractColumns.Columns.PARENT_CONTRACT,

        [ContractColumns.ColumnNames.JURISDICTION_FULL]: ContractColumns.Columns.JURISDICTION,
        [ContractColumns.ColumnNames.JURISDICTION_SHORT]: ContractColumns.Columns.JURISDICTION,
        [ContractColumns.ColumnNames.LAW_SHORT]: ContractColumns.Columns.JURISDICTION,
    };
}
export default ContractColumns;

