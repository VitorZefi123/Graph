import Floor  from '../ColumnValues/Floor.js'; 

class FloorParser {
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
        let floor = null;

        for (const caption of Floor.getAllCaptions()) {
            if (typeof caption === "string" && this.#sentence.toLowerCase().includes(caption.toLowerCase())) {
                floor = caption;
                break;
            }
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }
        
        if (floor) {
            result.push(`Floor: ${floor}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default FloorParser;
