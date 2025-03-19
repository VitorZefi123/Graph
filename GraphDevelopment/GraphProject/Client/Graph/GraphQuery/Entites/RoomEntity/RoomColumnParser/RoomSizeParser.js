class RoomSizeParser {
    #columnName; 
    #sizeValue; 
    #unit; 
    #comparisonOperator; 
    #tableName;

    constructor(columnName, sizeValue, unit, comparisonOperator, tableName) {
        this.#columnName = columnName;
        this.#sizeValue = sizeValue;
        this.#comparisonOperator = comparisonOperator;
        this.#unit = unit;
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

        if (this.#sizeValue !== undefined && this.#sizeValue !== null && this.#sizeValue !== '') {
            result.push(`Size: ${this.#sizeValue}`);
        }

        if (this.#unit !== undefined && this.#unit !== null && this.#unit !== '') {
            result.push(`Unit: ${this.#unit}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default RoomSizeParser;
