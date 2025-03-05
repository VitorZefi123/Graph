import FurnitureName from '../ColumnValues/FurnitureName.js';

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

        for (const name of FurnitureName.getAllFurnitureNames()) {
            if (typeof name === "string" && this.#sentence.toLowerCase().includes(name.toLowerCase())) {
                furniture = name;
                break;
            }
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
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
