import UserFunction from '../ColumnValues/UserFunction.js';

class UserFunctionParser {
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
        let userFunction = null;

        for (const role of UserFunction.getAllRoles()) {
            if (typeof role === "string" && this.#sentence.toLowerCase().includes(role.toLowerCase())) {
                userFunction = role;
                break;
            }
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (userFunction) {
            result.push(`User Function: ${userFunction}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default UserFunctionParser;
