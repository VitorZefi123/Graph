class UserAccountParser {
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
        let prefix = "N/A";

        if (this.#sentence.toLowerCase().includes(" not ")) {
            prefix = "Not Have";
        } else {
            prefix = "Have";
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Account Value: ${prefix} ${this.#columnName}`);
        }

        return result;
    }
}

export default UserAccountParser;
