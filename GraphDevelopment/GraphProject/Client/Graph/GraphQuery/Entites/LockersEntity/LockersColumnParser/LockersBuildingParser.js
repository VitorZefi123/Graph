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
        let buildingName = null;

      /*  for (const [buildingCalled, buildingUsed] of Object.entries(BuildingValues.typeToNameMap)) {
            if (this.#sentence.toLowerCase().includes(buildingCalled.toLowerCase())) {
                buildingValue = buildingUsed; 
                break;  
            }
        }*/

            const buildingNamePattern = /\[(.*?)\]/;

            debugger;
            const match = buildingNamePattern.exec(this.#sentence);
            if (match) {
                buildingName = match[1].trim();
            }


        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (buildingName) {
            result.push(`Building Values: ${buildingName}`);
        }

        return result;
    }
}

export default LockersBuildingParser;
