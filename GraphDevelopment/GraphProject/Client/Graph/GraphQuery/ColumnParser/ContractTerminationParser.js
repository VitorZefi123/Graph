class ContractTerminationParser {
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
        let terminationDate = null;

        // Regular expression to match date formats like DD/MM/YYYY or MM/DD/YYYY
        const datePattern = /\b(\d{1,2}[\/.-]\d{1,2}[\/.-]\d{4})\b/;
        const match = this.#sentence.match(datePattern);

        if (match) {
            terminationDate = match[1];
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }
        
        if (terminationDate) {
            result.push(`Contract Termination Date: ${terminationDate}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default ContractTerminationParser;
