import ContractColumns from './ContractColumns.js';
import ContractTerminationParser from './ContractColumnsParser/ContractTerminationParser.js';
import ContractStartParser from './ContractColumnsParser/ContractStartParser.js';

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

    }
}

export default ContractQuestionHandler;
