class SystemTradeParser {
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
        let systemTrade = '';
        
        const tradePattern = /"([^"]+)"/;
        const match = tradePattern.exec(this.#sentence);

        if (match) {
            systemTrade = match[1]; 
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (systemTrade) {
            result.push(`System Trade: "${systemTrade}" `);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default SystemTradeParser;
