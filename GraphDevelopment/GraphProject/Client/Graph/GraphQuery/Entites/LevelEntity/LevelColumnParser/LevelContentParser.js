class LevelContentParser {
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
        let levelContent = '';
        debugger;

        // Extract text inside double asterisks (**)
        const contentPattern = /\*(.*?)\*/;
        const match = contentPattern.exec(this.#sentence);
        if (match) {
            levelContent = match[1].trim();
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (levelContent) {
            result.push(`Level Content: *${levelContent}*`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default LevelContentParser;
