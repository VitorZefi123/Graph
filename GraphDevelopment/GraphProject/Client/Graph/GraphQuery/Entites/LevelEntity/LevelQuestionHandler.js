import LevelColumns from './LevelColumns.js';
import LevelNameParser from './LevelColumnParser/LevelNameParser.js';
import LevelContentParser from './LevelColumnParser/LevelContentParser.js';

class LevelQuestionHandler {
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
    
        for (const [columnCalled, columnNameMapped] of Object.entries(LevelColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }

        if (columnNames.length === 0) {
            return null;
        }
    
        if (columnNames.includes(LevelColumns.Columns.NAME)) {
            const levelNameParser = new LevelNameParser(LevelColumns.Columns.NAME, this.tableName, this.sentence);
            responseVector.push(...levelNameParser.parse());
        }
    
        if (columnNames.includes(LevelColumns.Columns.CONTENT)) {
            const levelContentParser = new LevelContentParser(LevelColumns.Columns.CONTENT, this.tableName, this.sentence);
            responseVector.push(...levelContentParser.parse());
        }
    
        return responseVector; 
    }
    
}

export default LevelQuestionHandler;
