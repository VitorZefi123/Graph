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

    // Method to process the sentence
    parseSentence() {
        return this.getValueFromType(this.sentence);
    }

    getValueFromType(sentence) {
        let columnName = null;

              // Check if the sentence contains any unit
              for (const [columnCalled, columnNameMapped] of Object.entries(ContractColumns.columnToNameMap)) {
                if (sentence.toLowerCase().includes(columnCalled.toLowerCase())) {
                    columnName = columnNameMapped; 
                    break;  
                }
            }

        if(columnName == ContractColumns.Columns.END_DATE){
            const contractTerminationDate = new ContractTerminationParser(columnName, this.tableName, this.sentence)
            return contractTerminationDate.parse();
        }

        if(columnName == ContractColumns.Columns.START_DATE){
            const contractStartDate = new ContractStartParser(columnName, this.tableName, this.sentence)
            return contractStartDate.parse();
        }

        if(columnName == ContractColumns.Columns.CONTRACT_TYPE){
            const contractType = new ContractTypeParser(columnName, this.tableName, this.sentence)
            return contractType.parse();
        }

        if(columnName == ContractColumns.Columns.CONTRACTOR){
            const companyContractor = new CompanyContractorParser(columnName, this.tableName, this.sentence)
            return companyContractor.parse();
        }
        if(columnName == ContractColumns.Columns.NOTIFICATION_PERIOD){
            const contractNoticePeriodParser = new ContractNoticePeriodParser(columnName, this.tableName, this.sentence)
            return contractNoticePeriodParser.parse();
        }
        if(columnName == ContractColumns.Columns.PARENT_CONTRACT){
            const parentContractParser = new ParentContractParser(columnName, this.tableName, this.sentence)
            return parentContractParser.parse();
        }
        if(columnName == ContractColumns.Columns.JURISDICTION){
            const lawJurisdictionParser = new LawJurisdictionParser(columnName, this.tableName, this.sentence)
            return lawJurisdictionParser.parse();
        }


    }
}

export default ContractQuestionHandler;
