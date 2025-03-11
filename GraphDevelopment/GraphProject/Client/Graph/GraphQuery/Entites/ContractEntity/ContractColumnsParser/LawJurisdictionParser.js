class LawJurisdictionParser {
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
        let country = '';

        const lawPattern = /\[(.*?)\]/;

        const match = lawPattern.exec(this.#sentence);
        if (match) {
            country = match[1].trim();
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (country) {
            result.push(`Contracts where law/jurisdiction is: [${country}]`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default LawJurisdictionParser;
