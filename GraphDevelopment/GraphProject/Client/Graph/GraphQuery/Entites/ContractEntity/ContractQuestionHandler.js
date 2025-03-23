import ContractColumns from './ContractColumns.js';
import ContractTerminationParser from './ContractColumnsParser/ContractTerminationParser.js';
import ContractStartParser from './ContractColumnsParser/ContractStartParser.js';
import ContractTypeParser from './ContractColumnsParser/ContractTypeParser.js';
import CompanyContractorParser from './ContractColumnsParser/CompanyContractorParser.js';
import ContractNoticePeriodParser from './ContractColumnsParser/ContractNoticePeriodParser.js';
import ParentContractParser from './ContractColumnsParser/ParentContractParser.js';
import LawJurisdictionParser from './ContractColumnsParser/LawJurisdictionParser.js';

class ContractQuestionHandler {
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
    
        for (const [columnCalled, columnNameMapped] of Object.entries(ContractColumns.columnToNameMap)) {
            if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                columnNames.push(columnNameMapped);
            }
        }
    
        if (columnNames.length === 0) {
            return null;
        }
    
        if (columnNames.includes(ContractColumns.Columns.END_DATE)) {
            const contractTerminationDate = new ContractTerminationParser(ContractColumns.Columns.END_DATE, this.tableName, this.sentence);
            responseVector.push(...contractTerminationDate.parse());
        }
    
        if (columnNames.includes(ContractColumns.Columns.START_DATE)) {
            const contractStartDate = new ContractStartParser(ContractColumns.Columns.START_DATE, this.tableName, this.sentence);
            responseVector.push(...contractStartDate.parse());
        }
    
        if (columnNames.includes(ContractColumns.Columns.CONTRACT_TYPE)) {
            const contractType = new ContractTypeParser(ContractColumns.Columns.CONTRACT_TYPE, this.tableName, this.sentence);
            responseVector.push(...contractType.parse());
        }
    
        if (columnNames.includes(ContractColumns.Columns.CONTRACTOR)) {
            const companyContractor = new CompanyContractorParser(ContractColumns.Columns.CONTRACTOR, this.tableName, this.sentence);
            responseVector.push(...companyContractor.parse());
        }
    
        if (columnNames.includes(ContractColumns.Columns.NOTIFICATION_PERIOD)) {
            const contractNoticePeriodParser = new ContractNoticePeriodParser(ContractColumns.Columns.NOTIFICATION_PERIOD, this.tableName, this.sentence);
            responseVector.push(...contractNoticePeriodParser.parse());
        }
    
        if (columnNames.includes(ContractColumns.Columns.PARENT_CONTRACT)) {
            const parentContractParser = new ParentContractParser(ContractColumns.Columns.PARENT_CONTRACT, this.tableName, this.sentence);
            responseVector.push(...parentContractParser.parse());
        }
    
        if (columnNames.includes(ContractColumns.Columns.JURISDICTION)) {
            const lawJurisdictionParser = new LawJurisdictionParser(ContractColumns.Columns.JURISDICTION, this.tableName, this.sentence);
            responseVector.push(...lawJurisdictionParser.parse());
        }
    
        return responseVector; 
    }
    
}

export default ContractQuestionHandler;
