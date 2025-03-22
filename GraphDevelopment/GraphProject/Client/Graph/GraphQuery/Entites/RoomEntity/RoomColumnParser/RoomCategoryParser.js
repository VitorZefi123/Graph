class RoomCategoryParser {
    #columnName; 
    #categoryMatch;
    #tableName;

    constructor(columnName, categoryMatch, tableName) {
        this.#columnName = columnName;
        this.#categoryMatch = categoryMatch;
        this.#tableName = tableName;
    }

    parse() {
        const result = [];
        debugger;
        
        if (this.#tableName) {
            result.push(`Table Name ${this.#tableName}: ${this.#tableName}`);
        }

        if (this.#columnName) {
            result.push(`Column Name ${this.#columnName}: ${this.#columnName}`);
        }

        if (this.#categoryMatch && this.#categoryMatch.dinKey !== undefined && this.#categoryMatch.dinKey !== null && this.#categoryMatch.dinKey !== '') {
            result.push(`Category: ${this.#categoryMatch.dinKey}`);
        }

        if (this.#categoryMatch && this.#categoryMatch.category !== undefined && this.#categoryMatch.category !== null && this.#categoryMatch.key !== '') {
            result.push(`Subcategory: ${this.#categoryMatch.category}`);
        }

        if (result.length === 0) {
            result.push('N/A');
        }

        return result;
    }
}

export default RoomCategoryParser;
