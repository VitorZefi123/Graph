import Comparison from './Comparison.js';
import AreaUnit from './AreaUnit.js';
import Columns from './Columns.js';
import Category from './Category.js';
import SizeParser from './SizeParser.js';
import CategoryParser from './CategoryParser.js';
import DateParser from './DateParser.js';
 
class SentenceParser {
    // Constructor to initialize the sentence
    constructor(sentence, tableName) {
        this.tableName = tableName;
        this.sentence = sentence;
    }
 
    // Method to process the sentence
    parseSentence() {
        console.log("Parsing sentence:", this.sentence);
 
        return this.getValueFromType(this.sentence);
    }
 
    getValueFromType(sentence) {
        let columnName = "";  
        let comparisonOperator = "";  
        let unitUsed = "";  
            
        const dateRegex = /\b(?:\d{4}-\d{2}-\d{2}|\d{2}[\/.-]\d{2}[\/.-]\d{4})\b/;
        const numberRegex = /[-+]?[0-9]*\.?[0-9]+/;  
        const categoryMatch = this.findCategory(sentence);
        const dateMatch = sentence.match(dateRegex);
        const numberMatch = sentence.match(numberRegex);
        debugger;
    
        // Loop through columns to find a matching columnName
        for (const column of Columns.getAllColumns()) {
            if (typeof column === "string" && sentence.toLowerCase().includes(column.toLowerCase())) {
                columnName = column;  
                break;  
            }
        }
    
        // Check if the sentence contains any comparison term
        for (const [term, operator] of Object.entries(Comparison.termToOperatorMap)) {
            if (sentence.toLowerCase().includes(term)) {
                comparisonOperator = operator;  
                break;  
            }
        }
    
        // Check if the sentence contains any unit
        for (const [unit, unitName] of Object.entries(AreaUnit.unitToNameMap)) {
            if (sentence.toLowerCase().includes(unit.toLowerCase())) {
                unitUsed = unitName; 
                break;  
            }
        }

        if (columnName == Columns.DATE || dateMatch) {
            const parser = new DateParser(Columns.DATE, dateMatch, comparisonOperator, this.tableName);
            return parser.parse();
        }
        else if (columnName == Columns.ROOM_SIZE || unitUsed) {
            const parser = new SizeParser(Columns.ROOM_SIZE, parseFloat(numberMatch[0]), unitUsed, comparisonOperator, this.tableName);
            return parser.parse();
        }
        else if (columnName == Columns.CATEGORY || categoryMatch, this.tableName) {
            const parser = new CategoryParser(Columns.CATEGORY, categoryMatch, this.tableName);
            return parser.parse();
        }  
    }
    
    findCategory(sentence) {
        debugger;
        for (const dinKey in Category.getCategoryMapping()) {
          const category = Category.getCategoryMapping()[dinKey];
    
          for (const key in category) {
            const value = category[key];
    
            if (sentence.toLowerCase().includes(key.toLowerCase())) {
              return { dinKey, category: value };  
            }
          }
        }
        return null;
      }
    
}
 
export default SentenceParser;
 