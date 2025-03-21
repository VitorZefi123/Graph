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
        let columnName = null;
        for (const [columnCalled, columnNameMapped] of Object.entries(AssetColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnName = columnNameMapped;
                break;
            }
        }

        if (columnName === AssetColumns.Columns.REQUIRED) {
            const assetRequiredParser = new AssetRequirementParser(columnName, this.tableName, this.sentence);
            return assetRequiredParser.parse();
        }
    }
}

export default AssetQuestionHandler;
