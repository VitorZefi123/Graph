class ParkingColumns {
    static Columns = {
        BOOK: 'book', // Only Book column remains
    };

    static ColumnNames = {
        BOOK_SHORT: 'book',
        RESERVED_SHORT: 'reserve',
    };

    // Mapping from variations to standard column names
    static columnToNameMap = {
        [ParkingColumns.ColumnNames.BOOK_SHORT]: ParkingColumns.Columns.BOOK,
        [ParkingColumns.ColumnNames.RESERVED_SHORT]: ParkingColumns.Columns.BOOK,
    };
}

export default ParkingColumns;
