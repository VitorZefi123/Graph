import SentenceParser from './SentenceParser.js';

class SqlCondition {
    constructor(lhs, logicOp, rhs) {
        this.lhs = lhs;
        this.logicOp = logicOp;
        this.rhs = rhs;
    }

   parseSqlCondition(sentence, tableName) {
        debugger;
        console.log("Parsing Condition:", sentence);
        
        let orParts = sentence.split(/\s+OR\s+/).map(part => part.trim());

        if (orParts.length > 1) {
            // Recursively parse left and right side of OR
            return new SqlCondition(
                new SqlCondition().parseSqlCondition(orParts[0], tableName),
                "OR",
                new SqlCondition().parseSqlCondition(orParts.slice(1).join(" OR "),tableName)
            );
        }

        // If no OR, split by AND
        let andParts = sentence.split(/\s+AND\s+/).map(part => part.trim());

        if (andParts.length > 1) {
            // Recursively parse left and right side of AND
            return new SqlCondition(
                new SqlCondition().parseSqlCondition(andParts[0], tableName),
                "AND",
                new SqlCondition().parseSqlCondition(andParts.slice(1).join(" AND "), tableName)
            );
        }

        // If no AND/OR, it's a simple condition, parse it
        const parser = new SentenceParser(sentence, tableName);
        const test = parser.parseSentence();
        debugger;
        return test;
    }
}

export default SqlCondition;
