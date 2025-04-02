class SystemMaintainedXML {
    static CONDITION = "Condition";
    static TYPE = "Type";
    static PRIMITIVE = "Primitive";
    static PROPERTY = "Property";
    static NAME = "Name";
    static ENTITY_TYPE = "EntityType";
    static OPERATOR = "Operator";
    static EQUAL = "Equal";
    static VALUE = "Value";
    static EMPTY_SPACE = " ";
    static SYSTEM_MAINTANIED = "System Maintanied";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(SystemMaintainedXML.CONDITION);
        condition.setAttribute(SystemMaintainedXML.TYPE, SystemMaintainedXML.PRIMITIVE);

        const property = xmlDoc.createElement(SystemMaintainedXML.PROPERTY);

        const name = xmlDoc.createElement(SystemMaintainedXML.NAME);
        name.textContent = this.columnName;

        const entityType = xmlDoc.createElement(SystemMaintainedXML.ENTITY_TYPE);
        entityType.textContent = this.tableName;

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(SystemMaintainedXML.OPERATOR);
        operator.textContent = SystemMaintainedXML.EQUAL;

        const value = xmlDoc.createElement(SystemMaintainedXML.VALUE);
        value.textContent = this.hashMap.get(SystemMaintainedXML.SYSTEM_MAINTANIED) || SystemMaintainedXML.EMPTY_SPACE;
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default SystemMaintainedXML;