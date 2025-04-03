class LockersFloorXML {
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
    static FLOOR_VALUES = "Floor Values";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(LockersFloorXML.CONDITION);
        condition.setAttribute(LockersFloorXML.TYPE, LockersFloorXML.PRIMITIVE);

        const property = xmlDoc.createElement(LockersFloorXML.PROPERTY);

        const name = xmlDoc.createElement(LockersFloorXML.NAME);
        name.textContent = this.columnName;

        const entityType = xmlDoc.createElement(LockersFloorXML.ENTITY_TYPE);
        entityType.textContent = this.tableName;

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(LockersFloorXML.OPERATOR);
        operator.textContent = LockersFloorXML.EQUAL;

        const value = xmlDoc.createElement(LockersFloorXML.VALUE);
        value.textContent = this.hashMap.get(LockersFloorXML.FLOOR_VALUES) || LockersFloorXML.EMPTY_SPACE;
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default LockersFloorXML;