import SystemRequirement from '../ColumnValues/SystemRequirement.js';

class SystemRequirementParser {
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
        let systemRequirement = null;

        for (const caption of SystemRequirement.getAllCaptions()) {
            if (typeof caption === "string" && this.#sentence.toLowerCase().includes(caption.toLowerCase())) {
                systemRequirement = caption;
                break;
            }
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (systemRequirement) {
            result.push(`System Requirement: ${systemRequirement}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default SystemRequirementParser;
