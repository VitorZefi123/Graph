import EmployeeColumns from './EmployeColumns.js';
import EmployeeNameParser from './EmployerColumnParser/EmployeeNameParser.js';
import EmployeeFunctionParser from './EmployerColumnParser/EmployeeFunctionParser.js';
import EmployeeCompanyParser from './EmployerColumnParser/EmployeeCompanyParser.js';
import EmployeeAccountParser from './EmployerColumnParser/EmployeeAccountParser.js';

class EmployeeQuestionHandler {
    constructor(sentence, tableName) {
        this.tableName = tableName;
        this.sentence = sentence;
    }

    parseSentence() {
        return this.getValueFromType(this.sentence);
    }

    getValueFromType(sentence) {
        const responseVector = []; 
        const columnNames = []; 
    
        for (const [columnCalled, columnNameMapped] of Object.entries(EmployeeColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }

        if (columnNames.length === 0) {
            return null;
        }
    
        if (columnNames.includes(EmployeeColumns.Columns.NAME)) {
            const employeeNameParser = new EmployeeNameParser(EmployeeColumns.Columns.NAME, this.tableName, this.sentence);
            responseVector.push(...employeeNameParser.parse());
        }
    
        if (columnNames.includes(EmployeeColumns.Columns.FUNCTION)) {
            const employeeFunctionParser = new EmployeeFunctionParser(EmployeeColumns.Columns.FUNCTION, this.tableName, this.sentence);
            responseVector.push(...employeeFunctionParser.parse());
        }
    
        if (columnNames.includes(EmployeeColumns.Columns.COMPANY)) {
            const employeeCompanyParser = new EmployeeCompanyParser(EmployeeColumns.Columns.COMPANY, this.tableName, this.sentence);
            responseVector.push(...employeeCompanyParser.parse());
        }
    
        if (columnNames.includes(EmployeeColumns.Columns.ACCOUNT)) {
            const accountEmployerParser = new EmployeeAccountParser(EmployeeColumns.Columns.ACCOUNT, this.tableName, this.sentence);
            responseVector.push(...accountEmployerParser.parse());
        }
    
        return responseVector; 
    }
    
}

export default EmployeeQuestionHandler;
