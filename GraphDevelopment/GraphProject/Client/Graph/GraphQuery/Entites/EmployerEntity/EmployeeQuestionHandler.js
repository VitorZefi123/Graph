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
        let columnName = null;
        for (const [columnCalled, columnNameMapped] of Object.entries(EmployeeColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnName = columnNameMapped;
                break;
            }
        }

        if (columnName === EmployeeColumns.Columns.NAME) {
            const employeeNameParser = new EmployeeNameParser(columnName, this.tableName, this.sentence)
            return employeeNameParser.parse();
        }

        if (columnName === EmployeeColumns.Columns.FUNCTION) {
            const employeeFunctionParser = new EmployeeFunctionParser(columnName, this.tableName, this.sentence)
            return employeeFunctionParser.parse();
        }

        if (columnName === EmployeeColumns.Columns.COMPANY) {
            const employeeCompanyParser = new EmployeeCompanyParser(columnName, this.tableName, this.sentence)
            return employeeCompanyParser.parse();
        }

        if (columnName === EmployeeColumns.Columns.ACCOUNT) {
            const accountEmployerParser = new EmployeeAccountParser(columnName, this.tableName, this.sentence)
            return accountEmployerParser.parse();
        }
    }
}

export default EmployeeQuestionHandler;
