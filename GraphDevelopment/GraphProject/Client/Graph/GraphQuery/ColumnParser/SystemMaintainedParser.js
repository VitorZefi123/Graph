class SystemMaintainedParser {
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
        let maintained = '';

        const maintainedPattern = /\[(.*?)\]/;

        debugger;
        const match = maintainedPattern.exec(this.#sentence);
        if (match) {
            maintained = match[1].trim();
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (maintained) {
            result.push(`System Maintanied: [${maintained}]`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default SystemMaintainedParser;
