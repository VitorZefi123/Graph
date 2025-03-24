import LanguageTypeValues from '../DrawingColumnValues/LanguageTypeValues.js';
class DrawingLanguageParser {
    #columnName;
    #sentence;
    #tableName;

    constructor(columnName,tableName, sentence) {
        this.#columnName = columnName;
        this.#tableName = tableName;
        this.#sentence = sentence;
    }

    parse() {
        const result = [];
        let language = null;

        for (const [shortName, fullName] of Object.entries(LanguageTypeValues.typeToNameMap)) {
            if (this.#sentence.toLowerCase().includes(shortName.toLowerCase())) {
                language = fullName;
              break;
            }
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (language) {
            result.push(`Language: ${language}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default DrawingLanguageParser;
