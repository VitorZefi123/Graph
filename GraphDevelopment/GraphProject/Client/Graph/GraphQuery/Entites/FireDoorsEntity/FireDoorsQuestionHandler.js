import FireDoorsColumn from './FireDoorsColumn.js';
import FireDoorsRequirementParser from './FireDoorsColumnParser/FireDoorsRequirementParser.js';

class FireDoorsQuestionHandler {
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
    
        for (const [columnCalled, columnNameMapped] of Object.entries(FireDoorsColumn.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }
    
        if (columnNames.length === 0) {
            return null;
        }
    
        if (columnNames.includes(FireDoorsColumn.Columns.REQUIRED)) {
            const fireDoorsRequirementParser = new FireDoorsRequirementParser(FireDoorsColumn.Columns.REQUIRED, this.tableName, this.sentence);
            responseVector.push(...fireDoorsRequirementParser.parse());
        }
    
        return responseVector;
    }
    
}

export default FireDoorsQuestionHandler;
