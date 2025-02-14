import Comparison from './Comparison.js';
import AreaUnit from './AreaUnit.js';
import Columns from './Columns.js';
 
class SentenceParser {
    // Constructor to initialize the sentence
    constructor(sentence) {
        this.sentence = sentence;
    }
 
    // Method to process the sentence
    parseSentence() {
        // Debugging
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
        break; // Stop early if found
    }
}
        // Check if the sentence contains any comparison term
        for (const [term, operator] of Object.entries(Comparison.termToOperatorMap)) {
            if (sentence.toLowerCase().includes(term)) {
                result.comparisonOperator = operator;
                break; // Stop early if found
            }
        }
   
        // Check if the sentence contains any unit
        for (const [unit, unitName] of Object.entries(AreaUnit.unitToNameMap)) {
            if (sentence.toLowerCase().includes(unit)) {
                result.unit = unitName;
                break; // Stop early if found
            }
        }
   
        // Extract numeric value
        const valueMatch = sentence.match(/[-+]?[0-9]*\.?[0-9]+/);
        if (valueMatch) {
            result.value = parseFloat(valueMatch[0]);
        }
   
        return [
            `Column Name: ${result.columnName || 'N/A'}`,
            `Comparison Operator: ${result.comparisonOperator || 'N/A'}`,
            `Value: ${result.value || 'N/A'}`,
            `Unit: ${result.unit || 'N/A'}`
        ];
       }
}
 
export default SentenceParser;
 