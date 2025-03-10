import BillingPeriod from '../ColumnValues/BillingPeriod.js';

class ContractBillingParser {
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
        let billingPeriod = null;

        for (const caption of BillingPeriod.getAllCaptions()) {
            if (typeof caption === "string" && this.#sentence.includes(caption.toLowerCase())) {
                billingPeriod = caption;
                break;
            }
        }

        if (this.#tableName) {
            result.push(`Table Name: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name: ${this.#columnName}`);
        }
        
        if (billingPeriod) {
            result.push(`Billing Period: ${billingPeriod}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default ContractBillingParser;
