import AccountStatus from '../ColumnValues/AccountStatus.js';

class AccountStatusParser {
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
        let accountStatus = null;

        for (const status of AccountStatus.getAllStatuses()) {
            if (typeof status === "string" && this.#sentence.toLowerCase().includes(status.toLowerCase())) {
                accountStatus = status;
                break;
            }
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (accountStatus) {
            result.push(`Account Status: ${accountStatus}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default AccountStatusParser;
