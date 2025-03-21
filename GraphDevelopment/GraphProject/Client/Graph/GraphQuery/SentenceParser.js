import TableNames from './TableNames.js';
import ContractQuestionHandler from './Entites/ContractEntity/ContractQuestionHandler.js';
import SystemQuestionHandler from './Entites/SystemEntity/SystemQuestionHandler.js';
import EmployeeQuestionHandler from './Entites/EmployerEntity/EmployeeQuestionHandler.js';
import RoomQuestionHandler from './Entites/RoomEntity/RoomQuestionHandler.js';
import LeasesQuestionHandler from './Entites/LeasesEntity/LeasesQuestionHandler.js';
import LevelQuestionHandler from './Entites/LevelEntity/LevelQuestionHandler.js';
import AssetQuestionHandler from './Entites/AssetEntity/AssetQuestionHandler.js';
 
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
 
        debugger;

        if(this.tableName.includes(TableNames.Tables.ROOM)) {
            const roomQuestionHandler = new RoomQuestionHandler(sentence, TableNames.Tables.ROOM);
            return roomQuestionHandler.parseSentence();
          }

        if(this.tableName.includes(TableNames.Tables.CONTRACT)) {
          const contractQuestionHandler = new ContractQuestionHandler(sentence, TableNames.Tables.CONTRACT);
          return contractQuestionHandler.parseSentence();
        }

        if(this.tableName.includes(TableNames.Tables.SYSTEMS)) {
            const systemQuestionHandler = new SystemQuestionHandler(sentence, TableNames.Tables.SYSTEMS);
            return systemQuestionHandler.parseSentence();
          }

        if(this.tableName.includes(TableNames.Tables.EMPLOYEE)) {
            const employeeQuestionHandler = new EmployeeQuestionHandler(sentence, TableNames.Tables.EMPLOYEE);
            return employeeQuestionHandler.parseSentence();
          }
    
          if(this.tableName.includes(TableNames.Tables.LEASES)) {
            const leasesQuestionHandler = new LeasesQuestionHandler(sentence, TableNames.Tables.LEASES);
            return leasesQuestionHandler.parseSentence();
          }

          if(this.tableName.includes(TableNames.Tables.LEVEL)) {
            const levelQuestionHandler = new LevelQuestionHandler(sentence, TableNames.Tables.LEVEL);
            return levelQuestionHandler.parseSentence();
          }
debugger;
          if(this.tableName.includes(TableNames.Tables.ASSET)) {
            const assetQuestionHandler = new AssetQuestionHandler(sentence, TableNames.Tables.ASSET);
            return assetQuestionHandler.parseSentence();
          }
        
        }
}
 
export default SentenceParser;
 