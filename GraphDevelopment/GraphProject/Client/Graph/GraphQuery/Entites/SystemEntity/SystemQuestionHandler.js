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

    parseSentence() {
        return this.getValueFromType(this.sentence);
    }

    getValueFromType(sentence) {
        const columnNames = [];
        const responseVector = [];
    
        for (const [columnCalled, columnNameMapped] of Object.entries(SystemColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }

        if (columnNames.length === 0) {
            return null;
        }

        debugger;
    
        if  (columnNames.includes(SystemColumns.Columns.TRADE)){
            const tradeParser = new SystemTradeParser(SystemColumns.Columns.TRADE, this.tableName, this.sentence);
            responseVector.push(...tradeParser.parse());
        }
    
        if (columnNames.includes(SystemColumns.Columns.CODE)) {
            const codeParser = new SystemComponentCodeParser(SystemColumns.Columns.CODE, this.tableName, this.sentence);
            responseVector.push(...codeParser.parse());
        }
    
        if (columnNames.includes(SystemColumns.Columns.REQUIREMENT)) {
            const requirementParser = new SystemRequirementParser(SystemColumns.Columns.REQUIREMENT, this.tableName, this.sentence);
            responseVector.push(...requirementParser.parse());
        }
    
        if (columnNames.includes(SystemColumns.Columns.MAINTAINED_BY)) {
            const maintainedByParser = new SystemMaintainedParser(SystemColumns.Columns.MAINTAINED_BY, this.tableName, this.sentence);
            responseVector.push(...maintainedByParser.parse());
        }
    
        if (columnNames.includes(SystemColumns.Columns.SYSTEM_LOCATION)) {
            const systemLocationParser = new SystemLocationParser(SystemColumns.Columns.SYSTEM_LOCATION, this.tableName, this.sentence);
            responseVector.push(...systemLocationParser.parse());
        }
    
        return responseVector; 
    }
    
}

export default SystemQuestionHandler;
