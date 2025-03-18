import SystemTypeMapping from '../SystemColumnValues/SystemTypeMapping.js';

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

        for (const [typeCalled, typeNameMapped] of Object.entries(SystemTypeMapping.typeToNameMap)) {
            if (this.#sentence.toLowerCase().includes(typeCalled.toLowerCase())) {
                systemRequirement = typeNameMapped;
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
