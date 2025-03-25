import FloorValues from '../LockersValues/FloorValues.js';

class LockersFloorParser {
    #columnName;
    #sentence;
    #tableName;

    constructor(columnName, tableName, sentence) {
        this.#columnName = columnName;
        this.#tableName = tableName;
        this.#sentence = sentence.toLowerCase();
    }

    parse() {
        const result = [];
        let floorValue = null;

        for (const [floorCalled, floorUsed] of Object.entries(FloorValues.typeToNameMap)) {
            if (this.#sentence.toLowerCase().includes(floorCalled.toLowerCase())) {
                floorValue = floorUsed; 
                break;  
            }
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (floorValue) {
            result.push(`Floor Values: ${floorValue}`);
        }

        return result;
    }
}

export default LockersFloorParser;
