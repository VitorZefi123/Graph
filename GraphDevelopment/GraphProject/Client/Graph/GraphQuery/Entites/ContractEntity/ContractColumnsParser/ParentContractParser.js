class ParentContractParser {
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
        let parentContract = '';

        // Regex pattern to extract text inside square brackets []
        const contractPattern = /\[(.*?)\]/;

        const match = contractPattern.exec(this.#sentence);
        if (match) {
            parentContract = match[1].trim();
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (parentContract) {
            result.push(`Parent Contract: [${parentContract}]`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default ParentContractParser;
