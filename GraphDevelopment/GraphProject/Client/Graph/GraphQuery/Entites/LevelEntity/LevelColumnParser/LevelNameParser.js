class LevelNameParser {
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
        let levelNumber = '';
        debugger;

        const levelPattern = /(\d+)/;
        const match = levelPattern.exec(this.#sentence);
        if (match) {
            levelNumber = match[1]; 
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (levelNumber) {
            result.push(`Level Number: ${levelNumber} floor`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default LevelNameParser;
