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


    static ColumnId ={
        NAME_Id: 'StructureObject.Designation',
    };

    static columnToIdMap = {
        [FurnitureColumns.Columns.NAME]: FurnitureColumns.ColumnId.NAME_Id,

    };

    static getIdByColumnName(columnName) {
        return this.columnToIdMap[columnName];
      }
}

export default FurnitureColumns;
