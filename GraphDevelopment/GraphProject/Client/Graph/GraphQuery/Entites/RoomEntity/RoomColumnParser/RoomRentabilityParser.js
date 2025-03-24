import Rentability from '../RoomValues/Rentability.js';
class RoomRentabilityParser {
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

        for (const [shortName, fullName] of Object.entries(Rentability.typeToNameMap)) {
            if (this.#sentence.toLowerCase().includes(shortName.toLowerCase())) {
                rentability = fullName;
              break;
            }
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
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

export default RoomRentabilityParser;
