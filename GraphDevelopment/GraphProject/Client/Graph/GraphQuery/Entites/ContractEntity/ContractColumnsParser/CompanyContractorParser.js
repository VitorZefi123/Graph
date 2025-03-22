class CompanyContractorParser {
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
        
        const companyPattern = /\[(.*?)\]/;

        const match = companyPattern.exec(this.#sentence);
        if (match) {
            companyName = match[1].trim();
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }
        
        if (companyName) {
            result.push(`Listing all contracts where contractor is: [${companyName}]`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default CompanyContractorParser;
