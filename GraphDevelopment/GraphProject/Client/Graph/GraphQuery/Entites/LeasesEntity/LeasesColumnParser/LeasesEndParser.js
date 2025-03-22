class LeasesEndParser {
    #columnName;
    #tableName;
    #sentence;

    constructor(columnName, tableName, sentence) {
        this.#columnName = columnName;
        this.#tableName = tableName;
        this.#sentence = sentence;
    }

    parse() {
        const result = [];
        let leaseEndDate = '';
        const datePattern = /\[(.*?)\]/;

        debugger;
        const match = datePattern.exec(this.#sentence);
        if (match) {
            leaseEndDate = match[1].trim();
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (leaseEndDate) {
            result.push(`Lease Ends On: [${leaseEndDate}]`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default LeasesEndParser;
