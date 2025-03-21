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
        let columnName = null;
        for (const [columnCalled, columnNameMapped] of Object.entries(LeasesColumn.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnName = columnNameMapped;
                break;
            }
        }

        if (columnName === LeasesColumn.Columns.END_ON) {
            const leaseEndOnParser = new LeasesEndParser(columnName, this.tableName, this.sentence);
            return leaseEndOnParser.parse();
        }

        if (columnName === LeasesColumn.Columns.NOTICE_PERIOD) {
            const leaseNoticePeriodParser = new LeasesNoticePeriodParser(columnName, this.tableName, this.sentence);
            return leaseNoticePeriodParser.parse();
        }
    }
}

export default LeasesQuestionHandler;
