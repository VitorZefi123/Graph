class SystemLocationXML {
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
    static SYSTEM_LOCATION_KEY = "System Location";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(SystemLocationXML.CONDITION);
        condition.setAttribute(SystemLocationXML.TYPE, SystemLocationXML.PRIMITIVE);

        const property = xmlDoc.createElement(SystemLocationXML.PROPERTY);

        const name = xmlDoc.createElement(SystemLocationXML.NAME);
        name.textContent = this.columnName;

        const entityType = xmlDoc.createElement(SystemLocationXML.ENTITY_TYPE);
        entityType.textContent = this.tableName;

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(SystemLocationXML.OPERATOR);
        operator.textContent = SystemLocationXML.EQUAL;

        const value = xmlDoc.createElement(SystemLocationXML.VALUE);
        value.textContent = this.hashMap.get(SystemLocationXML.SYSTEM_LOCATION_KEY) || SystemLocationXML.EMPTY_SPACE;
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default SystemLocationXML;