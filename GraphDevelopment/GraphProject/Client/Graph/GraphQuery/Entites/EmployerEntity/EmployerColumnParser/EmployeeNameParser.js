class EmployeeNameParser {
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
        let employeeName = '';

        const namePattern = /\[(.*?)\]/;

        const match = namePattern.exec(this.#sentence);
        if (match) {
            employeeName = match[1].trim();
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (employeeName) {
            result.push(`Employee Name: [${employeeName}]`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default EmployeeNameParser;
