class RoomDateParser {
    #columnName; 
    #dateValue; 
    #comparisonOperator; 
    #tableName 

    constructor(columnName, dateValue, comparisonOperator, tableName) {
        this.#comparisonOperator = comparisonOperator;
        this.#columnName = columnName;
        this.#dateValue = dateValue;
        this.#tableName = tableName;
    }

    parse() {
        const result = [];
        
        if (this.#tableName !== undefined && this.#tableName !== null && this.#tableName !== '') {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName !== undefined && this.#columnName !== null && this.#columnName !== '') {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (this.#comparisonOperator !== undefined && this.#comparisonOperator !== null && this.#comparisonOperator !== '') {
            result.push(`Comparison Operator: ${this.#comparisonOperator}`);
        }

        if (this.#dateValue !== undefined && this.#dateValue !== null && this.#dateValue !== '') {
            result.push(`Raw Date: ${this.#dateValue}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }

}

export default RoomDateParser;
