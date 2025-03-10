class SystemLocationParser {
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
        let location = '';

        const locationPattern = /\[(.*?)\]/;

        debugger;
        const match = locationPattern.exec(this.#sentence);
        if (match) {
            location = match[1].trim();
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (location) {
            result.push(`System Location: [${location}]`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default SystemLocationParser;
