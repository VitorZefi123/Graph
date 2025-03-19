import Comparison from './ColumnValues/Comparison.js';
import AreaUnit from './ColumnValues/AreaUnit.js';
import Columns from './Columns.js';
import Category from './ColumnValues/Category.js';
import ParserFactory from './ParserFactory.js';
import TableNames from './TableNames.js';
import ContractQuestionHandler from './Entites/ContractEntity/ContractQuestionHandler.js';
import SystemQuestionHandler from './Entites/SystemEntity/SystemQuestionHandler.js';
import EmployeeQuestionHandler from './Entites/EmployerEntity/EmployeeQuestionHandler.js';
import RoomQuestionHandler from './Entites/RoomEntity/RoomQuestionHandler.js';
 
class SentenceParser {
    // Constructor to initialize the sentence
    constructor(sentence, tableName) {
        this.tableName = tableName;
        this.sentence = sentence;
    }
 
    // Method to process the sentence
    parseSentence() {
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

        if(this.tableName.includes(TableNames.Tables.ROOM)) {
            const roomQuestionHandler = new RoomQuestionHandler(this.sentence, TableNames.Tables.ROOM);
            return roomQuestionHandler.parseSentence();
          }
  

        if(this.tableName.includes(TableNames.Tables.CONTRACT)) {
          const contractQuestionHandler = new ContractQuestionHandler(this.sentence, TableNames.Tables.CONTRACT);
          return contractQuestionHandler.parseSentence();
        }

        if(this.tableName.includes(TableNames.Tables.SYSTEMS)) {
            const systemQuestionHandler = new SystemQuestionHandler(this.sentence, TableNames.Tables.SYSTEMS);
            return systemQuestionHandler.parseSentence();
          }

        if(this.tableName.includes(TableNames.Tables.EMPLOYEE)) {
            const employeeQuestionHandler = new EmployeeQuestionHandler(this.sentence, TableNames.Tables.EMPLOYEE);
            return employeeQuestionHandler.parseSentence();
          }
    
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
        
        const parserFactory = new ParserFactory(this.tableName, columnName, this.sentence, dateMatch, categoryMatch, unitUsed, numberMatch, comparisonOperator);
        return parserFactory.createParser();
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
 