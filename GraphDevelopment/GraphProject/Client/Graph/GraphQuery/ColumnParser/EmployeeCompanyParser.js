class EmployeeCompanyParser {
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
        let companyName = '';

        // Regex pattern to extract text inside square brackets []
        const companyPattern = /\[(.*?)\]/;

        const match = companyPattern.exec(this.#sentence);
        if (match) {
            companyName = match[1].trim();
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (companyName) {
            result.push(`Employee Company: [${companyName}]`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default EmployeeCompanyParser;
