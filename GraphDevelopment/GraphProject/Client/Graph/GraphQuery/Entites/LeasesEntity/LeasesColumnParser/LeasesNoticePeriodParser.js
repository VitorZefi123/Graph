class LeasesNoticePeriodParser {
    #columnName;
    #tableName;
    #sentence;
    #comparisonOperator

    constructor(columnName, tableName, sentence, comparisonOperator) {
        this.#columnName = columnName;
        this.#tableName = tableName;
        this.#sentence = sentence;
        this.#comparisonOperator =comparisonOperator;
    }

    parse() {
        debugger;
        const result = [];
        let noticePeriod = '';

        const noticePattern = /(\d+)/;
        const match = noticePattern.exec(this.#sentence);
        if (match) {
            noticePeriod = match[1]; 
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (this.#comparisonOperator !== undefined && this.#comparisonOperator !== null && this.#comparisonOperator !== '') {
            result.push(`Comparison Operator: ${this.#comparisonOperator}`);
        }

        if (noticePeriod) {
            result.push(`Notice Period: ${noticePeriod} months`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default LeasesNoticePeriodParser;
