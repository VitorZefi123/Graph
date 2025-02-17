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

        // Category Code

        /*       for (const dinKey in Category.getCategoryMapping()) {
            const category = Category.getCategoryMapping()[dinKey];
      
            // Iterate through each subcategory in the DIN
            for (const key in category) {
              const value = category[key];
      
              // Check if the sentence includes this category or subcategory
              if (sentence.toLowerCase().includes(value.toLowerCase())) {
                result.value = dinKey + "-" + key;
                break; // Stop if the category and subcategory are found
              }
            }
      
            // If a match was found, break out of the outer loop
            if (result.value) {
              break;
            }
          }
   */
        const dateRegex = /\b(?:\d{4}-\d{2}-\d{2}|\d{2}[\/.-]\d{2}[\/.-]\d{4})\b/;
        const numberRegex = /[-+]?[0-9]*\.?[0-9]+/;
        debugger;
    
        const dateMatch = sentence.match(dateRegex);
        const numberMatch = sentence.match(numberRegex);
    
        if (dateMatch) {
            result.value = dateMatch[0];
        } else if (numberMatch) {
            result.value = parseFloat(numberMatch[0]);
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
 