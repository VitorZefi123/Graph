import ParkingColumn from './ParkingColumn.js';
import ParkingBookingParser from './ParkingColumnParser/ParkingBookingParser.js';

class ParkingQuestionHandler {
    constructor(sentence, tableName) {
        this.tableName = tableName;
        this.sentence = sentence;
    }

    parseSentence() {
        return this.getValueFromType(this.sentence);
    }

    getValueFromType(sentence) {
        const responseVector = [];
        const columnNames = []; 
    
        for (const [columnCalled, columnNameMapped] of Object.entries(ParkingColumn.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }

        if (columnNames.length === 0) {
            return null;
        }
    
        if (columnNames.includes(ParkingColumn.Columns.BOOK)) {
            const parkingBookingParser = new ParkingBookingParser(ParkingColumn.Columns.BOOK, this.tableName, this.sentence);
            responseVector.push(...parkingBookingParser.parse());
        }
    
        return responseVector; 
    }
}

export default ParkingQuestionHandler;
