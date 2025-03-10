class ContractTypeParser {
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

        let isApproved = this.#sentence.toLowerCase().includes("approved");
       

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }
 
        if (isApproved) {
        result.push(`Approved: Approved`);    
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default ContractTypeParser;
