import SystemColumns from './SystemColumns.js';
import SystemTradeParser from './SystemColumnParser/SystemTradeParser.js';
import SystemComponentCodeParser from './SystemColumnParser/SystemComponentCodeParser.js';
import SystemRequirementParser from './SystemColumnParser/SystemRequirementParser.js';
import SystemMaintainedParser from './SystemColumnParser/SystemMaintainedParser.js';
import SystemLocationParser from './SystemColumnParser/SystemLocationParser.js';

class SystemQuestionHandler {
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
        for (const [columnCalled, columnNameMapped] of Object.entries(SystemColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnName = columnNameMapped;
                break;
            }
        }

        if (columnName === SystemColumns.Columns.TRADE) {
            const tradeParser = new SystemTradeParser(columnName, this.tableName, this.sentence);
            return tradeParser.parse();
        }

        if (columnName === SystemColumns.Columns.CODE) {
            const codeParser = new SystemComponentCodeParser(columnName, this.tableName, this.sentence);
            return codeParser.parse();
        }

        if (columnName === SystemColumns.Columns.REQUIREMENT) {
            const requirementParser = new SystemRequirementParser(columnName, this.tableName, this.sentence);
            return requirementParser.parse();
        }

        if (columnName === SystemColumns.Columns.MAINTAINED_BY) {
            const maintainedByParser = new SystemMaintainedParser(columnName, this.tableName, this.sentence);
            return maintainedByParser.parse();
        }

        if (columnName === SystemColumns.Columns.SYSTEM_LOCATION) {
            const systemLocationParser = new SystemLocationParser(columnName, this.tableName, this.sentence);
            return systemLocationParser.parse();
        }
    }
}

export default SystemQuestionHandler;
