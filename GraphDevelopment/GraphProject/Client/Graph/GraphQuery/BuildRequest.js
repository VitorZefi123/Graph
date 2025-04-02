
import SystemRequirementXML from './Entites/SystemEntity/SystemXMLBuilder/SystemRequirementXML.js';
import SystemTradeXML from './Entites/SystemEntity/SystemXMLBuilder/SystemTradeXML.js';
import SystemLocationXML from './Entites/SystemEntity/SystemXMLBuilder/SystemLocationXML.js';
import SystemComponentCodeXML from './Entites/SystemEntity/SystemXMLBuilder/SystemComponentCodeXML.js';
import SystemMaintainedXML from './Entites/SystemEntity/SystemXMLBuilder/SystemMaintainedXML.js';
import EmployeeFunctionXML from './Entites/EmployerEntity/EmpoyeeXMLBuilder/EmployeeFunctionXML.js';
import TableNames from './TableNames.js';
import SystemColumns from './Entites/SystemEntity/SystemColumns.js';
import EmployeColumns from './Entites/EmployerEntity/EmployeColumns.js';

class BuildRequest {

    static CONSTANTS = {
        TABLE_NAME: "Table Name",
        COLUMN_NAME: "Column Name",
    };

    constructor(newSentence) {
        this.newSentence = newSentence;       
    }
 
    buildXML() {  
        var hashMap = this.transformArrayToMap(this.newSentence)      
        return this.buildXMLRequest(hashMap);
    }
 
    buildXMLRequest(hashMap) {
        debugger;

        if (this.getValueByPartialKey(hashMap, BuildRequest.CONSTANTS.TABLE_NAME) === TableNames.Tables.SYSTEMS && this.getValueByPartialKey(hashMap, BuildRequest.CONSTANTS.COLUMN_NAME) === SystemColumns.Columns.REQUIREMENT )  {
          const systemRequirementXML = new SystemRequirementXML(TableNames.Tables.SYSTEMS, SystemColumns.Columns.REQUIREMENT, hashMap);
          const result = systemRequirementXML.buildXML();
          if (result) {
              return result;
          }
      }

      if (this.getValueByPartialKey(hashMap, BuildRequest.CONSTANTS.TABLE_NAME) === TableNames.Tables.SYSTEMS && this.getValueByPartialKey(hashMap, BuildRequest.CONSTANTS.COLUMN_NAME) === SystemColumns.Columns.SYSTEM_LOCATION )  {
        const systemLocationXML = new SystemLocationXML(TableNames.Tables.SYSTEMS, SystemColumns.Columns.SYSTEM_LOCATION, hashMap);
        const result = systemLocationXML.buildXML();
        if (result) {
            return result;
        }
       }

       if (this.getValueByPartialKey(hashMap, BuildRequest.CONSTANTS.TABLE_NAME) === TableNames.Tables.SYSTEMS && this.getValueByPartialKey(hashMap, BuildRequest.CONSTANTS.COLUMN_NAME) === SystemColumns.Columns.MAINTAINED_BY )  {
        const systemMaintainedXML = new SystemMaintainedXML(TableNames.Tables.SYSTEMS, SystemColumns.Columns.MAINTAINED_BY, hashMap);
        const result = systemMaintainedXML.buildXML();
        if (result) {
            return result;
        }
       }

       if (this.getValueByPartialKey(hashMap, BuildRequest.CONSTANTS.TABLE_NAME) === TableNames.Tables.SYSTEMS && this.getValueByPartialKey(hashMap, BuildRequest.CONSTANTS.COLUMN_NAME) === SystemColumns.Columns.TRADE )  {
        const systemTradeXML = new SystemTradeXML(TableNames.Tables.SYSTEMS, SystemColumns.Columns.TRADE, hashMap);
        const result = systemTradeXML.buildXML();
        if (result) {
            return result;
        }
       }

       if (this.getValueByPartialKey(hashMap, BuildRequest.CONSTANTS.TABLE_NAME) === TableNames.Tables.SYSTEMS && this.getValueByPartialKey(hashMap, BuildRequest.CONSTANTS.COLUMN_NAME) === SystemColumns.Columns.CODE )  {
        const systemComponentCodeXML = new SystemComponentCodeXML(TableNames.Tables.SYSTEMS, SystemColumns.Columns.CODE, hashMap);
        const result = systemComponentCodeXML.buildXML();
        if (result) {
            return result;
        }
       }

       if (this.getValueByPartialKey(hashMap, BuildRequest.CONSTANTS.TABLE_NAME) === TableNames.Tables.EMPLOYEE && this.getValueByPartialKey(hashMap, BuildRequest.CONSTANTS.COLUMN_NAME) === EmployeColumns.Columns.FUNCTION )  {
            const employeeFunctionXML = new EmployeeFunctionXML(TableNames.Tables.EMPLOYEE, EmployeColumns.Columns.FUNCTION, hashMap);
            const result = employeeFunctionXML.buildXML();
            if (result) {
                return result;
            }
        }
   

    }


    transformArrayToMap(data) {
        const hashMap = new Map();
    
        data.forEach(item => {
            const parts = item.split(/:(.+)/); 
            hashMap.set(parts[0].trim(), parts[1].trim()); 
        });
    
        return hashMap;
    }

    getValueByPartialKey(hashMap, partialKey) {
        for (let key of hashMap.keys()) {
            if (key.startsWith(partialKey)) {
                return hashMap.get(key);
            }
        }
        return null;
    }
    
}
 
export default BuildRequest;
 