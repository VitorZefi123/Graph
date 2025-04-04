class SystemRequirementXML {
    static CONDITION = "Condition";
    static TYPE = "Type";
    static PRIMITIVE = "Primitive";
    static PROPERTY = "Property";
    static NAME = "Name";
    static ENTITY_TYPE = "EntityType";
    static OPERATOR = "Operator";
    static EQUAL = "Equal";
    static VALUE = "Value";
    static SYSTEM_REQUIREMENT = "System Requirement";
    static EMPTY_SPACE = " ";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(SystemRequirementXML.CONDITION);
        condition.setAttribute(SystemRequirementXML.TYPE, SystemRequirementXML.PRIMITIVE);

        const property = xmlDoc.createElement(SystemRequirementXML.PROPERTY);

        const name = xmlDoc.createElement(SystemRequirementXML.NAME);
        name.textContent = this.columnName;

        const entityType = xmlDoc.createElement(SystemRequirementXML.ENTITY_TYPE);
        entityType.textContent = this.tableName;

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(SystemRequirementXML.OPERATOR);
        operator.textContent = SystemRequirementXML.EQUAL;

        const value = xmlDoc.createElement(SystemRequirementXML.VALUE);
        value.textContent = this.hashMap.get(SystemRequirementXML.SYSTEM_REQUIREMENT) || SystemRequirementXML.EMPTY_SPACE;
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default SystemRequirementXML;
