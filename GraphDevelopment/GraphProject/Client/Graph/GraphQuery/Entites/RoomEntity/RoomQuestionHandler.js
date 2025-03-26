import RoomColumns from './RoomColumns.js';
import RoomCleaningGroupParser from './RoomColumnParser/RoomCleaningGroupParser.js';
import RoomReservationParser from './RoomColumnParser/RoomReservationParser.js';
import RoomDateParser from './RoomColumnParser/RoomDateParser.js';
import RoomSizeParser from './RoomColumnParser/RoomSizeParser.js';
import RoomCategoryParser from './RoomColumnParser/RoomCategoryParser.js';
import AreaUnit from './RoomValues/AreaUnit.js';
import Category from './RoomValues/Category.js';
import RoomRentabilityParser from './RoomColumnParser/RoomRentabilityParser.js';
import ServiceTypeParser from './RoomColumnParser/ServiceTypeParser.js';
import Comparison from './RoomValues/Comparison.js';
import RoomBuildingParser from './RoomColumnParser/RoomBuildingParser.js';

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
        

        for (const [columnCalled, columnNameMapped] of Object.entries(RoomColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnName = columnNameMapped;
                break;
            }
        }

        const responseVector = []; 
        const columnNames = []; 
    
        for (const [columnCalled, columnNameMapped] of Object.entries(RoomColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }

        if (columnNames.length === 0 && !dateMatch && !categoryMatch && !unitUsed) {
            return null;
        }
    
        if (dateMatch) {
            const parser = new RoomDateParser(RoomColumns.Columns.RESERVED, dateMatch, comparisonOperator, this.tableName);
            responseVector.push(...parser.parse());
        }
    
        if (columnNames.includes(RoomColumns.Columns.NET_AREA) || unitUsed) {
            const parser = new RoomSizeParser(RoomColumns.Columns.NET_AREA, parseFloat(numberMatch[0]), unitUsed, comparisonOperator, this.tableName);
            responseVector.push(...parser.parse());
        }
    
        if (columnNames.includes(RoomColumns.Columns.CATEGORY) || categoryMatch) {
            const parser = new RoomCategoryParser(RoomColumns.Columns.CATEGORY, categoryMatch, this.tableName);
            responseVector.push(...parser.parse());
        }
    
        if (columnNames.includes(RoomColumns.Columns.CLEANING_GROUP)) {
            const parser = new RoomCleaningGroupParser(RoomColumns.Columns.CLEANING_GROUP, this.tableName, this.sentence);
            responseVector.push(...parser.parse());
        }

        if (columnNames.includes(RoomColumns.Columns.RENTABILITY)) {
            const parser = new RoomRentabilityParser(RoomColumns.Columns.RENTABILITY, this.tableName, this.sentence);
            responseVector.push(...parser.parse());
        }

        if (columnNames.includes(RoomColumns.Columns.SERVICE_TYPE)) {
            const parser = new ServiceTypeParser(RoomColumns.Columns.SERVICE_TYPE, this.tableName, this.sentence);
            responseVector.push(...parser.parse());
        }
        if (columnNames.includes(RoomColumns.Columns.BUILDING)) {
            const parser = new RoomBuildingParser(RoomColumns.Columns.BUILDING, this.tableName, this.sentence);
            responseVector.push(...parser.parse());
        }
      
        return responseVector;    
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
