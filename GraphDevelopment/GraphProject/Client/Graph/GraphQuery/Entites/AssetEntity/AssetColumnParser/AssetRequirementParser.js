import AssetRequirement from '../AssetValues/AssetRequirement.js';

class AssetRequirementParser {
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
        let assetRequirement = null;
        let requirementStatus = this.#sentence.includes("not") ? "not do" : "do";

        for (const caption of AssetRequirement.getAllCaptions()) {
            if (typeof caption === "string" && this.#sentence.includes(caption.toLowerCase())) {
                assetRequirement = caption;
                break;
            }
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (assetRequirement) {
            result.push(`Requirement Status: ${requirementStatus}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }

        if (assetRequirement) {
            result.push(`Asset Requirement: ${assetRequirement}`);
        }

        return result;
    }
}

export default AssetRequirementParser;
