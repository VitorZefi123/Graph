import LeasesColumn from './LeasesColumn.js';
import LeasesEndParser from './LeasesColumnParser/LeasesEndParser.js';
import LeasesNoticePeriodParser from './LeasesColumnParser/LeasesNoticePeriodParser.js';

class LeasesQuestionHandler {
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
    
        for (const [columnCalled, columnNameMapped] of Object.entries(LeasesColumn.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }

        if (columnNames.length === 0) {
            return null;
        }
    
        if (columnNames.includes(LeasesColumn.Columns.END_ON)) {
            const leaseEndOnParser = new LeasesEndParser(LeasesColumn.Columns.END_ON, this.tableName, this.sentence);
            responseVector.push(...leaseEndOnParser.parse());
        }
    
        if (columnNames.includes(LeasesColumn.Columns.NOTICE_PERIOD)) {
            const leaseNoticePeriodParser = new LeasesNoticePeriodParser(LeasesColumn.Columns.NOTICE_PERIOD, this.tableName, this.sentence);
            responseVector.push(...leaseNoticePeriodParser.parse());
        }
    
        return responseVector; 
    }
    
}

export default LeasesQuestionHandler;
