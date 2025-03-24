import FurnitureColumns from "./FurnitureColumns.js";
import FurnitureNameParser from "./FurnitureColumnParser/FurnitureNameParser.js";

class FurnitureQuestionHandler {
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

        // Check for column names in the sentence
        for (const [columnCalled, columnNameMapped] of Object.entries(FurnitureColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }

        if (columnNames.length === 0) {
            return null;
        }

        if (columnNames.includes(FurnitureColumns.Columns.NAME)) {
            const furnitureNameParser = new FurnitureNameParser(FurnitureColumns.Columns.NAME, this.tableName, this.sentence);
            responseVector.push(...furnitureNameParser.parse());
        }

        return responseVector;
    }
}

export default FurnitureQuestionHandler;
