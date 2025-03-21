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
        let columnName = null;
        for (const [columnCalled, columnNameMapped] of Object.entries(LevelColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnName = columnNameMapped;
                break;
            }
        }

        if (columnName === LevelColumns.Columns.NAME) {
            const levelNameParser = new LevelNameParser(columnName, this.tableName, this.sentence);
            return levelNameParser.parse();
        }

        if (columnName === LevelColumns.Columns.CONTENT) {
            const levelContentParser = new LevelContentParser(columnName, this.tableName, this.sentence);
            return levelContentParser.parse();
        }
    }
}

export default LevelQuestionHandler;
