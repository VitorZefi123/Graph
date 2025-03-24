import FurnitureNameValues from '../FurnitureColumnValues/FurnitureNameValues.js';

class FurnitureNameParser {
    #columnName;
    #sentence;
    #tableName;

    constructor(columnName, tableName, sentence) {
        this.#columnName = columnName;
        this.#tableName = tableName;
        this.#sentence = sentence;
    }

    parse() {
        const result = [];
        let furniture = null;

        for (const [shortName, fullName] of Object.entries(FurnitureNameValues.typeToNameMap)) {
            if (this.#sentence.toLowerCase().includes(shortName.toLowerCase())) {
                furniture = fullName;
              break;
            }
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (furniture) {
            result.push(`Furniture Name: ${furniture}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default FurnitureNameParser;
