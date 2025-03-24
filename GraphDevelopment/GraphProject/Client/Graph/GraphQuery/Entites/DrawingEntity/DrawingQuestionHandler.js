import DrawingColumns from "./DrawingColumns.js";
import DrawingLanguageParser from "./DrawingColumnsParser/DrawingLanguageParser.js";

class DrawingQuestionHandler {
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
        for (const [columnCalled, columnNameMapped] of Object.entries(DrawingColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }

        if (columnNames.length === 0) {
            return null;
        }

        if (columnNames.includes(DrawingColumns.Columns.LANGUAGE)) {
            const drawingLanguageParser = new DrawingLanguageParser(DrawingColumns.Columns.LANGUAGE, this.tableName, this.sentence);
            responseVector.push(...drawingLanguageParser.parse());
        }

        return responseVector;
    }
}

export default DrawingQuestionHandler;
