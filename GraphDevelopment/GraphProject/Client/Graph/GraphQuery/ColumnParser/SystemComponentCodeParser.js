class SystemComponentCodeParser {
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
        let componentCode = '';

        // Regular expression to extract text within double quotes
        const codePattern = /"([^"]+)"/;
        const match = codePattern.exec(this.#sentence);

        if (match) {
            componentCode = match[1]; 
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (componentCode) {
            result.push(`System Component Code: "${componentCode}"`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default SystemComponentCodeParser;
