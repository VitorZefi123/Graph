import AccordingValues from '../BuildingValues/AccordingValues.js';
import BuildingName from '../BuildingValues/BuildingName.js';

class BuildingAccordingParser {
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
        let accordingValue = null;

        for (const [buildingCalled, buildingUsed] of Object.entries(BuildingName.columnToNameMap)) {
            if (this.#sentence.toLowerCase().includes(buildingCalled.toLowerCase())) {
                buildingName = buildingUsed; 
                break;  
            }
        }

        for (const [accordingCalled, accordingUsed] of Object.entries(AccordingValues.columnToNameMap)) {
            if (this.#sentence.toLowerCase().includes(accordingCalled.toLowerCase())) {
                accordingValue = accordingUsed; 
                break;  
            }
        }

        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (buildingName) {
            result.push(`Building Name: ${buildingName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (accordingValue) {
            result.push(`According: ${accordingValue}`);
        }

        return result;
    }
}

export default BuildingAccordingParser;
