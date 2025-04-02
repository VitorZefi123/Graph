class SystemTradeXML {
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
    static SYSTEM_TRADE = "System Trade";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(SystemTradeXML.CONDITION);
        condition.setAttribute(SystemTradeXML.TYPE, SystemTradeXML.PRIMITIVE);

        const property = xmlDoc.createElement(SystemTradeXML.PROPERTY);

        const name = xmlDoc.createElement(SystemTradeXML.NAME);
        name.textContent = this.columnName;

        const entityType = xmlDoc.createElement(SystemTradeXML.ENTITY_TYPE);
        entityType.textContent = this.tableName;

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(SystemTradeXML.OPERATOR);
        operator.textContent = SystemTradeXML.EQUAL;

        const value = xmlDoc.createElement(SystemTradeXML.VALUE);
        value.textContent = this.hashMap.get(SystemTradeXML.SYSTEM_TRADE) || SystemTradeXML.EMPTY_SPACE;
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default SystemTradeXML;