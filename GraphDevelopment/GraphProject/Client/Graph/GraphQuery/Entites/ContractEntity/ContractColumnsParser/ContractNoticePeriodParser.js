class ContractNoticePeriodParser {
    #columnName;
    #tableName;
    #sentence;

    constructor(columnName, tableName, sentence) {
        this.#columnName = columnName;
        this.#tableName = tableName;
        this.#sentence = sentence;
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
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
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

export default ContractNoticePeriodParser;
