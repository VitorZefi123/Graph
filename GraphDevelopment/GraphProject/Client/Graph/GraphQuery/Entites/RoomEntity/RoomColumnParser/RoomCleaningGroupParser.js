class RoomCleaningGroupParser {
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
        let hasCleaningGroup = 'have'; 

        debugger;

        if (/\bnot\b/i.test(this.#sentence)) {
            hasCleaningGroup = 'not have';
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        result.push(`Has Cleaning Group: ${hasCleaningGroup}`);

        return result;
    }
}

export default RoomCleaningGroupParser;
