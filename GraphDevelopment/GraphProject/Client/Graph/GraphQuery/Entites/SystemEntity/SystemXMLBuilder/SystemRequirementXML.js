class SystemRequirementXML {
    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement("Condition");
        condition.setAttribute("Type", "Primitive");

        const property = xmlDoc.createElement("Property");

        const name = xmlDoc.createElement("Name");
        name.textContent = this.columnName;

        const entityType = xmlDoc.createElement("EntityType");
        entityType.textContent = this.tableName;

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement("Operator");
        operator.textContent = "Equal";

        const value = xmlDoc.createElement("Value");
        value.textContent = this.hashMap.get("System Requirement") || " "; 
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default SystemRequirementXML;
