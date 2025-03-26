import BuildingName from '../RoomValues/BuildingName.js';

class RoomBuildingParser {
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

        for (const [buildingCalled, buildingUsed] of Object.entries(BuildingName.columnToNameMap)) {
            if (this.#sentence.toLowerCase().includes(buildingCalled.toLowerCase())) {
                buildingName = buildingUsed; 
                break;  
            }
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (buildingName) {
            result.push(`Building Name: ${buildingName}`);
        }

        return result;
    }
}

export default RoomBuildingParser;
