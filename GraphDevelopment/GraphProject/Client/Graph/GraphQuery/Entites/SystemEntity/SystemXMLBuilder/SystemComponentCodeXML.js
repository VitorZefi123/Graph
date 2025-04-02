class SystemComponentCodeXML {
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
    static SYSTEM_COMPONENT_CODE = "System Component Code";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(SystemComponentCodeXML.CONDITION);
        condition.setAttribute(SystemComponentCodeXML.TYPE, SystemComponentCodeXML.PRIMITIVE);

        const property = xmlDoc.createElement(SystemComponentCodeXML.PROPERTY);

        const name = xmlDoc.createElement(SystemComponentCodeXML.NAME);
        name.textContent = this.columnName;

        const entityType = xmlDoc.createElement(SystemComponentCodeXML.ENTITY_TYPE);
        entityType.textContent = this.tableName;

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(SystemComponentCodeXML.OPERATOR);
        operator.textContent = SystemComponentCodeXML.EQUAL;

        const value = xmlDoc.createElement(SystemComponentCodeXML.VALUE);
        value.textContent = this.hashMap.get(SystemComponentCodeXML.SYSTEM_COMPONENT_CODE) || SystemComponentCodeXML.EMPTY_SPACE;
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default SystemComponentCodeXML;