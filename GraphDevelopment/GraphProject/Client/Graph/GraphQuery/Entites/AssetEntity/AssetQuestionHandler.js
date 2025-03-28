import AssetColumns from './AssetColumns.js';
import AssetRequirementParser from './AssetColumnParser/AssetRequirementParser.js';

class AssetQuestionHandler {
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
        for (const [columnCalled, columnNameMapped] of Object.entries(AssetColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }
    
        if (columnNames.length === 0) {
            return null;
        }
    
        // Check and parse for REQUIRED column
        if (columnNames.includes(AssetColumns.Columns.REQUIRED)) {
            const assetRequiredParser = new AssetRequirementParser(AssetColumns.Columns.REQUIRED, this.tableName, this.sentence);
            responseVector.push(...assetRequiredParser.parse());
        }
    
        return responseVector;
    }
    
}

export default AssetQuestionHandler;
