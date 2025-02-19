import Comparison from './Comparison.js';
import AreaUnit from './AreaUnit.js';
import Columns from './Columns.js';
import Category from './Category.js';
 
class SentenceParser {
    // Constructor to initialize the sentence
    constructor(sentence) {
        this.sentence = sentence;
    }
 
    // Method to process the sentence
    parseSentence() {
        console.log("Parsing sentence:", this.sentence);
 
        // Call getValueFromType to process the sentence
        return this.getValueFromType(this.sentence);
    }
 
     getValueFromType(sentence) {
        const result = {
            columnName: null,
            comparisonOperator: null,
            value: null,
            unit: null
        };
   debugger;

   for (const column of Columns.getAllColumns()) {
    if (typeof column === "string" && sentence.toLowerCase().includes(column.toLowerCase())) {
        result.columnName = column;
        break; 
    }
}
        // Check if the sentence contains any comparison term
        for (const [term, operator] of Object.entries(Comparison.termToOperatorMap)) {
            if (sentence.toLowerCase().includes(term)) {
                result.comparisonOperator = operator;
                break; 
            }
        }
   
        // Check if the sentence contains any unit
        for (const [unit, unitName] of Object.entries(AreaUnit.unitToNameMap)) {
            if (sentence.toLowerCase().includes(unit)) {
                result.unit = unitName;
                break; 
            }
        }
    
        this.findCategoryOrValue(sentence, result);
  
        return [
            `Column Name: ${result.columnName || 'N/A'}`,
            `Comparison Operator: ${result.comparisonOperator || 'N/A'}`,
            `Value: ${result.value || 'N/A'}`,
            `Unit: ${result.unit || 'N/A'}`
        ];
       }

        findCategoryOrValue(sentence, result) {
    
        const dateRegex = /\b(?:\d{4}-\d{2}-\d{2}|\d{2}[\/.-]\d{2}[\/.-]\d{4})\b/;
        const numberRegex = /[-+]?[0-9]*\.?[0-9]+/;  
        const categoryMatch = this.findCategory(sentence);
        const dateMatch = sentence.match(dateRegex);
        const numberMatch = sentence.match(numberRegex);

        if (result.columnName == Columns.CATEGORY ) {
            result.value = categoryMatch.dinKey;
            result.unit = categoryMatch.key
        }
        else if (result.columnName == Columns.DATE) {
            result.value = dateMatch[0];
        }
        else if (result.columnName == Columns.ROOM_SIZE) {
            result.value = parseFloat(numberMatch[0]);
        }
    }

    findCategory(sentence) {
        for (const dinKey in Category.getCategoryMapping()) {
            const category = Category.getCategoryMapping()[dinKey];

            for (const key in category) {
                const value = category[key];

                if (sentence.toLowerCase().includes(value.toLowerCase())) {
                    return { dinKey, key }; // Return as an object
                }
            }
        }
        return null;
    }
    
}
 
export default SentenceParser;
 