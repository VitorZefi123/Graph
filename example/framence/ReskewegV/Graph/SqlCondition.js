import SentenceParser from './SentenceParser.js';

class SqlCondition {
    constructor(lhs, logicOp, rhs) {
        this.lhs = lhs;
        this.logicOp = logicOp;
        this.rhs = rhs;
    }

    static parseSqlCondition(sentence) {
        debugger;
        console.log("Parsing Condition:", sentence);
        
        // First, split by OR
        let orParts = sentence.split(/\s+OR\s+/i).map(part => part.trim());

        if (orParts.length > 1) {
            // Recursively parse left and right side of OR
            return new SqlCondition(
                SqlCondition.parseSqlCondition(orParts[0]),
                "OR",
                SqlCondition.parseSqlCondition(orParts.slice(1).join(" OR "))
            );
        }

        // If no OR, split by AND
        let andParts = sentence.split(/\s+AND\s+/i).map(part => part.trim());

        if (andParts.length > 1) {
            // Recursively parse left and right side of AND
            return new SqlCondition(
                SqlCondition.parseSqlCondition(andParts[0]),
                "AND",
                SqlCondition.parseSqlCondition(andParts.slice(1).join(" AND "))
            );
        }

        // If no AND/OR, it's a simple condition, parse it
        const parser = new SentenceParser(sentence);
        return parser.parseSentence();
    }
}

export default SqlCondition;
