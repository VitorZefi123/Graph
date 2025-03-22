import DateDifferentTypeMapping from '../ContractColumnValues/DateDifferentTypeMapping.js';
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
        let mappedDateType = null;

        // Regular expression to match date formats like DD/MM/YYYY or MM/DD/YYYY
        const datePattern = /\b(\d{1,2}[\/.-]\d{1,2}[\/.-]\d{4})\b/;
        const match = this.#sentence.match(datePattern);

        for (const [dateTypeCalled, dateTypeMapped] of Object.entries(DateDifferentTypeMapping.typeToNameMap)) {
            if (this.#sentence.toLowerCase().includes(dateTypeCalled.toLowerCase())) {
                mappedDateType = dateTypeMapped;
                break;
            }
        }

        if (match) {
            terminationDate = match[1];
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }
        
        if (terminationDate) {
            result.push(`Contract Termination Date: ${terminationDate}`);
        }

        if(mappedDateType){
            result.push(`Contract Date diff: ${mappedDateType}`)
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default ContractTerminationParser;
