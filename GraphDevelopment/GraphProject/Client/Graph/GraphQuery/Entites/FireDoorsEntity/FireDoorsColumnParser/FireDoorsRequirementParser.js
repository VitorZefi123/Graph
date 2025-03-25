import FireDoorsRequirment from '../FireDoorsValues/FireDoorsRequirment.js';

class FireDoorsRequirementParser {
    #columnName;
    #sentence;
    #tableName;

    constructor(columnName, tableName, sentence) {
        this.#columnName = columnName;
        this.#tableName = tableName;
        this.#sentence = sentence.toLowerCase();
    }

    parse() {
        const result = [];
        let fireDoorsRequirement = null;
        let requirementStatus = this.#sentence.includes("not") ? "not do" : "do";

        for (const [fireDoorsCalled, fireDoorsUsed] of Object.entries(FireDoorsRequirment.typeToNameMap)) {
            if (this.#sentence.toLowerCase().includes(fireDoorsCalled.toLowerCase())) {
                fireDoorsRequirement = fireDoorsUsed; 
                break;  
            }
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }
        if (fireDoorsRequirement) {
            result.push(`Requirement Status: ${requirementStatus}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (fireDoorsRequirement) {
            result.push(`Fire Doors Requirement: ${fireDoorsRequirement}`);
        }

        return result;
    }
}

export default FireDoorsRequirementParser;
