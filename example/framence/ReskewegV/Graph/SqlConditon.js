class SqlConditon {
    // Constructor to initialize the sentence
    constructor(sentence) {
        this.sentence = sentence;
    }
 

    parseSqlCondition() {
        console.log("Parsing Condition:", this.sentence);
debugger;
        const parts = this.sentence.split(/\s+OR\s+/i); 
        let conditionsAfterORSplit = [];

        for (let part of parts) {
            conditionsAfterORSplit.push(part); // Trim and process each "or" condition
        }

        let finalConditions = [];
        for (let orCondition of conditionsAfterORSplit) {
            let andConditions = orCondition.split(/\s+AND\s+/i).map(part => part.trim());
            finalConditions.push(andConditions); // Store the "and" split conditions
        }

        return finalConditions;
    }

}
 
export default SqlConditon;
 