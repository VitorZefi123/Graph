import Rentability from '../ColumnValues/Rentability.js';
class RentabiltyParser {
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
        let rentability = null;

        for (const caption of Rentability.getAllCaptions()) {
            if (typeof caption === "string" && this.#sentence.toLowerCase().includes(caption.toLowerCase())) {
                rentability = caption;
                break;
            }
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }
        
        if (rentability) {
            result.push(`Rentability: ${rentability}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default RentabiltyParser;
