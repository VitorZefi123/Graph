import ServiceType from '../ColumnValues/ServiceType.js';

class ServiceTypeParser {
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
        let matchedStandard = null;

        // Iterate over service types and check if the sentence contains a matching type
        for (const [serviceType, standard] of Object.entries(ServiceType.typeToStandardMap)) {
            debugger;
            if (typeof serviceType === "string" && this.#sentence.toLowerCase().includes(serviceType.toLowerCase())) {
                matchedStandard = standard;
                break;
            }
        }

        debugger;
        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (matchedStandard) {
            result.push(`Standard: ${matchedStandard}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default ServiceTypeParser;
