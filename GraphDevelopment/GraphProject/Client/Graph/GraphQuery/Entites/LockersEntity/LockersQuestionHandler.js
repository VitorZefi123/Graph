import LockersColumns from './LockersColumns.js';
import LockersBuildingParser from './LockersColumnParser/LockersBuildingParser.js';
import LockersFloorParser from './LockersColumnParser/LockersFloorParser.js';

class LockersQuestionHandler {
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
    
        // Collect matching column names
        for (const [columnCalled, columnNameMapped] of Object.entries(LockersColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }
    
        if (columnNames.length === 0) {
            return null;
        }
    
        if (columnNames.includes(LockersColumns.Columns.BUILDING)) {
            const lockersBuildingParser = new LockersBuildingParser(LockersColumns.Columns.BUILDING, this.tableName, this.sentence);
            responseVector.push(...lockersBuildingParser.parse());
        }

        if (columnNames.includes(LockersColumns.Columns.FLOOR)) {
            const lockersFloorParser = new LockersFloorParser(LockersColumns.Columns.FLOOR, this.tableName, this.sentence);
            responseVector.push(...lockersFloorParser.parse());
        }
    
        return responseVector;
    }
    
}

export default LockersQuestionHandler;
