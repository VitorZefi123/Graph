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
        let floorName = null;

       /* for (const [floorCalled, floorUsed] of Object.entries(FloorValues.typeToNameMap)) {
            if (this.#sentence.toLowerCase().includes(floorCalled.toLowerCase())) {
                floorValue = floorUsed; 
                break;  
            }
        } */

            const floorNamePattern = /\[(.*?)\]/;

            debugger;
            const match = floorNamePattern.exec(this.#sentence);
            if (match) {
                floorName = match[1].trim();
            }
    

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (floorName) {
            result.push(`Floor Values: ${floorName}`);
        }

        return result;
    }
}

export default LockersFloorParser;
