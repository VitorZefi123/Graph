class RoomWorkstationParser {
    #columnName;
    #sentence;
    #tableName;
    #comparisonOperator; 

    constructor(columnName, tableName, sentence, comparisonOperator) {
        this.#columnName = columnName;
        this.#tableName = tableName;
        this.#comparisonOperator = comparisonOperator;
        this.#sentence = sentence.toLowerCase();
    }

    parse() {
        const result = [];
        const numberRegex = /[-+]?[0-9]*\.?[0-9]+/;  
        const numberMatch = this.#sentence.match(numberRegex);


        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (this.#comparisonOperator) {
            result.push(`Comparison Operator: ${this.#comparisonOperator}`);
        }

        if (numberMatch) {
            result.push(`Size: ${numberMatch} `);
        }

        return result;
    }
}

export default RoomWorkstationParser;
