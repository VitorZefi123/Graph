class LockersBuildingXML {
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
    static BUILDING_VALUES = "Building Values";

    constructor(tableName, columnName, hashMap) {
        this.tableName = tableName;
        this.columnName = columnName;
        this.hashMap = hashMap;
    }

    buildXML() {
        const xmlDoc = document.implementation.createDocument("", "", null);

        const condition = xmlDoc.createElement(LockersBuildingXML.CONDITION);
        condition.setAttribute(LockersBuildingXML.TYPE, LockersBuildingXML.PRIMITIVE);

        const property = xmlDoc.createElement(LockersBuildingXML.PROPERTY);

        const name = xmlDoc.createElement(LockersBuildingXML.NAME);
        name.textContent = this.columnName;

        const entityType = xmlDoc.createElement(LockersBuildingXML.ENTITY_TYPE);
        entityType.textContent = this.tableName;

        property.appendChild(name);
        property.appendChild(entityType);

        const operator = xmlDoc.createElement(LockersBuildingXML.OPERATOR);
        operator.textContent = LockersBuildingXML.EQUAL;

        const value = xmlDoc.createElement(LockersBuildingXML.VALUE);
        value.textContent = this.hashMap.get(LockersBuildingXML.BUILDING_VALUES) || LockersBuildingXML.EMPTY_SPACE;
    
        condition.appendChild(property);
        condition.appendChild(operator);
        condition.appendChild(value);

        xmlDoc.appendChild(condition);

        const xmlString = new XMLSerializer().serializeToString(xmlDoc);
        return xmlString;
    }
}

export default LockersBuildingXML;