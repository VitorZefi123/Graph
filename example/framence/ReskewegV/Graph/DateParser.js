class DateParser {
    #columnName; 
    #dateValue; 
    #comparisonOperator; 

    constructor(columnName, dateValue, comparisonOperator) {
        this.#comparisonOperator = comparisonOperator;
        this.#columnName = columnName;
        this.#dateValue = dateValue;
    }

    parse() {
        const result = [];

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

export default DateParser;
