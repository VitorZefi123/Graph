class EmployeeFunctionParser {
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
        let userFunction = '';

        // Extract text inside double quotes
        const functionPattern = /"(.*?)"/;
        const match = functionPattern.exec(this.#sentence);
        if (match) {
            userFunction = match[1].trim();
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (userFunction) {
            result.push(`User Function: "${userFunction}"`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default EmployeeFunctionParser;
