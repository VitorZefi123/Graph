class CategoryParser {
    #columnName; 
    #categoryMatch;

    constructor(columnName, categoryMatch) {
        this.#columnName = columnName;
        this.#categoryMatch = categoryMatch;
    }

    parse() {
        const result = [];
        debugger;

        if (this.#columnName !== undefined && this.#columnName !== null && this.#columnName !== '') {
            result.push(`Column Name: ${this.#columnName}`);
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

export default CategoryParser;
