import BuildingColumns from './BuildingColumns.js';
import BuildingAccordingParser from './BuildingColumnParser/BuildingAccordingParser.js';

class BuildingQuestionHandler {
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
        for (const [columnCalled, columnNameMapped] of Object.entries(BuildingColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }
    
        if (columnNames.length === 0) {
            return null;
        }
    
        // Check and parse for REQUIRED column
        if (columnNames.includes(BuildingColumns.Columns.EVALUATION)) {
            const buildingAccordingParser = new BuildingAccordingParser(BuildingColumns.Columns.EVALUATION, this.tableName, this.sentence);
            responseVector.push(...buildingAccordingParser.parse());
        }
    
        return responseVector;
    }
    
}

export default BuildingQuestionHandler;
