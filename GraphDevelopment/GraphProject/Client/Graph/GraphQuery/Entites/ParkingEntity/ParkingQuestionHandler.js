import ParkingColumn from './ParkingColumn.js';
import ParkingBookingParser from './ParkingColumnParser/ParkingBookingParser.js';

class ParkingQuestionHandler {
    constructor(sentence, tableName) {
        this.tableName = tableName;
        this.sentence = sentence;
    }

    // Method to process the sentence
    parseSentence() {
        return this.getValueFromType(this.sentence);
    }

    getValueFromType(sentence) {
        let columnName = null;

        // Check if the sentence contains any unit
        for (const [columnCalled, columnNameMapped] of Object.entries(ParkingColumn.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnName = columnNameMapped;
                break;
            }
        }

        if (columnName === ParkingColumn.Columns.BOOK) {
            const parkingBookingParser = new ParkingBookingParser(columnName, this.tableName, this.sentence);
            return parkingBookingParser.parse();
        }
    }
}

export default ParkingQuestionHandler;
