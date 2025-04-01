
import SystemRequirementXML from './Entites/SystemEntity/SystemXMLBuilder/SystemRequirementXML.js';
import SystemLocationXML from './Entites/SystemEntity/SystemXMLBuilder/SystemLocationXML.js';
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
 