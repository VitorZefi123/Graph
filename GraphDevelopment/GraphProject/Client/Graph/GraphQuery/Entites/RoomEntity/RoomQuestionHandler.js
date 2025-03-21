import RoomColumns from './RoomColumns.js';
import RoomCleaningGroupParser from './RoomColumnParser/RoomCleaningGroupParser.js';
import RoomReservationParser from './RoomColumnParser/RoomReservationParser.js';
import RoomDateParser from './RoomColumnParser/RoomDateParser.js';
import RoomSizeParser from './RoomColumnParser/RoomSizeParser.js';
import RoomCategoryParser from './RoomColumnParser/RoomCategoryParser.js';
import AreaUnit from './RoomValues/AreaUnit.js';
import Category from './RoomValues/Category.js';
import Comparison from './RoomValues/Comparison.js';

class RoomQuestionHandler {
    constructor(sentence, tableName) {
        this.tableName = tableName;
        this.sentence = sentence;
    }

    parseSentence() {
        return this.getValueFromType(this.sentence);
    }

    getValueFromType(sentence) {
       
        let comparisonOperator = "";  
        let unitUsed = ""; 
        let columnName = null;
        const dateRegex = /\b(?:\d{4}-\d{2}-\d{2}|\d{2}[\/.-]\d{2}[\/.-]\d{4})\b/;
        const numberRegex = /[-+]?[0-9]*\.?[0-9]+/;  
        const categoryMatch = this.findCategory(sentence);
        const dateMatch = sentence.match(dateRegex);
        const numberMatch = sentence.match(numberRegex);

        for (const [columnCalled, columnNameMapped] of Object.entries(RoomColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnName = columnNameMapped;
                break;
            }
        }

        for (const [term, operator] of Object.entries(Comparison.termToOperatorMap)) {
            if (sentence.toLowerCase().includes(term)) {
                comparisonOperator = operator;  
                break;  
            }
        }
    
        for (const [unit, unitName] of Object.entries(AreaUnit.unitToNameMap)) {
            if (sentence.toLowerCase().includes(unit.toLowerCase())) {
                unitUsed = unitName; 
                break;  
            }
        }
        

        if (dateMatch) {
            const parser = new RoomDateParser(RoomColumns.Columns.RESERVED, dateMatch, comparisonOperator, this.tableName);
            return parser.parse();
        }

        if (columnName == RoomColumns.Columns.NET_AREA || unitUsed) {
            const parser = new RoomSizeParser(RoomColumns.Columns.NET_AREA , parseFloat(numberMatch[0]), unitUsed, comparisonOperator, this.tableName);
            return parser.parse();
        }

        if (columnName == RoomColumns.Columns.CATEGORY || categoryMatch) {
            const parser = new RoomCategoryParser(RoomColumns.Columns.CATEGORY, categoryMatch, this.tableName);
            return parser.parse();
        }

        if (columnName === RoomColumns.Columns.CLEANING_GROUP) {
            const roomCleaningGroupParser = new RoomCleaningGroupParser(columnName, this.tableName, this.sentence);
            return roomCleaningGroupParser.parse();
        }


        if (columnName === RoomColumns.Columns.RESERVED) {
            const roomReservedParser = new RoomReservationParser(columnName, this.tableName, this.sentence);
            return roomReservedParser.parse();
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

export default RoomQuestionHandler;
