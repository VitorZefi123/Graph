import TableNames from './TableNames.js';
import ContractQuestionHandler from './Entites/ContractEntity/ContractQuestionHandler.js';
import SystemQuestionHandler from './Entites/SystemEntity/SystemQuestionHandler.js';
import EmployeeQuestionHandler from './Entites/EmployerEntity/EmployeeQuestionHandler.js';
import RoomQuestionHandler from './Entites/RoomEntity/RoomQuestionHandler.js';
import LeasesQuestionHandler from './Entites/LeasesEntity/LeasesQuestionHandler.js';
import LevelQuestionHandler from './Entites/LevelEntity/LevelQuestionHandler.js';
import AssetQuestionHandler from './Entites/AssetEntity/AssetQuestionHandler.js';
import ParkingQuestionHandler from './Entites/ParkingEntity/ParkingQuestionHandler.js';
import DrawingQuestionHandler from './Entites/DrawingEntity/DrawingQuestionHandler.js'; 
import FurnitureQuestionHandler from './Entites/FurnitureEntity/FurnitureQuestionHandler.js';
import FireDoorsQuestionHandler from './Entites/FireDoorsEntity/FireDoorsQuestionHandler.js';
import BuildingQuestionHandler from './Entites/BuildingEntity/BuildingQuestionHandler.js';
import LockersQuestionHandler from './Entites/LockersEntity/LockersQuestionHandler.js';
 
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

        if (this.tableName.includes(TableNames.Tables.ROOM)) {
          const roomQuestionHandler = new RoomQuestionHandler(sentence, TableNames.Tables.ROOM);
          const result = roomQuestionHandler.parseSentence();
          if (result) {
              return result;
          }
      }

        if(this.tableName.includes(TableNames.Tables.CONTRACT)) {
          const contractQuestionHandler = new ContractQuestionHandler(sentence, TableNames.Tables.CONTRACT);
          const result = contractQuestionHandler.parseSentence();
          if (result) {
            return result;
          }
        }

        if(this.tableName.includes(TableNames.Tables.SYSTEMS)) {
            const systemQuestionHandler = new SystemQuestionHandler(sentence, TableNames.Tables.SYSTEMS);
            const result = systemQuestionHandler.parseSentence();
            if (result) {
              return result;
            }
          }

        if(this.tableName.includes(TableNames.Tables.EMPLOYEE)) {
            const employeeQuestionHandler = new EmployeeQuestionHandler(sentence, TableNames.Tables.EMPLOYEE);
            const result = employeeQuestionHandler.parseSentence();
            if (result) {
              return result;
            }
          }
    
          if(this.tableName.includes(TableNames.Tables.LEASES)) {
            const leasesQuestionHandler = new LeasesQuestionHandler(sentence, TableNames.Tables.LEASES);
            const result = leasesQuestionHandler.parseSentence();
            if(result) {
              return result;
            } 
          }

          if(this.tableName.includes(TableNames.Tables.LEVEL)) {
            const levelQuestionHandler = new LevelQuestionHandler(sentence, TableNames.Tables.LEVEL);
            const result = levelQuestionHandler.parseSentence();
            if(result){
              return result;
            }
          }
          
          if(this.tableName.includes(TableNames.Tables.ASSET)) {
            const assetQuestionHandler = new AssetQuestionHandler(sentence, TableNames.Tables.ASSET);
            const result = assetQuestionHandler.parseSentence();
            if (result){
              return result;
            }
          }

          if(this.tableName.includes(TableNames.Tables.PARKING)) {
            const parkingQuestionHandler = new ParkingQuestionHandler(sentence, TableNames.Tables.PARKING);
            const result = parkingQuestionHandler.parseSentence();
            if (result){
              return result;
            }
          }

          if(this.tableName.includes(TableNames.Tables.DRAWING)) {
            const drawingQuestionHandler = new DrawingQuestionHandler(sentence, TableNames.Tables.DRAWING);
            const result = drawingQuestionHandler.parseSentence();
            if (result){
              return result;
            }
          }
          
          if(this.tableName.includes(TableNames.Tables.FURNITURE)) {
            const furnitureQuestionHandler = new FurnitureQuestionHandler(sentence, TableNames.Tables.FURNITURE);
            const result = furnitureQuestionHandler.parseSentence();
            if (result){
              return result;
            }
          }

          if(this.tableName.includes(TableNames.Tables.FIRE_DOORS)) {
            const fireDoorsQuestionHandler = new FireDoorsQuestionHandler(sentence, TableNames.Tables.FIRE_DOORS);
            const result = fireDoorsQuestionHandler.parseSentence();
            if (result) {
              return result;
            }
          }

          if(this.tableName.includes(TableNames.Tables.BUILDING)) {
            const fireDoorsQuestionHandler = new BuildingQuestionHandler(sentence, TableNames.Tables.BUILDING);
            const result = fireDoorsQuestionHandler.parseSentence();
            if (result) {
              return result;
            }
          }

          if(this.tableName.includes(TableNames.Tables.LOCKERS)) {
            const lockersQuestionHandler = new LockersQuestionHandler(sentence, TableNames.Tables.LOCKERS);
            const result = lockersQuestionHandler.parseSentence();
            if (result) {
              return result;
            }
          }

        }
}
 
export default SentenceParser;
 