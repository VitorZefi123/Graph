import BuildingValues from '../LockersValues/BuildingValues.js';

class LockersBuildingParser {
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
        let buildingValue = null;

        for (const [buildingCalled, buildingUsed] of Object.entries(BuildingValues.typeToNameMap)) {
            if (this.#sentence.toLowerCase().includes(buildingCalled.toLowerCase())) {
                buildingValue = buildingUsed; 
                break;  
            }
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (buildingValue) {
            result.push(`Building Values: ${buildingValue}`);
        }

        return result;
    }
}

export default LockersBuildingParser;
