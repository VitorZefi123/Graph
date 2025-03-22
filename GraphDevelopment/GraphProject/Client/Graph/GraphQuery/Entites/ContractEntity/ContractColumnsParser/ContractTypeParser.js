import ContractTypeValues from '../ContractColumnValues/ContractTypeValues.js';

class ContractTypeParser {
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
        let contractType = null;

        // Find the contract type in the sentence
        for (const [contractTypeCalled, contractTypeUsed] of Object.entries(ContractTypeValues.typeToNameMap)) {
            if (this.#sentence.toLowerCase().includes(contractTypeCalled.toLowerCase())) {
                contractType = contractTypeUsed; 
                break;  
            }
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }
        
        if (contractType) {
            result.push(`Contract Type Identified: ${contractType}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default ContractTypeParser;
